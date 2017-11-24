
import testDrive from '../../modules/test-drive';
console.log(testDrive);

const app = getApp()

Page({
  data: {
    slides: null,
  },
  readMore: function(e) {
    let id = e.target.dataset.id;
    wx.navigateTo({
      // params queryString 查询字符串 ?id 根据id 传到目标页面
      url: `/pages/vehicles/show?id=${id}`,
      
    })
  },

  onLoad () {
    // 数据来源还可以全局数据  globalData
    // console.log(app.globalData.slides);
    this.setData({
      slides: app.globalData.slides,
    })
  },

  testDrive,

})
