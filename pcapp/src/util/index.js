export const getbardenstring = (score)=>{
  let resultstring = '尚未评估';
  if(score >= 16){
    resultstring = '低危险';
  }
  else if(score >= 12 && score <= 15){
    resultstring = '中等危险';
  }
  else if(score <= 11){
    resultstring = '高危險';
  }
  return resultstring;
}


export const getdefaultnursingmeasures = ()=>{
  const v = {
        nursingmeasures:[
          {
             groupname:'全身治疗',
             options:[
               {
                 name:'1、积极治疗原发病',
                 checked:false,
               },
               {
                 name:'2、增加营养',
                 checked:false,
               },
               {
                 name:'3、抗感染治疗',
                 checked:false,
               },
               {
                 name:'4、心理护理',
                 checked:false,
               },
            ]
        },
        {
          groupname:'体位与活动',
          options:[
            {
              name:'1、建立翻身卡',
              checked:false,
            },
            {
              name:'2、定期翻身或更换体位',
              checked:false,
            },
            {
              name:'3、指导执行肢体主动、被动运动',
              checked:false,
            },
         ]
       },
       {
         groupname:'皮肤护理',
         options:[
           {
             name:'1、使用中性温和的清洁剂清洁身体皮肤',
             checked:false,
           },
           {
             name:'2、使用乳液维持皮肤滋润',
             checked:false,
           },
           {
             name:'3、保持床单位、衣物的清洁、干燥、平整',
             checked:false,
           },
           {
             name:'4、正确摆放位置，预防管道压迫',
             checked:false,
           },
        ]
       },
       {
         groupname:'使用辅助用品',
         options:[
           {
             name:'1、骨突部位予以保护',
             checked:false,
           },
           {
             name:'2、足跟避免受压',
             checked:false,
           },
           {
             name:'3、使用软枕、翻身垫及其它辅助支托',
             checked:false,
           },
           {
             name:'4、使用防压疮 翻身床垫',
             checked:false,
           },
        ]
       },
       {
         groupname:'敷料使用',
         options:[
           {
             name:'1、使用赛肤润',
             checked:false,
           },
           {
             name:'2、使用泡沫敷料',
             checked:false,
           },
           {
             name:'3、使用水胶体敷料',
             checked:false,
           },
           {
             name:'4、使用薄膜敷料',
             checked:false,
           },
           {
             name:'5、纱布、棉垫',
             checked:false,
           },
        ]
       },
       {
         groupname:'患者家属健康教育',
         options:[
           {
             name:'1、知道压疮预防目的及方法',
             checked:false,
           },
           {
             name:'2、指导翻身、肢体活动',
             checked:false,
           },
           {
             name:'3、知道防护用品的使用方法',
             checked:false,
           },
           {
             name:'4、使用薄膜敷料',
             checked:false,
           },
           {
             name:'4、注意营养摄入',
             checked:false,
           },
        ]
       },
      ]
    };
    return v;

}

export const getdefaultlapseto_barden = (evaluatebardenscore)=>{

  const v = {
      evaluatebardenscore:evaluatebardenscore,//evaluatebarden
      preventivesmeasure:[
        {
          name:'1、告知患者及家属压疮的危险性并悬挂“压疮高危”警示标志，进行健康宣教，讲解相关注意事项。',
          checked:false,
        },
        {
          name:'2、定时翻身更换体位，减轻皮肤受压、避免摩擦。',
          checked:false,
        },
        {
          name:'3、使用:',
          checked:false,
          options:[
            {
              name:'1)防压疮翻身床垫',
              checked:false,
            },
            {
              name:'2)压疮辅料',
              checked:false,
            },
            {
              name:'3)请专家会诊',
              checked:false,
            },
            {
              name:'4)其他',
              value:'',
            },
          ]
        },
        {
          name:'4、保持皮肤清洁、干燥，及时处理患者排泄物。',
          checked:false,
        },
        {
          name:'5、即时更换床单，保持整洁、干燥。',
          checked:false,
        },
        {
          name:'6、指导及协助患者移位时，避免牵拉及摩擦皮肤',
          checked:false,
        },
        {
          name:'7、加强全身营养',
          checked:false,
        },
        {
          name:'8、严格执行交接班制度',
          checked:false,
        },
        {
          name:'9、根据压疮分期采取正确的压疮护理',
          checked:false,
        },
        {
          name:'10、动态评估与记录',
          checked:false,
        },
        {
          name:'11、其他',
          value:'',
        },
      ],
      conditions:{
        prerequisites:[
          {
            name:'1、意识障碍',
            checked:false,
          },
          {
            name:'2、循环衰竭',
            checked:false,
          },
          {
            name:'3、心里衰竭',
            checked:false,
          },
          {
            name:'4、呼吸衰竭',
            checked:false,
          },
          {
            name:'5、肝功能衰竭',
            checked:false,
          },
          {
            name:'6、肾功能衰竭',
            checked:false,
          },
          {
            name:'7、偏瘫/截肢/骨盆骨折/四肢麻痹',
            checked:false,
          },
          {
            name:'8、生命体征不稳定',
            checked:false,
          },
          {
            name:'9、疼痛',
            checked:false,
          },
          {
            name:'10、其他',
            checked:false,
          },
        ],
        alternative:[
          {
            name:'1、高龄≥70 岁',
            checked:false,
          },
          {
            name:'2、血清蛋白<30g/L',
            checked:false,
          },
          {
            name:'3、极度消瘦',
            checked:false,
          },
          {
            name:'4、高度水肿',
            checked:false,
          },
          {
            name:'5、大小便失禁',
            checked:false,
          },
          {
            name:'6、依从性差',
            checked:false,
          },
          {
            name:'7、其他',
            checked:false,
          },
        ],
      },
      isunavoidablepressureulcer:-1,//是否符合难免压疮申报条件
      instruction:'',//指导意见
      lapseto:{
        ispressuresores:-1,//是否发生压疮
        occuredpressuresorestime:'',//压疮发生时间
        lapsetooptions:{//患者去向
          'checkout_checked':false,//出院/转院
          'death_checked':false,//死亡
        }
      }
    };
    return v;
}


export const getpagelist = (currentpage,listall,perpage)=>{

    let istart = currentpage*perpage;
    if(istart + perpage >= listall.length){
      istart = listall.length - perpage;
      if(istart < 0){
        istart = 0;
      }
    }
    let iend = istart + perpage;
    if(iend > listall.length){
      iend = listall.length;
      if(iend < 0){
        iend =0;
      }
    }

    let retlist = [];
    for(let i = istart; i < iend ;i++){
      retlist.push(listall[i]);
    }

    const isfirst = istart === 0;
    const islast = iend + perpage >= listall.length;

    return {
      isfirst,
      islast,
      retlist
    }
}

export const gettablebradengroups = ()=>{
    const tablebradengroups = [
      {
        labeltitle:"感觉",
        labelvalue:'score_sensoryperception',
        labelsz:[{
          label:'完全限制',
          value:1
        },{
          label:'非常限制',
          value:2
        },{
          label:'轻度受限',
          value:3
        },{
          label:'未受伤害',
          value:4
        }]
      },
      {
        labeltitle:"潮湿",
        labelvalue:'score_moisture',
        labelsz:[{
          label:'持久潮湿',
          value:1
        },{
          label:'非常潮湿',
          value:2
        },{
          label:'偶尔潮湿',
          value:3
        },{
          label:'很少潮湿',
          value:4
        }]
      },
      {
        labeltitle:"活动力",
        labelvalue:'score_activity',
        labelsz:[{
          label:'卧床不起',
          value:1
        },{
          label:'局限于椅',
          value:2
        },{
          label:'偶尔步行',
          value:3
        },{
          label:'经常步行',
          value:4
        }]
      },
      {
        labeltitle:"移动力",
        labelvalue:'score_mobility',
        labelsz:[{
          label:'完全不能',
          value:1
        },{
          label:'严重受限',
          value:2
        },{
          label:'轻度受限',
          value:3
        },{
          label:'不受限',
          value:4
        }]
    },
    {
      labeltitle:"营养",
      labelvalue:'score_nutrition',
      labelsz:[{
        label:'非常差',
        value:1
      },{
        label:'可能不足',
        value:2
      },{
        label:'适当',
        value:3
      },{
        label:'良好',
        value:4
      }]
    },
    {
      labeltitle:"摩擦力和剪切力",
      labelvalue:'score_friction',
      labelsz:[{
        label:'有问题',
        value:1
      },{
        label:'有潜在问题',
        value:2
      },{
        label:'无明显问题',
        value:3,
      }]
    }
  ];
  return tablebradengroups;
}
