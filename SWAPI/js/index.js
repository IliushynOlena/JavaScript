let people = document.querySelector(".People");
let planets = document.querySelector(".Planets");
let starships = document.querySelector(".Starships");
let films = document.querySelector(".Films");
let vehicles = document.querySelector(".Vehicles");
let species = document.querySelector(".Species");

function Init() {
    const URL_people = `https://swapi.co/api/people/?page=1`;
   // people.addEventListener("click", GetPeople)
    Request(URL_people);
    // const URL_planets = `https://swapi.co/api/planets/?page=1`;
    // Request(URL_planets);
    // const URL_starships = `https://swapi.co/api/starships/?page=1`;
    // Request(URL_starships);
    // const URL_films = `https://swapi.co/api/films/?page=1`;
    // Request(URL_films);
    // const URL_vehicles = `https://swapi.co/api/vehicles/?page=1`;
    // Request(URL_vehicles);
    // const URL_species = `https://swapi.co/api/species/?page=1`;
    // Request(URL_species);
  
  }
  Init();

  function GetPeople(data) {
    for (let i = 0; i < 10; i++) {
        // const img = document.querySelector(`.img${[i]}`);
        // img.innerHTML = `<img src=\'https://starwars-visualguide.com/assets/img/characters/${[i + 1]}.jpg\' width=\'150px\' height=\'200px\'>`;
         //const name = people.name;
        // name.innerHTML = data.results[i].name;
        // console.log(name);
        // const height = document.querySelector(`.height${[i]}`);
        // height.innerHTML = "Висота: " + data.results[i].height + " sm";
        // console.log(height);
        // const mass = document.querySelector(`.mass${[i]}`);
        // mass.innerHTML = "Вага: " + data.results[i].mass + "kg";
        // const hair_color = document.querySelector(`.hair_color${[i]}`);
        // hair_color.innerHTML = "Колір волосся: " + data.results[i].hair_color;
        // const eye_color = document.querySelector(`.eye_color${[i]}`);
        // eye_color.innerHTML = "Колір очей: " + data.results[i].eye_color;
        // const birth_year = document.querySelector(`.birth_year${[i]}`);
        // birth_year.innerHTML = "Дата народження: " + data.results[i].birth_year;
      }
  }
  
  function Request(URL) {

    let xhr = new XMLHttpRequest();
    xhr.open("GET", URL, true);
    //console.log(xhr);
    //xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          const data = JSON.parse(xhr.responseText);
         
          GetPeople(data);
          console.log(data);
        } else {
          console.log("Error loading page\n");
        }
      }
    };
    xhr.send();
  }


