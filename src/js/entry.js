let entry = document.getElementsByClassName('entry')[0]
let entryBtn = document.getElementsByClassName('entry-btn')[0].firstElementChild
let xinke = document.getElementsByClassName('entry-xinke')[0]

function btnClick () {
  entryBtn.classList.add('entry-leave')
  entry.classList.add('absolute-center')
  
  setTimeout(function () {
    // 移除按钮，显示心萪
    entryBtn.parentNode.removeChild(entryBtn)
    xinke.style.height = '80%'
    
    // 设置心萪最小高度
    setTimeout(function () {
      xinke.style.minHeight = '20rem'
    }, 350)
    
    setTimeout(function () {
      // 心萪消失
      entry.style.height = '0'
      entry.style.width = '0'
      
      setTimeout(function () {
        // 启动页面移除
        entry.parentNode.removeChild(entry)
      }, 100)
    }, 2000)
  }, 250)
}
entryBtn.addEventListener('click', btnClick)