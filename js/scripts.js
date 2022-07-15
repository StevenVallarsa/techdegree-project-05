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
        firstName: profile.name.first,
        lastName: profile.name.last,
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
const resetButtonElement = document.createElement("button");

inputSubmitElement.setAttribute("type", "submit");
inputSubmitElement.setAttribute("id", "search-submit");
inputSubmitElement.setAttribute("value", "🔍");
inputSubmitElement.classList.add("search-submit");

inputSearchElement.setAttribute("type", "search");
inputSearchElement.setAttribute("id", "search-input");
inputSearchElement.setAttribute("placeholder", "Search...");
inputSearchElement.classList.add("search-input");

resetButtonElement.setAttribute("button", "button");
resetButtonElement.setAttribute("id", "reset");
resetButtonElement.setAttribute("style", "padding: 5px; margin: 5px");
resetButtonElement.innerText = "Reset";

formElement.appendChild(inputSearchElement);
formElement.appendChild(inputSubmitElement);
formElement.appendChild(resetButtonElement);
search.appendChild(formElement);

search.addEventListener("click", e => {
  e.preventDefault();
  const searchInput = document.querySelector("#search-input").value.trim();
  if (searchInput) {
    const searchProfiles = profiles.filter(profile => {
      if (`${profile.firstName} ${profile.lastName}`.toLowerCase().includes(searchInput.toLowerCase())) {
        return profile;
      }
    });
    createGallery(searchProfiles); // create gallery view with only search result profiles
  } else {
    createGallery(profiles); // to refresh gallery view with all profiles
  }
});

const resetGallery = document.querySelector("#reset");
resetGallery.addEventListener("click", () => {
  document.querySelector("#search-input").value = "";
  createGallery(profiles);
});

/**
 * Create gallery
 */
const createGallery = profiles => {
  gallery.innerHTML = "";
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
    h3.innerHTML = `<span class="first-name">${profile.firstName}</span> ${profile.lastName}`;

    const p1 = document.createElement("p");
    p1.classList.add("card-text");
    p1.setAttribute("id", "galleryEmail");
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
    outerDiv.addEventListener("click", e => {
      const index = profiles.findIndex(profile => profile.id == e.currentTarget.dataset.id);
      addProfileToModal(index, profiles);
    });
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
            <span><button id="prev" type="button">&lt;</button> <button id="next" type="button">&gt;</button><span>
        </div>
    </div>`;
  body.insertAdjacentHTML("beforeend", modal);
  document.querySelector("#modal-close-btn").addEventListener("click", () => {
    document.querySelector("#modal").style.display = "none";
  });
};

const addProfileToModal = (index, profiles) => {
  const profile = profiles[index];

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
  profileName.innerText = `${profile.firstName} ${profile.lastName}`;
  email.innerText = profile.email;
  city.innerText = profile.location.city;
  phone.innerText = phoneNumber;
  address.innerText = `${profile.location.street.number} ${profile.location.street.name}, ${profile.location.city}, ${profile.location.state} ${profile.location.postcode}`;
  date.innerText = `Birthday: ${dateFormat}`;
  document.querySelector("#modal").style.display = "";
  document.querySelector("#prev").addEventListener("click", () => {
    prevProfile(index, profiles);
  });
  document.querySelector("#next").addEventListener("click", () => {
    nextProfile(index, profiles);
  });
};

const prevProfile = (index, profiles) => {
  if (index === 0) {
    addProfileToModal(profiles.length - 1, profiles);
  } else {
    addProfileToModal(--index, profiles);
  }
};
const nextProfile = (index, profiles) => {
  if (index === profiles.length - 1) {
    addProfileToModal(0, profiles);
  } else {
    addProfileToModal(++index, profiles);
  }
};
