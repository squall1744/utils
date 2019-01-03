// 函数防抖动 
function debounce(method, context) {
  clearTimeout(method.id)
  method.id = setTimeout(() => {
    method.call(context)
  }, 500)
}


// demo
function a() {
  console.log('1')
}

window.onscroll = function() {
  debounce(a, window)
}