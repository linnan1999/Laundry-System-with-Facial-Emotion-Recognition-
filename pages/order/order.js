// pages/order/order.js
var app = getApp();
var orders = app.globalData.orders;
var util = require('../../utils/util');

Page({
 
  /**
  * 页面的初始数据
  */
  data: {
  currtab: 0,
  swipertab: [{ name: '进行中', index: 0 }, { name: '已完成', index: 1 }],
  alreadyOrder: [{ name: "洗衣机-B-1114", orderTime: "2020-05-10 15:28:10", endTime: "2020-05-10 16:08:10", money: "4" }, { name: "烘干机-A-0011", orderTime: "2020-05-07 20:34:03", endTime: "2020-05-07 21:24:03",money: "5" }, { name: "洗衣机-A-0013", orderTime: "2020-05-04 19:28:15", endTime: "2020-05-04 20:08:15", money: "4" }],
  waitPayOrder: []
  },
   
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    var time = util.formatTime(new Date()).toString();
    for (var i=0; i < orders.length; i++){
      if (util.compareTime(orders[i].endTime, time)){
        this.data.alreadyOrder.push(orders[i]);
        this.setData(
          {alreadyOrder: this.data.alreadyOrder}
        );
      } else {
        this.data.waitPayOrder.push(orders[i]);
        this.setData(
          {waitPayOrder: this.data.waitPayOrder}
        );
      }
    }
  },
  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
  // 页面渲染完成
  this.getDeviceInfo()
  console.log(this.data.waitPayOrder)
  this.orderShow()
  },
   
  getDeviceInfo: function () {
  let that = this
  wx.getSystemInfo({
  success: function (res) {
  that.setData({
  deviceW: res.windowWidth,
  deviceH: res.windowHeight
  })
  }
  })
  },
   
  /**
  * @Explain：选项卡点击切换
  */
  tabSwitch: function (e) {
  var that = this
  if (this.data.currtab === e.target.dataset.current) {
  return false
  } else {
  that.setData({
  currtab: e.target.dataset.current
  })
  }
  },
   
  tabChange: function (e) {
  this.setData({ currtab: e.detail.current })
  this.orderShow()
  },
   
  orderShow: function () {
  let that = this
  switch (this.data.currtab) {
  case 0:
  that.waitPayShow()
  break
  case 1:
  that.alreadyShow()
  break
  }
  },
  alreadyShow: function(time){
  },
   
  waitPayShow:function(time){
  },

  
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
   
  },
   
  /**
  * 生命周期函数--监听页面隐藏
  */
  onHide: function () {
   
  },
   
  /**
  * 生命周期函数--监听页面卸载
  */
  onUnload: function () {
   
  },
   
  /**
  * 页面相关事件处理函数--监听用户下拉动作
  */
  onPullDownRefresh: function () {
   
  },
   
  /**
  * 页面上拉触底事件的处理函数
  */
  onReachBottom: function () {
   
  },
   
  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {
   
  }
  })