import './form.js';
import './cars.js';

const inputName = document.querySelector("[data-js='nome-pessoa']");
const nameButton = document.querySelector("[data-js='button-name']");
const select = document.querySelector('[data-js="select-color"]');

let currentName;

inputName.addEventListener('input', function(event) {
  event.preventDefault();

  const name = event.target.value.split(' ');

  event.target.value = name.map((element) => {
    element = element.toLowerCase();

    if (element === 'da' || element === 'de' || element === 'do' || element === 'dos') {
      return element.toLowerCase();
    } else {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    }
  }).join(' ');

  currentName = event.target.value;
});

nameButton.addEventListener('click', function() {
  document.querySelector('.first-screen').classList.add('hidden');

  document.querySelector('.second-screen').classList.remove('hidden');
  document.querySelector('[data-js="label-s-s"]').textContent = `Olá, ${currentName}!`;

  setTimeout(function() {
    document.querySelector('.second-screen').classList.add('hidden'); document.querySelector('.third-screen').classList.remove('hidden');
    createElements();
  }, 2500)
})

select.addEventListener('change', function(event) {
  createColorBlock(([...event.target.options].map((element) => ({color: element.label, status: element.selected})).filter((element) => element.status === true)));
})

document.querySelector('[data-js="button-next"]').addEventListener('click', function (event){
  event.preventDefault();
  document.querySelector('.third-screen').classList.add('hidden');
  document.querySelector('.fourth-screen').classList.remove('hidden');
})

//criando elementos através do arquivo JS
function createElements() {
  select.insertAdjacentHTML('afterbegin', `
      <option value="azul">Azul</option>
      <option value="vermelho">Vermelho</option>
      <option value="rosa">Rosa</option>
      <option value="verde">Verde</option>
      <option value"amarelo">Amarelo</option>
      <option selected disabled hidden></option>
  `)
}

function createColorBlock(array) {
  document.querySelector('.colors-display-container').innerHTML = '';
  array.forEach((element) => {
    const {color} = element;

    document.querySelector('.colors-display-container').insertAdjacentHTML('afterbegin', `
      <div class="color-content ${color}">
        <h2>${color}</h2>
      </div>`
  )});
}
