const formImage = document.querySelector('[data-js="image-url"]');
const formModelo = document.querySelector('[data-js="marca-modelo"]');
const formAno= document.querySelector('[data-js="ano"]');
const formPlaca= document.querySelector('[data-js="placa"]');
const formColor= document.querySelector('[data-js="car-color"]');

const tableCars = document.querySelector('[data-js="cars-table-tbody"]');

const buttonSubmit = document.querySelector('[data-js="car-form-submit"]');

const car = [];

buttonSubmit.addEventListener('click', function(event) {
  event.preventDefault();

  if ((formImage.value !== '' && formModelo.value !== '' && formAno.value  !== 0 && formPlaca.value !== 0)) {
    //todos os campos preenchidos
    createItemTable(inputData());
    clearAllInputs();

    formImage.focus();
  } else {
    //algum campo incompleto.
    console.log('algo errado');
  }
})

function inputData() {
  car.push({
    image: formImage.value,
    modelo: formModelo.value,
    ano: formAno.value,
    placa: formPlaca.value,
    color: formColor.value,
  })
  return car;
}

function createItemTable(carArray) {
  tableCars.innerHTML = '';

  carArray.map((element) => {
    tableCars.insertAdjacentHTML('afterbegin', `
    <tr class="car-item-row">
      <td>
        <img src='${element.image}'>
      </td>
      <td>
        <label>${element.modelo}</label>
      </td>
      <td>
        <label>${element.ano}</label>
      </td>
      <td>
        <label>${element.placa}</label>
      </td>
      <td style="background-color: ${element.color}">
        <label style="color:white;">${element.color}</label>
      </td>
    </tr>
    `)
  })
}

function clearAllInputs() {
  formImage.value = '';
  formAno.value = '';
  formModelo.value = '';
  formPlaca.value = '';
  formColor.value = '#00000';
}
