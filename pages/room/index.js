//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    admin:{}
  },
  onLoad: function () {
    this.printInfo()
  },

  printInfo: function (){
    var that = this;
    let data = app.globalData.userInfo
    wx.request({
      url: 'https://wx.mqapi.com/api/admin',
      data: {
        data: data
      },
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) { 
        // console.log(res.data.data)
        that.setData({
          admin: res.data.data
        })
      }
    })
  },
  //获取房间成员
  getStaffs:function(){
    wx.request({
      url: 'https://wx.mqapi.com/api/staffs', 
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})
