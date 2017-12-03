//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    books: [{}],
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function () {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5a236136e27b936ea88bda94/wxapp-fiction/bookshelf',
      method: 'GET',
      success: (res) => {
        console.log(res);
        this.setData({
          books: res.data.data.books
        })
        console.log(this.data.books)
      }
    })
  }
})
