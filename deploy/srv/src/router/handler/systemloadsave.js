const mongoose     = require('mongoose');
const DBModels = require('../../db/models.js');

const systemloadsave = (req,res)=>{
  const actionname = req.params.actionname;
  const organizationid = mongoose.Types.ObjectId(req.params.organizationid);
  //console.log(`--organizationid=>${organizationid},actionname:${actionname}`);
  if(actionname === 'systemload' || actionname === 'systemsave'){
    const systemconfigModel = DBModels.SystemConfigModel;
    if(actionname === 'systemload'){
      systemconfigModel.findOne({ }, (err, systemconfig)=> {
        if(!err && !!systemconfig){
          res.status(200).json(systemconfig);
        }
        else{
          res.status(200).json({});
        }
      });
    }
    else{//actionname === 'systemsave'
      const updateddata = req.body;
      systemconfigModel.findOneAndUpdate({},{$set:updateddata}, {upsert:true,new: true},(err, systemconfig)=> {
        if(!err && !!systemconfig){
          res.status(200).json(systemconfig);
        }
        else{
          res.status(200).json({});
        }
      });
    }
  }//<---if(actionname === 'systemload' || actionname === 'systemsave'){
};

module.exports= systemloadsave;
