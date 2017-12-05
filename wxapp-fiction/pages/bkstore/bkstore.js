// pages/bkstore/bkstore.js
Page({

  data: {
    hdActiveIndex: 0,
    bdActiveIndex: 0,
    allBooks: [],
    recommend_types :[{
      books: [],
      recommend: "",
    }],
  },

  // 头部导航的点击变化
  // type 为男生 女生 出版 这三种书籍的分类 对应下标
  hdchangeTab: function(e) {
    var type = e.target.dataset.index;
    this.setData({
      hdActiveIndex: type,
    })
    this.get_books_list(type);
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

  // 获取对应type的所有书籍
  get_books_list: function(type) {
    let recommend_types = [{
        books: [],
        recommend: "",
      }]
    let books = [];
    wx.request({
      url: "https://www.easy-mock.com/mock/5a236136e27b936ea88bda94/wxapp-fiction/bkstore",
      method: 'GET',
      data:{
        type: type
      },
      success: (res) => {
        // console.log(res.data.data.books);
        books = res.data.data.books;
        recommend_types = this.setRecommendTypes(books);

        console.log(recommend_types);
        if(type==0){
          this.setData({
            recommend_types: recommend_types,
            allBooks: books
          })
        }
      }
    })
  },

  // 获取数据后处理
  setRecommendTypes: function(books) {
    let recommend_types = [];
    let types = [];
    // 将获得 的书籍的 "本周推荐  新书抢鲜放进types"
    for(let i=0, len=books.length; i<len; i++){
      types.push(books[i].recommend_type)
    }
    // types 去重 
    types = [...new Set(types)];
    // 循环types 将对应的books 放进对应的对方 最后push进 recommend_types
    for(let i=0, len=types.length; i<len; i++){
      let newArr = books.filter(item => item.recommend_type == types[i]).slice(0,6);
      let obj = {books: newArr,recommen: types[i]}
      recommend_types.push(obj);
    }
    return recommend_types;
  },

  // 
  changeBooks: function(e) {
    console.log(e);
    const index = e.currentTarget.dataset.type;
    const type = this.data.recommend_types[index].recommend;
    console.log(type)
  },

  onLoad: function (options) {
    this.get_books_list('0');
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