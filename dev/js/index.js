//import { menuAnimation } from "./modules/example";

const d = document, c = console.log, w = window
import isMobile from 'ismobilejs'

export const menuOpen = () => {
  d.getElementById('main-nav').classList.add('show')

  var scroll = w.scrollY

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


class Machine {
  constructor(string, element, time) {
    this.string = string;
    this.element = element;
    this.time = time;
    this.print(string, element, time);
  }
  
  print(string, element, time) {
    let arrString = string.split('');
    let i = 0;
    let printString = setInterval(function() {
      element.textContent += arrString[i];
      i++;
      if(i === arrString.length) {
        clearInterval(printString);
      }
    }, time);
  } 
}

const text = 'Branding - Web App - Development';
let element = document.getElementById('str-machine');
let time = 80;
const machine = new Machine(text, element, time);


let i = 0;
let con = 40;
let show = setInterval(function() {
  i++;
  if(con === i) {
    clearInterval(show);
    let element = document.getElementById('main-banner__title').classList.toggle('show-title');
    let element2 = document.getElementById('main-banner__subtitle').classList.toggle('show-subtitle');
  }
}, 70);

export const animatedHeader = () => {
  let header = document.querySelector('.main-header'),
  top = window.pageYOffset
  top > header.offsetHeight ? header.classList.add('sticky') : header.classList.remove('sticky')
}

window.addEventListener('scroll', animatedHeader)





