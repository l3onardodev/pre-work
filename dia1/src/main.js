import './style.css'

const buttonHideApp = document.querySelector('[data-js="hide-app-anchor"]');
const appContainer = document.querySelector('[data-js="app"]');

let buttonHideAppState = false;

setTimeout(() => {
  document.querySelector('body').classList.remove('preload');
}, 100)

appContainer.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

buttonHideApp.addEventListener('click', function(e) {
  e.preventDefault();

  if(buttonHideAppState) {
    buttonHideApp.textContent = 'Hide';
    appContainer.classList.remove('hidden');
    buttonHideAppState = !buttonHideAppState;
  } else {
    buttonHideApp.textContent = 'Show';
    appContainer.classList.add('hidden');
    buttonHideAppState = !buttonHideAppState;
  }
})
