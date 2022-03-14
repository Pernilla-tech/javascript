
const button = document.querySelector('.button')
button.addEventListener('click', loadRandomDrink)

async function loadRandomDrink() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const data = await response.json()
  const drink = data.drinks[0];

  document.querySelector('#img').innerHTML = `<img src="${drink.strDrinkThumb}">`
  document.querySelector('#name').innerHTML = `<p>Drinknamn: ${drink.strDrink}</p>`
  document.querySelector('#instructions').innerHTML = `<p>Instruktioner: ${drink.strInstructions}</p>`
  document.querySelector('#category').innerHTML = `<p>Drink-kategori: ${drink.strCategory}</p>`
}
loadRandomDrink() /*Funktion som slumpar fram drinkar.*/

const searchTerm = document.querySelector('#myInput');
const searchResult = document.querySelector('#search_result')

async function search_drink(evt) {
  evt.preventDefault() /*förhindrar formuläret att ladda om sidan.*/
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchTerm.value)
  const data = await response.json()
  searchResult.innerHTML = "";

  for (let drink of data.drinks) {
    searchResult.innerHTML +=
      `<div class="drink_row">
    <h1>${drink.strDrink}</h1>
    <img class="img_row" src="${drink.strDrinkThumb}">
    <p>${drink.strInstructions}</p>
    </div>`
  }
}

document.querySelector('#search_form').addEventListener('submit', search_drink) /*Funktion där man kan söka efter valfri drink.*/
