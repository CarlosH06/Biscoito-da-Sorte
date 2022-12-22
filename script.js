const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const sorte = document.querySelector('#sorte')

const image = document.querySelector('#image')

image.addEventListener('click',function(){
screen1.classList.toggle('hide')
screen2.classList.toggle('hide')
sorte.innerText = frases[Math.floor(Math.random() * frases.length)]
})


const frases  = [
  'A vida e uma caixa preta nunca saberemos o seu real significado',
   'não deveríamos temer a morte, mais sim a vida.',
    'Faça a pessoa que você gosta se sentir especial ao invés de só mais uma',
    'Teu abraço eras confortante'

]

const btn = document.querySelector("#btn")

btn.addEventListener("click",function (){
  screen2.classList.toggle('hide')
  screen1.classList.toggle('hide')
})




