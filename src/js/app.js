import '../css/main.css'
import '../css/about.css'
import { messages, photoArray, textArray } from './constants';
import Typed from 'typed.js';

let typed = 999

const catalogLi = document.querySelectorAll('.nav__inner-back')
const catalogA = document.querySelectorAll('.nav__inner-reference')
const catalogRef = document.querySelectorAll('.nav__inner-ref')
const buttonBack = document.querySelector('.about__inner-button-forv')
const buttonForv = document.querySelector('.about__inner-button-back')
const offsetWidth = document.body.offsetWidth

for(let i = 0; i < catalogLi.length; i++){
  catalogLi[i].style.backgroundImage =  `url(./img/${i}.jpg)`
  catalogA[i].style.backgroundImage =   `linear-gradient(160deg, transparent, rgb(0, 0, 0)), url(./img/${i}.jpg)`
  catalogRef[i].onmouseenter = () => (offsetWidth > 800) ? changeWidth(i) : changeHeight(i)
  catalogRef[i].onmouseleave = () => (offsetWidth > 800) ? onCommonWidth(i) : onCommonHeight(i)
  buttonForv.addEventListener('click', photoAdd)
  buttonBack.addEventListener('click', photoSub)
}
/**
 * Для экранов больше 800px
 */
function changeWidth(i) {
  if (i === 0) {
    showHideText(1)
  }
  for(let x = 0; x < 4; x++){
    document.querySelectorAll('.nav__inner-back')[x].style.width = '100%'
  }
  document.querySelectorAll('.nav__inner-back')[i].style.width = '275%'
  if (i === 2){
    aboutFrame.style.height = `80%`
    aboutFrame.style.top = `18%`
    onGallery()
  }
}

function onCommonWidth(i) {
  for(let x = 0; x < 4; x++){
    document.querySelectorAll('.nav__inner-back')[x].style.width = '100%'
  }
  if (i === 0) {
    showHideText(0)
  }
  if (i === 2){
    onGalleryLaunch = false
    buttonForv.style.display = 'none';
    buttonBack.style.display = 'none';
  }
}
/**
 * Для экранов меньше 800px
 */
function changeHeight(i) {
  if (i === 0) {
    showHideText(1)
  }
  for(let x = 0; x < 4; x++){
    document.querySelectorAll('.nav__inner-back')[x].style.height = '9%'
  }
  document.querySelectorAll('.nav__inner-back')[i].style.height = '73%'
  if (i === 2){
    aboutFrame.style.height = `80%`
    aboutFrame.style.top = `18%`
    onGallery()
  }
}

function onCommonHeight(i) {
  for(let x = 0; x < 4; x++){
    document.querySelectorAll('.nav__inner-back')[x].style.height = '25%'
  }
  if (i === 0) {
    showHideText(0)
  }
  if (i === 2){
    onGalleryLaunch = false
    buttonForv.style.display = 'none';
    buttonBack.style.display = 'none';
  }
}


/**
 * Автопечать текста
 */

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


/**
 * Highlighting
 */

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


/**
 * Анимация сектора About
 */
const aboutFrame = document.querySelectorAll('.nav__inner-descr')[2]
const photo = document.querySelector('.about__inner-photo')
const text = document.querySelector('.about__inner-desc')
let onGalleryLaunch = false;
let photoNum = 0

function onGallery(){

  onGalleryLaunch = true
  buttonForv.style.backgroundImage = `url(./img/right.png)`;
  buttonBack.style.backgroundImage = `url(./img/left.png)`;
  buttonForv.style.display = 'block';
  buttonBack.style.display = 'block';
  if (photoNum === 4){
    photoNum = 0
  }
  if (photoNum === -1){
    photoNum = 3
  }

  photo.src = `./img/${photoArray[photoNum]}`
  text.innerHTML = `${textArray[photoNum]}`
  if (offsetWidth > 800) {
    if (photoNum === 3) {
      photo.style.width = '80%'
      text.style.width = '90%'
    } else if(photoNum === 2) {
      text.style.width = '85%'
      photo.style.width = '65%'
    } else if(photoNum === 1) {
      text.style.width = '90%'
      photo.style.width = '62%'
    } else if(photoNum === 0) {
      text.style.width = '86%'
      photo.style.width = '65%'
    }
  } else if (offsetWidth > 450 && offsetWidth < 800)  {
    if (photoNum === 3) {
      photo.style.width = '72%'
      text.style.width = '95%'
    } else if(photoNum === 2) {
      text.style.width = '95%'
      photo.style.width = '60%'
    } else if(photoNum === 1) {
      text.style.width = '75%'
      photo.style.width = '60%'
    } else if(photoNum === 0) {
      text.style.width = '60%'
      photo.style.width = '56%'
    }
  }
}

function photoAdd(){
  photoNum += 1
  onGallery()
}

function photoSub(){
  photoNum -= 1
  onGallery()
}