// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrList: [
    //  '列表1',
    // '列表2',
    // '列表3',
    // '列表4',
    // '列表5',
    // '列表6',
    // '列表7',
    // '列表8',
    // '列表9',
    // '列表10',
    // '列表11'
  ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('列表展示');
    // 箭头函数
    // this指向 和父级一样
    setTimeout(() => {
      this.setData({
        arrList:[
        '列表1',
        '列表2',
        '列表3',
        '列表4',
        '列表5',
        '列表6',
        '列表7',
        '列表8',
        '列表9',
        '列表10',
        '列表11'
        ]
      });
    },1500)

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
  createData() {
    // 最多30 条数据
    // 函数返回值
    let length= this.data.arrList.length;
    console.log( length)
    if(length >= 30) {
      return [];
    }else {
      return ['项目1','项目2','项目3'];}
    
  },
   onReachBottom: function () {
    let arr = this.data.arrList;
    arr.push(...this.createData());
    console.log(this.createData());
    console.log(arr);
    this.setData({
      arrList:arr
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})