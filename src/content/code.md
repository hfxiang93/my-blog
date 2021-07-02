---
templateKey: blog-post
id: code
title: 手撸代码
slug: /2021/07/01/code/
date: 2021-07-01T03:48:03.125Z
description: 手撸实现各种代码
headerImage: https://i.imgur.com/0zJeQoG.jpeg
tags:
  - coding
---
# 1.手撸Promise
```javascript

/**
 * 手写实现一个Promise
 *
 * @param {*} executor
 */
function Promise(executor){
    let self = this
    //因为value和reason值需要在Promise实例方法then中使用，所以把这两个值，赋给new出来的实例
    self.value = undefined
    self.reason = undefined
    //在内部维护一个status状态
    self.status = 'pending'
    //可能new Promise中会有异步的操作，此时我们把异步操作时，执行的then函数的成功回调，统一保存在该数组中
    self.onResolvedCallbacks = []
    self.onRejectedCallbacks = []
    //声明一个resolve函数
    function resolve(value){
        //此时新增一个状态判断，当状态为pending的时候才能执行
        if(self.status === 'pending'){
            self.value = value
            //当调用了resolve时，更改状态为resolved
            self.status = 'resolved'
            //当调用resolve时，把该数组中存放的成功回调都执行一遍，如果是异步，则会把成功的回调都存到该数组里了，如果是异步，则没存到
            self.onResolvedCallbacks.forEach(fn=>fn())
        }
    }
    //声明一个reject函数
    function reject(reason){
        //此时新增一个状态判断，当状态为pending的时候才能执行
        if(self.status === 'pending'){
            self.value = reason
            //当调用了reject时，更改状态为rejected
            self.status = 'rejected'
            //当调用reject时，把该数组中存放的失败回调都执行一遍，如果是异步，则会把成功的回调都存到该数组里了，如果是异步，则没存到
            self.onRejectedCallbacks.forEach(fn=>fn())
        }
    }
    //当我们在执行executor时，内部抛出错误的时候，可以利用try catch来处理这个问题
    try{
        //把resolve、reject函数传到executor
        executor(resolve,reject)
    }catch(error){
        reject(error)
    }
}
//对应上面成功的回调函数onFulfilled以及失败的回调函数onRejected
Promise.prototype.then = function(onFulfilled,onRejected){
    let self = this
    //当我们在then中，执行了成功或者失败的回调函数时，首先要判断目前处于什么状态
    if(self.status === 'resolved'){
        //当调用了resolve函数后，会执行成功的回调函数，并且把resolve中传递的值，传递给成功的回调函数
        onFulfilled(self.value)
    }
    if(self.status === 'rejected'){
        //当调用了reject函数后，会执行成功的回调函数，并且把reject中传递的值，传递给失败的回调函数
        onRejected(self.reason)
    }
    //当new Promise中有resolve、reject处于异步中，执行then的时候，状态为pending
    if(self.status === 'pending'){
        //把成功的回调函数，存到该数组中，这样写的好处，就是把参数传进去，不需要将来遍历onResolvedCallbacks时，再传参
        self.onResolvedCallbacks.push(()=>{
            onFulfilled(self.value)
        })
        //把失败的回调函数，存到该数组中，这样写的好处，就是把参数传进去，不需要将来遍历onRejectedCallbacks时，再传参
        self.onRejectedCallbacks.push(()=>{
            onRejected(self.reason)
        })
    }
}
// 把Promise暴露出去
module.exports = Promise

```
# 2.手撸es6发布订阅
```javascript
/**
 * es6手撸简易发布订阅
 * 思路：
 * 1.创建一个对象(缓存列表)
 * 2.on方法用来把回调函数fn加到缓存列表中（事件订阅）
 * 3.emit方法取到arguments里面的第一个参数作为key值，根据key值去执行对应的缓存列表中的函数
 * 4.remove方法可以根据key值取消订阅
 * @class EventBus
 * @function on 订阅事件
 * @function emit 发布事件
 */
class EventBus {
  constructor(){
    // 创建一个事件池缓存订阅事件
    this.pool = {}
  }
  on(key,fn){
    // 判断事件池中有没有对应的key
    // 如果没有，这个事件没有被订阅
    // 那就给key创建一个缓存列表

    if (!this.pool[key]) {
      this.pool[key] = []
    }
    // 把事件添加到对应的key的缓存列表里
    this.pool[key].push(fn)
  }
  emit(){
    // 取第一个参数为对应的key值
    let key = [].shift.call(arguments)
    let fns = this.pool[key]
    // 如果缓存列表里面没有函数事件就返回false
    if (!fns||fns.length===0) {
      return false
    }
    // 遍历缓存列表，执行列表里的事件函数
    fns.forEach(fn=>{
      fn.apply(this,arguments)
    })
  }
  remove(key,fn){
    let fns = this.pool[key]
    // 如果缓存列表中没有函数，返回false
    if (!fns) {
      return false
    }
    // 如果没有传对应函数的话
    // 就会将key值对应缓存列表中的函数都清空掉
    if (!fn) {
      fns&&(fns.length=0)
    } else {
      // 遍历缓存列表，看看传入的fn与哪个函数相同
      // 如果相同就直接从缓存列表中删掉
      fns.forEach((cb,i)=>{
        if (cb===fn) {
          fns.splice(i,1)
        }
      })
    }
  }
}
// 实例化一个EventBus对象
let eventBus = new EventBus()
// 订阅事件
eventBus.on('skill',(skill,hobby)=>{
  console.log(skill)
  console.log(hobby)
})
// 订阅事件
eventBus.on('salary',(position,salary)=>{
  console.log(position)
  console.log(salary)
})
// 发布事件
eventBus.emit('skill','code','妹子')
eventBus.emit('skill','game','lol')
eventBus.emit('salary','nanjing',10000)
eventBus.emit('salary','beijing',20000)
function cat () {
  console.log('miaomiaomiao')
}function dog () {
  console.log('wangwangwang')
}
eventBus.on('pet',data=>{
  console.log('接受数据')
  console.log(data)
})
eventBus.on('pet',cat)
eventBus.on('pet',dog)
eventBus.remove('pet',dog)
eventBus.emit('pet',['二哈','泰迪猫'])
```
# 3.手撸防抖节流
```javascript
/**
 * 什么是防抖？什么是节流？
 * 防抖就是触发高频率事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，那么就重新计算时间
 * 思路就是每次触发事件的时候都取消之前的延时调用方法
 * 节流就是高频率事件触发，但是在n秒内只会执行一次，所以节流会稀释函数的执行频率
 * 思路就是每次触发时间的时候都判断当前是否有等待执行的延时函数
 */

//防抖应用场景
// 每次 resize/scroll 触发统计事件
// 文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）
/**
 * debounce   防抖
 * @param func    防抖的高频事件
 * @param time    定义多久时间内高频函数只执行一次
 * @returns {Function}  返回防抖函数
 */
function debounce (func, time) {
  let timer = null // 声明一个timer 用来存放定时器的返回值
  return ()=>{
    clearTimeout(timer) //每次触发高频事件的时候都先清除timer，重新计时
    // 设定一个定时器去触发高频事件 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 func 函数
    timer = setTimeout(()=>{
      func.apply(this, arguments) //用apply绑定this，传递参数
    }, time)
  }
}

/**
 * throtte  节流
 * @param func    节流的高频事件
 * @param time    定义多久时间内高频函数只执行一次
 * @returns {Function}  返回节流函数
 */
// 节流的应用场景：
// DOM 元素的拖拽功能实现（mousemove）
// 射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）
// 计算鼠标移动的距离（mousemove）
// Canvas 模拟画板功能（mousemove）
// 搜索联想（keyup）
// 监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，
// 只有用户停止滚动后，才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次

function throtte (func, time) {
  let activeTime = 0 // 声明一个activeTime 用来存放标记
  return ()=>{
    const current = Date.now() // 获取当前时间
    if(current - activeTime > time){ //当前时间减去标记时间大于规定的time时，执行func，否则不执行
      func.apply(this, arguments)
      activeTime = Date.now() // 当func执行完之后重新设置一下activeTime的值，用于下一次判断
    }
  }
}
```
# 4.call，apply，bind实现
```javascript
/**
 * Created by xianghiafeng on 2019/12/17.
 * call apply bind的区别和内部实现
 * call和apply的功能相同，区别在于传参不同
 * fn.call(obj,arg1,arg2,.....)
 * fn.apply(obj,[argsArray])
 */

/**
 * call核心：
 * 将函数设为传入参数的属性
 * 指定this到函数并传入给定参数执行函数
 * 如果不传入参数或者参数为null，默认指向为 window / global
 * 删除参数上的函数
 */
Function.prototype.call = function (context) {
  /** 如果第一个参数传入的是 null 或者是 undefined, 那么指向this指向 window/global */
  /** 如果第一个参数传入的不是null或者是undefined, 那么必须是一个对象 */
  if (!context){
    context = typeof window === 'undefined' ? global : window
  }
  context.fn = this //this指向的是当前的函数(Function的实例)
  let rest = [...arguments].slice(1) //获取除了this指向对象以外的参数, 空数组slice后返回的仍然是空数组
  let result = context.fn(...rest) //隐式绑定,当前函数的this指向了context.
  delete context.fn
  return result
}


/**
 * apply实现和call差不多，只是第二个参数传的是数组或者类数组
 */
Function.prototype.apply = function (context,rest) {
  if (!context){
    context = typeof window === 'undefined' ? global : window
  }
  context.fn = this
  let result
  if (rest === undefined || rest === null){
    result = context.fn(rest)
  } else if (typeof rest === 'object'){
    result = context.fn(...rest)
  }
  delete context.fn
  return result
}
// 测试代码
const foo = {
  name: 'jack'
}
const name = 'lucy'
function bar (job,age) {
  console.log(this.name)
  console.log(job,age)
}
//测试call
bar.call(foo,'programmer',20) //jack programmer 20
bar.call(null,'programmer',20) // 浏览器环境: lucy programmer 20; node 环境: undefined programmer 20
//测试apply
bar.apply(foo,['teacher',20]) //jack programmer 20
bar.apply(null,['teacher',20]) // 浏览器环境: lucy programmer 20; node 环境: undefined programmer 20

/**
 * bind
 * bind和call/apply有一个很大区别，一个函数在被call/apply的时候是直接调用，而bind会创建一个新函数
 * 当新函数被调用的时候，bind()的第一个参数将作为它运行时的this，之后的一序列参数将会在传递的实参前传入作为它的参数
 */
Function.prototype.bind = function (context) {
  if (typeof this !== 'function'){
    throw new TypeError('not a function')
  }
  let self = this
  let args = [...arguments].slice(1)
  function Fn () {

  }
  Fn.prototype = this.prototype
  let bound = function () {
    let res = [...args,...arguments] //bind传递的参数和函数调用时传递的参数拼接
    context = this instanceof Fn ? this : context || this
    return self.apply(context,res)
  }
  //原型链
  bound.prototype = new Fn()
  return bound
}
function person (age,job,gender) {
  console.log(this.name,age,job,gender)
}
const vue ={
  name: 'vue'
}
let result = person.bind(vue,22,'coder')('female') // vue 22 'coder' 'female'
let result1 = person.bind(null,22,'coder')('female')// 浏览器环境: lucy 22 'coder' 'female'; node 环境: undefined 22 'coder' 'female'
console.log(result)
console.log(result1)


```
