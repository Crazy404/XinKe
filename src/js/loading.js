let loading = document.getElementsByClassName('loading')[0]
let enterBtn = loading.getElementsByClassName('enter')[0]

/**
 * loading完成
 */
function enter() {
  let entry = document.getElementsByClassName('entry')[0]
  loading.parentNode.removeChild(loading)
  entry.style.width = '100%'
  entry.style.height = '100%'
  setTimeout(function () {
    entry.classList.remove('absolute-center')
    entry.style.position = 'relative'
  }, 300)
}

enterBtn.addEventListener('click', enter)

/**
 * 预加载图片
 */
let progress = loading.getElementsByClassName('loading-progress')[0]
let valuep = loading.getElementsByClassName('loading-value')[0]
let imgs = [
  'entry_btn',
  'xinke1',
  'hair', 'miao1'
]
let imgCount = 0
let loadingRate = 0

imgs.forEach(i => {
  let _img = new Image()
  _img.src = `img/${i}.png`
  _img.onload = function () {
    imgCount++
    if (imgCount === imgs.length) {
      enterBtn.style.display = 'block'
    }
    loadingRate = Math.floor(imgCount * 100 / imgs.length)
    valuep.innerText = loadingRate + '%'
    progress.style.width = loadingRate + '%'
  }
})