const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const bodyParser = require("body-parser");
const config = require('./config');
const routerindex = require("./router/index.js");
const _  = require('lodash');


let startsrv = ()=>{


  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
  });

  app.use((req, res, next)=> {
      //console.log('req.url:' + req.url);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
      next();
  });



  routerindex.startrouter(app);

  http.listen(config.listenport, ()=>{
    console.log(`start server at ${config.listenport}`);
  });

  return http;
};

exports.startsrv = startsrv;
