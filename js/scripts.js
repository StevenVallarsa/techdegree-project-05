// insert search
const search = document.querySelector(".search-container");
const gallery = document.querySelector("#gallery");
const body = document.querySelector("body");

const profiles = [];

/**
 * Fetch 12 random profiles and put relevant information into array of objects
 */
fetch("https://randomuser.me/api/?results=12&nat=us")
  .then(response => response.json())
  .then(data => {
    let index = 0;
    data.results.forEach(profile => {
      profiles.push({
        id: index++,
        image: profile.picture.large,
        name: `${profile.name.first} ${profile.name.last}`,
        email: profile.email,
        phone: profile.cell,
        location: profile.location,
        birthday: profile.dob.date,
      });
    });
    createGallery(profiles);
    createModal();
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

/**
 * Create gallery
 */
const createGallery = profiles => {
  profiles.forEach(profile => {
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("card");

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("card-img-container");

    const img = document.createElement("img");
    img.setAttribute("src", profile.image);
    img.setAttribute("alt", `profile picture for ${profile.name}`);
    img.classList.add("card-img");
    imgDiv.appendChild(img);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("card-info-container");

    const h3 = document.createElement("h3");
    h3.setAttribute("id", "name");
    h3.classList.add("card-name", "cap");
    h3.innerText = profile.name;

    const p1 = document.createElement("p");
    p1.classList.add("card-text");
    p1.innerText = profile.email;

    const p2 = document.createElement("p");
    p2.classList.add("card-text", "cap");
    p2.innerText = `${profile.location.city}, ${profile.location.state}`;

    infoDiv.appendChild(h3);
    infoDiv.appendChild(p1);
    infoDiv.appendChild(p2);

    outerDiv.appendChild(imgDiv);
    outerDiv.appendChild(infoDiv);
    outerDiv.dataset.id = profile.id;
    outerDiv.addEventListener("click", e => addProfileToModal(e.currentTarget.dataset.id));
    gallery.appendChild(outerDiv);
  });
};

/**
 * Create modal
 */
const createModal = () => {
  const modal = `
  <div id="modal" class="modal-container" style="display: none">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img id="img" class="modal-img">
            <h3 id="profileName" class="modal-name cap"></h3>
            <p id="email"class="modal-text"></p>
            <p id="city" class="modal-text cap"></p>
            <hr>
            <p id="phone" class="modal-text">$</p>
            <p id="address"class="modal-text"></p>
            <p id="date"class="modal-text"></p>
        </div>
    </div>`;
  body.insertAdjacentHTML("beforeend", modal);
  document.querySelector("#modal-close-btn").addEventListener("click", () => {
    document.querySelector("#modal").style.display = "none";
  });
};

const addProfileToModal = profileId => {
  const profile = profiles.find(p => profileId == p.id);

  const img = document.querySelector("#img");
  const profileName = document.querySelector("#profileName");
  const email = document.querySelector("#email");
  const city = document.querySelector("#city");
  const phone = document.querySelector("#phone");
  const address = document.querySelector("#address");
  const date = document.querySelector("#date");

  const dateFormat = new Date(profile.birthday).toLocaleDateString();
  const phoneDigits = profile.phone.replace(/\D/g, "");
  const phoneNumber = `(${phoneDigits.substring(0, 3)}) ${phoneDigits.substring(3, 6)}-${phoneDigits.substring(6)}`;

  img.setAttribute("src", profile.image);
  img.setAttribute("alt", `Profile picture of ${profile.name}`);
  profileName.innerText = profile.name;
  email.innerText = profile.email;
  city.innerText = profile.location.city;
  phone.innerText = phoneNumber;
  address.innerText = `${profile.location.street.number} ${profile.location.street.name}, ${profile.location.city}, ${profile.location.state} ${profile.location.postcode}`;
  date.innerText = `Birthday: ${dateFormat}`;
  document.querySelector("#modal").style.display = "";
};
