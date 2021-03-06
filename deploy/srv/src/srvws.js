const winston = require('./log/log.js');
const config = require('./config.js');
const handleuserpcapp = require('./handler/pcapp/index.js');

const PubSub = require('pubsub-js');
const usersubfn = require('./handler/socketsubscribe');

const startwebsocketsrv = (http)=>{
  let io = require('socket.io')(http);

  io.on('connection', (socket)=>{
    //console.log('a user connected');

    let ctx = {};//for each connection

    //for test <---
    // ctx.depatid = '5aeac4a846c43bd15c8951f7';
    // ctx.userid = '5aeac4a946c43bd15c895276';
    //for test end <--

    usersubfn(socket,ctx);
    //ctx.tokensubscribe = PubSub.subscribe('allmsg', ctx.userSubscriber);

    socket.on('pcapp',(payload)=>{
      if(!ctx.usertype){
        ctx.usertype = 'pcapp';
      }
      // //console.log('\npc get message:' + JSON.stringify(payload));
      // winston.getlog().info('ctx:', JSON.stringify(ctx));
      handleuserpcapp(socket,payload,ctx);
    });


    socket.on('error',(err)=>{
      PubSub.unsubscribe( ctx.userDeviceSubscriber );
      socket.disconnect(true);
    });

    socket.on('disconnect', ()=> {
      PubSub.unsubscribe( ctx.userDeviceSubscriber );
    });
  });

};

exports.startsrv = startwebsocketsrv;
