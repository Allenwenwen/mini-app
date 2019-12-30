// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title: String // 写法1
    title: { //  写法2
      type: String,
      value: '我是默认标题',
      observer: function(newVal, oldValue) { // 检车数据变化
        console.log('newVal', newVal, 'oldValue', oldValue)
      }
    }
  },
  externalClasses: ['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
