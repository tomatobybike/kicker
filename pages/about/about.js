
Page({
  data: {
    list: [
      {
        id: 'form',
        name: '表单',
        open: false,
        pages:[
          { name: '功能介绍', url:'/pages/intro/intro'},
          { name: '开发团队', url: '/pages/team/team'}
        ]
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})
