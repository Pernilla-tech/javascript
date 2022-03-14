
async function start() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin')
  const data = await response.json()
  createDrinkList(data.drinks) /*kallar funktionen.*/
}
start()
/*funktion för att hämta data.*/

function createDrinkList(drinkList) {
  document.getElementById('drinklista').innerHTML = `
  <select onchange='loadDrink(this.value)'>
  <option>Välj en drink</option>
${drinkList.
      map(function (drink) {
        return `<option value="${drink.idDrink}">${drink.strDrink}</option>`
      }).join('')}
</select>`
  /*funktion för att skapa listan.*/
  /*hämtar data och skapar en drinklista.*/
  /*Map returnerar en array där varje item visas.*/
  /*Join konverterar arrayen till en sträng av text.*/
}

async function loadDrink(value) {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + value);
  const data = await response.json()
  const drink = data.drinks[0];
  document.querySelector('#drinkbild').innerHTML = `<img src="${drink.strDrinkThumb}">`
  document.querySelector('#instructions').innerHTML = `<h1>${drink.strDrink}</h1>`
  document.querySelector('#instructions').innerHTML += `<p>${drink.strInstructions}</p>`
}
loadDrink()
/*Funktion för att visa drink-bild och drink-instruktioner beroende på vilken drink man väljer i listan*/

const input = document.querySelector('#name');
const mail = document.querySelector('#mail');
const divError = document.querySelector('#error');
const checkbox = document.querySelector('#checkbox');
const nameError = document.querySelector('#name_error');
const mailError = document.querySelector('#mail_error');
const checkboxError = document.querySelector('#checkbox_error');
const submitBtn = document.querySelector('#submit_button');

function checkError() {
  divError.style.display = "none";
  nameError.style.display = 'none';
  checkboxError.style.display = 'none';
  mailError.style.display = 'none';
  submitBtn.disabled = false;

  const hasError = false;


  if (input.value === "") {
    nameError.style.display = 'block';
    divError.style.display = "block";

    hasError = true;
  }

  if (mail.value === "") {
    mailError.style.display = 'block';
    divError.style.display = "block";

    hasError = true;
  }

  if (checkbox.checked === false) {
    checkboxError.style.display = 'block';
    divError.style.display = "block";

    hasError = true;
  }
  return hasError;
}
/*Funktion för namn, mailadress och checkbox.*/

function newsletterSignUp(evt) {
  evt.preventDefault() /*förhindrar formuläret att ladda om sidan.*/
  const name = document.querySelector('#name').value
  const p = document.querySelector('#thank_you')

  if (checkError() == false) /*Om funktionen checkError returnerar false så visas detta meddelande.*/ {
    p.textContent = 'Tack' + ' ' + name + ' ' + 'för du valt att prenumerera på vårt nyhetsbrev' + '!'
  }
}

document.querySelector('#newsletter_form').addEventListener('submit', newsletterSignUp)

/*Funktion som körs om checkError är false, dvs om namn, mailadress och kryssrutan är ifyllt.*/

function clearCheckbox() {
  checkbox.checked = false;
}

input.addEventListener('input', clearCheckbox)
/*Funktion som gör att kryssrutan kryssas ur om användare ändrar namnet.*/
