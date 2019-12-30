// pages/home/home.js
Page({
  data: {
    counter: 0
  },
  handleIncrement (event) {
    // console.log('------', event.detail) // {name: "why", age: 18}
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabClick(event) {
    console.log('event', event)
  },
  hanldeIncrementCpn () {
    // 1.获取组件对象
    const my_sel = this.selectComponent('#sel-class')
    console.log(my_sel)
    // 2.通过setData修改组件中的数据 （这种方法虽然可实现，但是不符合开发规范）
    // my_sel.setData({
    //   counter: my_sel.data.counter + 20
    // })
    // 3.通过方法对数据进行修改
    my_sel.incrementCounter (10)
  }
})