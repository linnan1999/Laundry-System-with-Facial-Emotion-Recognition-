// pages/index/index.js
const app = getApp()
const plugin = requirePlugin('WechatSI');
console.log(app.globalData)

Page({

  /*** 页面的初始数据*/
  data: {
    isLogin: false,
    userInfo: {},
    phoneNum: '',
    isStu: true,
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tempFilePaths: '' ,
    content:''
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        isLogin: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          isLogin: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            isLogin: true
          })
        }
      })
    }
  },
  getUserInfo: function() {
    const app = getApp()
    wx.getUserInfo({
      complete: (res) => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
           isLogin: true
        })
       
      },
    })
  },
  
  scan() {
    wx.scanCode({
      success: (res)=> {
       
      },
      fail: (rej)=> {
        
      }
    }) 
  },
  
  washClick: function () {
    if(this.data.isLogin) {
      //跳转我要洗衣
      wx.switchTab({
        url: '../wash/wash',
      })
    }
  },
  orderClick: function () {
    if(this.data.isLogin){
       //跳转我的订单
      wx.switchTab({
        url: '../order/order',
      })
    }
    
   
  },

  

  
   //退出按钮，进入登录页
   logoutClick:function(){
    const that = this;
    const app = getApp();
    this.setData({
        isLogin: false,
        userInfo:{},
      })
        
    // wx.redirectTo({
    //   url: '../index/index'
    // });
        
    },
    
  chooseimage: function () { 
    var that = this; 
    wx.chooseImage({  
      count: 1,  //最多可以选择的图片总数  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {  
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        var tempFilePaths = res.tempFilePaths;  
        var binary_img = wx.getFileSystemManager().readFileSync(res.tempFilePaths[0],"base64")
        // console.log(binary_img)
        //启动上传等待中...  
        wx.showToast({  
          title: '正在上传...',  
          icon: 'loading',  
          mask: true,  
          duration: 8000  
        })  
        wx.request({
          url: 'https://39.98.113.165/reco',
          method: 'POST',
          header: {
            'Content-Type': 'application/json'
           },
          data: binary_img,
          success: function(res){ 
            var data = res.data
            console.log(data)
            that.classfy(data)
            //do something 
          },
          fail: function (res) {  
            wx.hideToast();  
            wx.showModal({  
              title: '错误提示',  
              content: '上传图片失败',  
              showCancel: false,  
              success: function (res) { }  
            })  
          }
        })
      }
    })
  },


  classfy:function(data){
    var emo = data["emo"];
    var conf = data["con"];
    var that = this;
    console.log(emo)
    console.log(conf)
    if(conf >= 0.75){
      if(emo == "Angry"){
        that.content = "亲爱的朋友你怎么啦？看起来好像有点生气，我给你唱首歌吧！人生就象一场戏，今世有缘才相聚。相处一处不容易，人人应该去珍惜。世上万物般般有，哪能件件如我意。为了小事发脾气，回想起来又何必。他人气我我不气，气出病来无人替。"
      }
      else if(emo == "Disgust"){
        that.content = "偷偷告诉你哟，我们机器人的世界很无聊诶，你的每一次到来都令我很开心！我最最喜欢你啦!有这么可爱的机器人喜欢你，你不要再去想其他让你感到不舒服的事情啦~"
      }
      else if(emo == "Fear"){
         that.content = "有什么事情令你感到恐惧吗？别害怕，我会找警察叔叔保护你！"
      }
      else if(emo == "Happy"){
        that.content = "是有什么令人开心的事情吗？听说和别人分享开心之后，你的开心会变成两倍哦！"
      }
      else if(emo == "Sad"){
        that.content = "亲爱的朋友，你似乎有点不开心，我来给你讲个笑话吧！机器人会讲笑话是不是很好笑呢哈哈哈哈哈"
      }
      else if(emo == "Surprise"){
        console.log("suprise")
        that.content = "这个世界在充满惊吓的同时，也是充满惊喜哒！我可以分享一点点你的惊喜吗？"
        console.log("after")
        console.log(that.content)
      }
      else if(emo == "Neutral"){
        that.content = "悄悄告诉你一个我悟出来的哲理哦：人生大多时候虽然平静无波，但是我们也要学会让自己更加快乐！是不是很有道理呢？"
      }
    }
    else{
      var many = ["你的情绪好内敛，我解读不出来诶！那我就给你拜个早年吧哈哈哈哈","请大声告诉我你在想什么！","如果我说你是世界上最好看的人，你会对我笑吗","好啦好啦，我知道你是一个镇定自若内心成熟的大人，我都看不出你的情绪了","唉，从你的表情我读不出你的心情，我不是你的知心好朋友了，伤心","别对我这么冷漠嘛，笑一笑，或者我逗你笑？"]
      that.content = many[Math.round(Math.random()*6)]
    }
    that.wordyun()
  },


  onReady(e){
    this.innerAudioContext = wx.createInnerAudioContext();
    this.innerAudioContext.onError(function(res){
      console.log(res);
      wx.showToast({
        title: 'fail to board',
        icon:'none'
      })
    })
  },

  coninput: function(e){
    this.setData({
      content:e.detail.value,
    })
  },

  wordyun:function(e){
    var that=this;
    var content = this.content;
    console.log(content)
    plugin.textToSpeech({
      lang:"zh_CN",
      tts:true,
      content:content,
      success:function(res){
        console.log(res);
        console.log("succ tss",res.filename);
        that.setData({
          src:res.filename
        })
        that.yuyinplay();
      },
      fail:function(res){
        console.log("fail tts",res)
      }
    }
    )
  },

  yuyinplay:function(e){
    if (this.data.src ==''){
      console.log("no voice");
      return;
    }
    this.innerAudioContext.src = this.data.src;
    this.innerAudioContext.play();
  },

  end: function (e){
    this.innerAudioContext.pause();
  },

  
})