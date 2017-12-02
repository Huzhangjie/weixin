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
      },]
    })
    console.log(this.data.books)
  }
})
