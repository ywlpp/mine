//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bannerimg: [
"http://m.haomaimen.com/statics/images/hm/home-banner-2019-1.jpg", "http://m.haomaimen.com/statics/images/hm/home-banner-1.jpg","http://m.haomaimen.com/statics/images/hm/home-banner-2019.jpg" ,"http://m.haomaimen.com/statics/images/hm/home-banner-2.jpg"
    ],
    menlistdata:[
  {
url:"http://m.haomaimen.com/statics/images/hm/home-s3-3.jpg",
    msg:'复合烤漆系列'
},
 {
url:"http://m.haomaimen.com/statics/images/hm/home-s3-4.jpg",
   msg: '复合实木系列'
},
  { url:"http://m.haomaimen.com/statics/images/hm/home-s3-1.jpg",
    msg: '全木门系列'
  },
  { url:"http://m.haomaimen.com/statics/images/hm/home-s3-2.jpg",
    msg: '整木定制'  
  }
    ]
  },
  btn(){
    wx.makePhoneCall({
      phoneNumber: '豪迈全国热线:400 6070 399' //仅为示例，并非真实的电话号码
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
