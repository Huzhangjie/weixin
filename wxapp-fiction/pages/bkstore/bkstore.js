// pages/bkstore/bkstore.js
Page({

  data: {
    hdActiveIndex: 0,
    bdActiveIndex: 0,
    types :['本周强推','新书抢先'],
    books: [{}],
  },

  // 头部导航的点击变化
  hdchangeTab: function(e) {
    var index = e.target.dataset.index;
    this.setData({
      hdActiveIndex: index,
    })
  },

  // bd导航的点击变化
  bdchangeTab: function(e) {
    var index = e.target.dataset.index;
    this.setData({
      bdActiveIndex: index,
    })
  },

  // bd左右滑动对应Tab的改变
  bdSwiperTab: function(e) {
    var index = e.detail.current;
    this.setData({
      bdActiveIndex: index,
    })
  },

  onLoad: function (options) {
    this.setData({
      books: [{
        title: '武动乾坤',
        author: '土豆'
      },
      {
        title: '酒神',
        author: '三少'
      },{
        title: '斗破苍穹',
        author: '土豆'
      },{
        title: '大主宰',
        author: '土豆'
      },{
        title: '大主宰',
        author: '土豆'
      },{
        title: '大主宰',
        author: '土豆'
      }]
    })
    console.log(this.data.books)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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