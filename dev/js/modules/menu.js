const d = document, c = console.log, w = window
import isMobile from 'ismobilejs'

export const menuOpen = () => {
  d.getElementById('main-nav').classList.add('show')

  var scroll = w.scrollY
  c(scroll)

  d.body.style.top = `-${scroll}px`

  d.body.classList.add('menu-active')

  /*if(isMobile.apple.phone) {
    c('Im an iphone')
    let scroll = scrollY
    d.body.style.top = `-${scroll}px`
    d.body.classList.toggle('menu-active-iphone')
  
    d.body.classList.contains('menu-active-iphone') ?  false : window.scrollTo(0, scroll)
  }*/
}

export const menuClose = () => {
  d.getElementById('main-nav').classList.remove('show')
  d.body.classList.remove('menu-active')

  let top = d.body.style.top

  let topNumber = top.replace('px', '')

  Number(topNumber)

  w.scrollTo(0, topNumber * -1)
}

d.getElementById('main-header__icon').addEventListener('click', menuOpen)
d.getElementById('main-nav__icon').addEventListener('click', menuClose)




