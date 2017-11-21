//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentIndex: 0,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 界面状态的改变 由数据决定 
    // 界面的状态 等于 数据的值
    // 这是MVVM 区分于DOM API 的本质
    // setTimeout(() => {
    //   this.setData({
    //     currentTab: 1
    //   });
    // }, 2000);

  },

  swiperTab: function(e) {
    e.detail.current
    this.setData({
      currentIndex: e.detail.current
    })
  },

  clicktap: function(e) {
    // 小程序中  界面要改变 就是状态改变 
    // 建立一个 值  data binding

    // 获得点击的标签(e.target)的数据传给 index
    var index = e.target.dataset.current;
    this.setData({
      currentIndex: index
    })

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
