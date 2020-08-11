let Mobile = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i

if((navigator.userAgent.match(Mobile))) {
  document.body.innerHTML = '请使用PC端浏览器访问！'
}