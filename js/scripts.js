// insert search
const search = document.querySelector(".search-container");
const gallery = document.querySelector("#gallery");
let profiles = [];

/**
 * Fetch 12 random profiles and put relevant information into array of objects
 */
fetch("https://randomuser.me/api/?results=12")
  .then(response => response.json())
  .then(data => {
    data.results.forEach(profile => {
      profiles.push({
        image: profile.picture.thumbnail,
        name: `${profile.name.first} ${profile.name.last}`,
        email: profile.email,
        city: profile.location.city,
        phone: profile.phone,
        location: profile.location,
        birthday: profile.dob.date,
      });
    });
  })
  .catch(err => console.error(err));

/**
 * Create search input
 */
const formElement = document.createElement("form");
const inputSearchElement = document.createElement("input");
const inputSubmitElement = document.createElement("input");

inputSubmitElement.setAttribute("type", "submit");
inputSubmitElement.setAttribute("id", "search-submit");
inputSubmitElement.setAttribute("value", "🔍");
inputSubmitElement.classList.add("search-submit");

inputSearchElement.setAttribute("type", "search");
inputSearchElement.setAttribute("id", "search-input");
inputSearchElement.setAttribute("placeholder", "Search...");
inputSearchElement.classList.add("search-input");

formElement.appendChild(inputSearchElement);
formElement.appendChild(inputSubmitElement);
search.appendChild(formElement);
