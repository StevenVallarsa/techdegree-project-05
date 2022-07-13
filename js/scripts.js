// insert search
const search = document.querySelector(".search-container");
const gallery = document.querySelector("#gallery");
let profiles2 = [
  {
    id: 0,
    image: "https://randomuser.me/api/portraits/men/93.jpg",
    name: "Léandre Muller",
    email: "leandre.muller@example.com",
    city: "Pau",
    phone: "01-07-70-71-40",
    location: {
      street: {
        number: 1559,
        name: "Grande Rue",
      },
      city: "Pau",
      state: "Oise",
      country: "France",
      postcode: 28683,
      coordinates: {
        latitude: "-14.7460",
        longitude: "-56.5744",
      },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
      },
    },
    birthday: "1971-07-30T20:25:28.315Z",
  },
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Dragojlo Rodić",
    email: "dragojlo.rodic@example.com",
    city: "Veliko Gradište",
    phone: "026-1300-955",
    location: {
      street: {
        number: 9125,
        name: "Dušana Mihailovića",
      },
      city: "Veliko Gradište",
      state: "South Banat",
      country: "Serbia",
      postcode: 76062,
      coordinates: {
        latitude: "-86.0472",
        longitude: "177.5028",
      },
      timezone: {
        offset: "+5:30",
        description: "Bombay, Calcutta, Madras, New Delhi",
      },
    },
    birthday: "1985-11-18T01:42:08.526Z",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    name: "Charles Knight",
    email: "charles.knight@example.com",
    city: "Belmont",
    phone: "Y12 R54-7009",
    location: {
      street: {
        number: 2155,
        name: "Main St",
      },
      city: "Belmont",
      state: "Prince Edward Island",
      country: "Canada",
      postcode: "T3K 1Y1",
      coordinates: {
        latitude: "67.3615",
        longitude: "5.9637",
      },
      timezone: {
        offset: "-4:00",
        description: "Atlantic Time (Canada), Caracas, La Paz",
      },
    },
    birthday: "1951-10-10T18:08:34.626Z",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    name: "Russell Foster",
    email: "russell.foster@example.com",
    city: "St Davids",
    phone: "015396 68950",
    location: {
      street: {
        number: 54,
        name: "Mill Lane",
      },
      city: "St Davids",
      state: "West Glamorgan",
      country: "United Kingdom",
      postcode: "R1E 5YP",
      coordinates: {
        latitude: "-78.6336",
        longitude: "-108.8451",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    birthday: "1956-05-16T04:38:43.115Z",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Inga Yarockiy",
    email: "inga.yarockiy@example.com",
    city: "Borislav",
    phone: "(098) A76-4913",
    location: {
      street: {
        number: 7290,
        name: "Mehanichniy provulok",
      },
      city: "Borislav",
      state: "Kiyivska",
      country: "Ukraine",
      postcode: 86117,
      coordinates: {
        latitude: "36.6384",
        longitude: "-159.4075",
      },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    birthday: "1968-01-28T02:04:37.891Z",
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/women/83.jpg",
    name: "Isabella Petersen",
    email: "isabella.petersen@example.com",
    city: "København V",
    phone: "78963804",
    location: {
      street: {
        number: 539,
        name: "Toften",
      },
      city: "København V",
      state: "Nordjylland",
      country: "Denmark",
      postcode: 32967,
      coordinates: {
        latitude: "-76.1762",
        longitude: "-178.0809",
      },
      timezone: {
        offset: "-11:00",
        description: "Midway Island, Samoa",
      },
    },
    birthday: "1947-05-03T00:10:28.506Z",
  },
  {
    id: 6,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Julie Meunier",
    email: "julie.meunier@example.com",
    city: "Étoy",
    phone: "079 587 50 47",
    location: {
      street: {
        number: 109,
        name: "Rue des Écoles",
      },
      city: "Étoy",
      state: "Nidwalden",
      country: "Switzerland",
      postcode: 1599,
      coordinates: {
        latitude: "24.7074",
        longitude: "-166.5468",
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    birthday: "1999-02-26T03:29:03.221Z",
  },
  {
    id: 7,
    image: "https://randomuser.me/api/portraits/men/59.jpg",
    name: "Jackson Li",
    email: "jackson.li@example.com",
    city: "Hastings",
    phone: "(222)-754-5107",
    location: {
      street: {
        number: 1708,
        name: "Green Lane West",
      },
      city: "Hastings",
      state: "Nelson",
      country: "New Zealand",
      postcode: 44073,
      coordinates: {
        latitude: "-56.6740",
        longitude: "-128.5202",
      },
      timezone: {
        offset: "+11:00",
        description: "Magadan, Solomon Islands, New Caledonia",
      },
    },
    birthday: "1959-05-02T20:49:10.110Z",
  },
  {
    id: 8,
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    name: "Iiris Wirtanen",
    email: "iiris.wirtanen@example.com",
    city: "Saltvik",
    phone: "08-848-125",
    location: {
      street: {
        number: 6758,
        name: "Verkatehtaankatu",
      },
      city: "Saltvik",
      state: "Southern Savonia",
      country: "Finland",
      postcode: 75444,
      coordinates: {
        latitude: "38.0660",
        longitude: "-56.1324",
      },
      timezone: {
        offset: "-12:00",
        description: "Eniwetok, Kwajalein",
      },
    },
    birthday: "1953-02-09T19:12:01.261Z",
  },
  {
    id: 9,
    image: "https://randomuser.me/api/portraits/thumb/women/20.jpg",
    name: "Angela Thomas",
    email: "angela.thomas@example.com",
    city: "Trim",
    phone: "061-394-0502",
    location: {
      street: {
        number: 6699,
        name: "West Street",
      },
      city: "Trim",
      state: "Kildare",
      country: "Ireland",
      postcode: 35086,
      coordinates: {
        latitude: "-24.8337",
        longitude: "-82.6369",
      },
      timezone: {
        offset: "-2:00",
        description: "Mid-Atlantic",
      },
    },
    birthday: "1957-12-09T17:25:16.417Z",
  },
  {
    id: 10,
    image: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
    name: "Verdi da Paz",
    email: "verdi.dapaz@example.com",
    city: "Porto Alegre",
    phone: "(38) 7186-7341",
    location: {
      street: {
        number: 3988,
        name: "Rua Mato Grosso ",
      },
      city: "Porto Alegre",
      state: "Ceará",
      country: "Brazil",
      postcode: 49919,
      coordinates: {
        latitude: "-0.5235",
        longitude: "-83.0431",
      },
      timezone: {
        offset: "+10:00",
        description: "Eastern Australia, Guam, Vladivostok",
      },
    },
    birthday: "2000-03-25T13:31:55.231Z",
  },
  {
    id: 11,
    image: "https://randomuser.me/api/portraits/med/women/45.jpg",
    name: "Nadège Lem",
    email: "nadege.lem@example.com",
    city: "Drijber",
    phone: "(126)-255-5737",
    location: {
      street: {
        number: 6972,
        name: "Kantakkers",
      },
      city: "Drijber",
      state: "Zuid-Holland",
      country: "Netherlands",
      postcode: 57780,
      coordinates: {
        latitude: "-8.1978",
        longitude: "72.9862",
      },
      timezone: {
        offset: "+1:00",
        description: "Brussels, Copenhagen, Madrid, Paris",
      },
    },
    birthday: "1946-12-29T22:01:32.721Z",
  },
];
const profiles = [];

/**
 * Fetch 12 random profiles and put relevant information into array of objects
 */
fetch("https://randomuser.me/api/?results=12&nat=us")
  .then(response => response.json())
  .then(data => {
    data.results.forEach(profile => {
      let index = 0;
      profiles.push({
        id: index,
        image: profile.picture.large,
        name: `${profile.name.first} ${profile.name.last}`,
        email: profile.email,
        phone: profile.cell,
        location: profile.location,
        birthday: profile.dob.date,
      });
      index++;
    });
    createGallery(profiles);
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
    p2.innerText = `${profile.location.city}, ${profile.location.state}, ${new Date(
      profile.birthday
    ).toLocaleDateString()}`;

    infoDiv.appendChild(h3);
    infoDiv.appendChild(p1);
    infoDiv.appendChild(p2);

    outerDiv.appendChild(imgDiv);
    outerDiv.appendChild(infoDiv);
    gallery.appendChild(outerDiv);
  });
};

/**
 * Create modal
 */
const createModal = profile => {
  const date = new Date(profile.birthday).toLocaleDateString();
  const phoneDigits = profile.phone.replace(/\D/g, "");
  const phoneNumber = `(${phoneDigits.substring(0, 3)}) ${phoneDigits.substring(3, 6)}-${phoneDigits.substring(6)}`;
  const modal = `
  <div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="${profile.image}" alt="${profile.name}'s profile picture">
            <h3 id="name" class="modal-name cap">${profile.name}</h3>
            <p class="modal-text">${profile.email}</p>
            <p class="modal-text cap">${profile.location.city}</p>
            <hr>
            <p class="modal-text">${profile.phone}</p>
            <p class="modal-text">${profile.location.street.number} ${profile.location.street.name}, ${profile.location.city}, ${profile.location.state} ${profile.location.postcode}</p>
            <p class="modal-text">Birthday: ${date}</p>
        </div>
    </div>`;
};

/**
 */
