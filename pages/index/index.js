const app = getApp()
var sliderWidth = 70; // 需要设置slider的宽度，用于计算中间位置
Page({
    data: {
      notice: {
        title:'',
        text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。',
        scrollable: true,
        delay: 1000
      },
      latitude: 23.099994,
      longitude: 113.324520,
      markers: [{
        latitude: 23.099994,
        longitude: 113.324520,
        name: 'T.I.T 创意园'
      }],
      covers: [{
        latitude: 23.099994,
        longitude: 113.344520,
        iconPath: '/assets/image/location.png'
      }, {
        latitude: 23.099994,
        longitude: 113.304520,
        iconPath: '/assets/image/location.png'
      }],
      tab: {
        list: [{
          id: 1,
          title: '训练'
        }, {
          id: 2,
          title: '约战'
        }],
        selectedId: 1
      },
      tabs: ["训练", "约战"],
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
    }

})
