//节流函数

function throttle(method, delay, context) {
  let lastTime = 0
  return function() {
    let nowTime = new Date().getTime()
    if(nowTime - lastTime >= delay) {
      method.call(context)
      lastTime = nowTime
    }
  }
}


// demo
function a() {
  console.log('aaa')
}
window.onscroll = throttle(a, 1000, window)