var Typed = require('typed.js');

var messages = [
  'Здраствуйте! Меня зовут Динислам! Я изучаю язык JavaScript и учусь кодить на React! 💖',
  'Здесь вы можете посмотреть мои проекты! 🚀',
  'Мои увлечения и достижения! 😍',
  'А так же со мной легко связаться! 😉',
]

var typed = 999

let catalogLi = document.querySelectorAll('.nav__inner-back')
let catalogA = document.querySelectorAll('.nav__inner-reference')
let catalogRef = document.querySelectorAll('.nav__inner-ref')

for(let i = 0; i < catalogLi.length; i++){
  catalogLi[i].style.backgroundImage =  `url(./img/${i}.jpg)`
  catalogA[i].style.backgroundImage =   `linear-gradient(160deg, transparent, rgb(0, 0, 0)), url(./img/${i}.jpg)`
  catalogRef[i].onmouseenter = () => changeWidth(i)
  catalogRef[i].onmouseleave = () => onCommonWidth(i)
}

function changeWidth(i) {
  if (i == 0) {
    showHideText(1)
  }
  for(let x = 0; x < 4; x++){
    document.querySelectorAll('.nav__inner-back')[x].style.width = '100%'
  }
  document.querySelectorAll('.nav__inner-back')[i].style.width = '250%'
}

function onCommonWidth(i) {
  for(let x = 0; x < 4; x++){
    document.querySelectorAll('.nav__inner-back')[x].style.width = '100%'
  }
  if (i == 0) {
    showHideText(0)
  }
}

function showHideText (n) {
 if (n == 1)  {
      if (typed == 999){
        typed = new Typed('#info', {
          strings: messages,
          typeSpeed: 35, // Скорость печати
          backSpeed: 20, // Скорость удаления
          startDelay: 400, // Задержка перед стартом анимации
          backDelay: 3000, // Пауза перед удалением 
          loop: false, // Повтор (true или false)
          loopCount: 0, // Число повторов, false = бесконечно
          showCursor: true, // Отображение курсора
          attr: null,
          onStringTyped: (arrayPos, self) => {
            onlightShadow(arrayPos)
          },
        })
      } else {
        typed.start()
      }
  } else if (n == 0) {    
    typed.stop()
    offlightShadow()
  } 
}

function onlightShadow(arrayPos){
  offlightShadow()
  if (arrayPos != 0){
    document.querySelectorAll('.nav__inner-reference')[arrayPos].style.boxShadow = '0px 0px 100px 50px inset #546e8e'
  }
}

function offlightShadow(){
  for (let i = 0; i < 4; i++){
    document.querySelectorAll('.nav__inner-reference')[i].style.boxShadow = 'none'

  }
}

