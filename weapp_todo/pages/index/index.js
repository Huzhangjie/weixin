//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current: null,
    todos: []
  },
  //事件处理函数
  deleteItem: function(e) {
    var key = e.target.dataset.key;
    this.ref.child(key).remove();
  },
  bindKeyInput: function(e) {
    console.log(e.detail.value)
    this.data.current = e.detail.value;
  },
  addItem: function() {
    if(this.data.current != null) {
      // 将所有的后台业务交给app.js
      app.addItem(this.data.current)
    }

  },
  onLoad: function () {
    this.ref = app.getTodoRef();
    this.ref.on('child_added', function(snapshot, preKey) {
      var key = snapshot.key()
      var text = snapshot.val();
      // JSON 结构
      var newItem = {key:key, text:text}
      this.data.todos.push(newItem)
      this.setData({
        todos: this.data.todos
      })
    },this)
    this.ref.on('child_removed', function(snapshot){
      var key = snapshot.key();
      var index = this.data.todos.findIndex(
          (item,index) => {
            if(item.key == key) {
              return true;
            }
            return false;
        });
      if (index >= 0) {
        this.data.todos.splice(index,1);
        this.setData({
          todos: this.data.todos
        })
      }
    },this)
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
