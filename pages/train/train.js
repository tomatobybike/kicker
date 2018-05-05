const app = getApp()
var sliderWidth = 78; // 需要设置slider的宽度，用于计算中间位置
Page({
    data: {
      tabs: ["最新发布", "最近结束","历史训练"],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0
    },

    onLoad: function () {
      var that = this;
      wx.getSystemInfo({
        success: function (res) {
          that.setData({
            sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
            sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
          });
        }
      });
    },
    tabClick: function (e) {
      this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
      });
    },
    openAlert: function () {
      wx.showModal({
        content: '2018-04-05 服务器3:0胜测试组金靴：雷神', showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    },
    toTrainInput: function(){
      wx.navigateTo({
        url: '/pages/traininput/traininput'
      })
    }

})
