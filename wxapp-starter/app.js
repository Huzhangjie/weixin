App({
  onLaunch (options) {
    // 请示数据
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success: (res) => {
        console.log(res);
        Object.assign(this.globalData,res.data);
        console.log(this.globalData);
      }
    })
  },
  onShow (options) {
  },
  onHide () {
  },
  onError (error) {
  },
  globalData: {
   
  }
})
