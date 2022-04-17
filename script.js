// let randomNumber = Math.floor(Math.random() * 100) + 1;

// const guesses = document.querySelector('.guesses');
// const lastResult = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');

// const guessSubmit = document.querySelector('.guessSubmit');
// const guessField = document.querySelector('.guessField');

// let guessCount = 1;
// let resetButton;

// function checkGuess() {
//     alert("Soy un marcador de posición") ;
//   }

//Scrip de las bolas

document.getElementById('ball').addEventListener('mouseover', moviBall);

function moviBall (){
  let randomTop = Math.floor(Math.random() * 800);
  let randomLetf = Math.floor(Math.random() * 800);

  document.getElementById('ball').style.top = randomTop +'px';
  document.getElementById('ball').style.left = randomLetf +'px';
}




/// Scrip del juego

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const main = document.querySelector('.container')

let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value); //se aseura que sea un valor numerico
  if (guessCount === 1) {
    guesses.textContent = 'Intentos anteriores: '; 
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = '¡Felicidades! ¡Lo adivinaste!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!Fin del juego!!!';
    setGameOver();
  } else {
    lastResult.textContent = '¡Incorrecto!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = '¡El número es muy bajo!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = '¡El número es muy grande!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button', main);
  resetButton.textContent = 'INICIAR NUEVO JUEGO';
  resetButton.style.cssText ='border-radius:25px; height:30px; padding: 0 3px; font-size:15px; font-wight:700';
  main.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}
function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton); //elimina el boton de reset 

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = '#2F3B38';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
