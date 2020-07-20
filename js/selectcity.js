let citiesSelect = document.querySelector( '#cities-select');
let adressSelect = document.querySelector('#adress-select');

let data = {
Смоленск: ['Смоленск, Румянцева, 6'],
Москва: ['Москва, Веерная, 30'],
Воронеж: ['Воронеж, Торпедо, 44'],
}

let cities = Object.keys(data) ;
addOptions(citiesSelect, cities);

// var defaultCities = data[cities[0]];
// addOptions(adressSelect, defaultCities);

citiesSelect.addEventListener( 'change', function() {
let city = data[this.value];
adressSelect.length = 0;

addOptions(adressSelect, city);
});

function addOptions(select, arr) {

for (var i = 0; i < arr.length; i++) {
select.add(new Option(arr[i]));
}
}
