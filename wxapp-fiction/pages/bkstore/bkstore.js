// pages/bkstore/bkstore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hdActiveIndex: 0,
    bdActiveIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */

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