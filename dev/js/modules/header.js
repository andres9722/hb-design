export const animatedHeader = () => {
  let header = document.querySelector('.main-header'),
  top = window.pageYOffset
  top > header.offsetHeight ? header.classList.add('sticky') : header.classList.remove('sticky')
}

window.addEventListener('scroll', animatedHeader)
