let catalogLi = document.querySelectorAll('.nav__inner-back')
let catalogA = document.querySelectorAll('a')

for(let i = 0; i < catalogLi.length; i++){
  catalogLi[i].style.backgroundImage =  `url(./img/${i}.jpg)`
  catalogA[i].style.backgroundImage =   `linear-gradient(160deg, transparent, rgb(0, 0, 0)), url(./img/${i}.jpg)`
  catalogA[i].onmouseenter = () => changeWidth(i)
  catalogA[i].onmouseleave = onCommonWidth
}

function changeWidth(i) {
  for(let x = 0; x < 4; x++){
    document.querySelectorAll('.nav__inner-back')[x].style.width = '100%'
  }
  document.querySelectorAll('.nav__inner-back')[i].style.width = '250%'
}
function onCommonWidth() {
  for(let x = 0; x < 4; x++){
    document.querySelectorAll('.nav__inner-back')[x].style.width = '100%'
  }
}