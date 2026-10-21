
/*
  Williamsburg, BKLYN / Then & Now
  Photo galleries and clickable historical comparisons.
*/

const currentPhotos = [
  {
    image: "images/s1.jpeg",
    title: "Sazon Perez",
    date: "1.",
    location: "417 S 4th St, Brooklyn, NY 11211",
    clickable: true,
    description:
      "Sazon Perez is a Dominican restaurant that has been serving Dominican food since 1990. Known for its traditional Dominican dishes and homemade flavors, the restaurant represents the Latino food culture that has shaped the neighborhood for decades. Its continued presence helps preserve Dominican culinary traditions and maintain a connection to Williamsburg's Latino community, even as the neighborhood continues to change through gentrification."
  },
  {
    image: "images/l1.jpeg",
    title: "Los Primos",
    date: "2.",
    location: "704 Grand St, Brooklyn, NY 11211",
    clickable: true,
    description:
      "Los Primos is a long-standing Dominican restaurant with more than 30 years of experience on Grand Street. The restaurant serves traditional Dominican and Latin American dishes, including mofongo, fried pork chops, rice and beans, and seafood. As a family-associated neighborhood business, Los Primos has contributed to Williamsburg’s Latino food culture for decades. The restaurant remains active, continuing to serve the community as the neighborhood changes."
  },
  {
    image: "images/i1.jpeg",
    title: "La Isla",
    date: "3.",
    location: "293 Broadway, Brooklyn, NY 11211",
    clickable: true,
    description:
      "La Isla is a long-standing Puerto Rican restaurant with approximately 30 years in business, the restaurant serves traditional Puerto Rican and Latin American dishes, including pernil, rice and beans, pork chops, mofongo, and alcapurrias. As a neighborhood business connected to Puerto Rican and Latino food culture, La Isla has contributed to the community's culinary traditions. The restaurant remains active, continuing to serve its customers as Williamsburg changes through gentrification."
  },
  {
    image: "images/r1.jpeg",
    title: "Reben Luncheonette",
    date: "4.",
    location: "229 Havemeyer St, Brooklyn, NY 11211",
    clickable: true,
    description:
      "Reben Luncheonette is an active Dominican and Latin American restaurant established in 1962. It serves a variety of breakfast and lunch dishes, including eggs, breakfast sandwiches, bagels, and traditional Dominican food such as mangú with fried cheese, salami, and eggs. The restaurant also offers morir soñando, a popular Dominican drink made with citrus and milk. As a neighborhood business connected to Dominican and Latino food culture, Reben Luncheonette continues to serve the community as Williamsburg changes through gentrification."
  }
];

const historicalPhotos = [];

const comparisons = [
  {
    title: "La Borinqueña",
    location: "175 Marcy Ave, Brooklyn, NY 11211",

    historicalImage: "images/borinquen.jpg",
    historicalDate: "BEFORE",
    historicalTitle: "La Borinqueña",

    historicalDescription:
      "La Borinqueña was a family-owned Puerto Rican grocery store that opened in 1972 at 175 Marcy Ave in South Williamsburg, Brooklyn. For about 40 years, it served as much more than a place to buy food. Known for its pastrami sandwiches and welcoming atmosphere, it became a gathering place where Puerto Rican residents could speak Spanish, watch sports, celebrate with family, and stay connected to their community. Many customers saw it as a second home and an important part of their everyday lives. The store closed in February 2013 amid the displacement of Latino residents and the decline of longtime neighborhood businesses as Williamsburg underwent gentrification. Its owner, Ruben Moya, described how business slowed as longtime customers moved away and explained that the building's new owner refused to renew the family's lease. La Borinqueña's closure marked the loss of more than a local business: it represented the disappearance of a place that had helped preserve Puerto Rican culture, relationships, and community life in Williamsburg.",

    currentImages: [
      {
        image: "images/borinquen2.jpeg",
        title: "Citibank",
        date: "NOW",
        description:
          "Today, a Citibank branch occupies this location. The former neighborhood business is no longer here."
      },
      {
        image: "images/borinquen3.jpeg",
        title: "The location today",
        date: "NOW",
        description:
          "Today, a Citibank branch occupies this location. The former neighborhood business is no longer here."
      }
    ],

    note: "175 Marcy Ave, Brooklyn, NY 11211"
  },

  {
    title: "Don Pedro",
    location: "90 Manhattan Ave, Brooklyn, NY 11206",

    historicalImage: "images/donpedro.WEBP",
    historicalDate: "BEFORE",
    historicalTitle: "Don Pedro",

    historicalDescription:
      "Don Pedro was a neighborhood restaurant that opened in 2001 in East Williamsburg, Brooklyn. Originally a family-run Ecuadorian restaurant, it gradually became much more than a place to eat. Over the years, it developed into a well-known independent music venue that welcomed punk, hip-hop, rock, goth, burlesque, drag, and other performances. It became a gathering place for musicians, artists, longtime Latino residents, and people from different parts of the community. Don Pedro closed on May 6, 2017, after 16 years. Its closure came amid changes in the neighborhood and growing pressure on independent cultural spaces. The building had been sold in 2016, and the venue's management had been looking for another place to relocate but had not found one. Don Pedro's closure represented the loss of more than a restaurant and music venue: it marked the disappearance of a space that had brought people together through music, art, and community life in East Williamsburg.",

    currentImages: [
      {
        image: "images/donpedro2.PNG",
        title: "The building today",
        date: "NOW",
        description:
          "Today, a modern five-story building occupies this location. Don Pedro, the former restaurant and music venue, is no longer here."
      }
    ],

    note: "90 Manhattan Ave, Brooklyn, NY 11206"
  },

  {
    title: "Huitzilli",
    location: "624 Metropolitan Ave, Brooklyn, NY 11211",

    historicalImage: "images/h1.jpg",
    historicalDate: "BEFORE",
    historicalTitle: "Huitzilli",

    historicalDescription:
      "Huitzilli was an independent shop in Williamsburg, Brooklyn, that specialized in Mexican clothing, handmade crafts, and jewelry. Owned and operated by Emily Cantrell, the store offered items sourced directly from artisans in different regions of Mexico, including silver jewelry, traditional guayabera shirts, sandals, and other handmade goods. Each item helped connect customers with the people and traditions behind its creation. Huitzilli offered more than ordinary shopping: it introduced the neighborhood to Mexican craftsmanship and supported independent artisans and family-run workshops. Its presence added to the diversity of small businesses that made Williamsburg a distinctive place. The shop closed in 2016, and today, is no longer at this location, reflecting the changing commercial landscape of the neighborhood.",

    currentImages: [
      {
        image: "images/h2.jpg",
        title: "The building today",
        date: "NOW",
        description:
          "Today, a modern eight-story building occupies this location. Huitzilli, the former shop specializing in Mexican clothing, handmade crafts, and jewelry, is no longer here."
      }
    ],

    note: "624 Metropolitan Ave, Brooklyn, NY 11211"
  },

  {
    title: "La Villita Bakery",
    location: "171 Grand St, Brooklyn, NY",

    historicalImage: "images/v1.JPEG",
    historicalDate: "BEFORE",
    historicalTitle: "La Villita Bakery",

    historicalDescription:
      "La Villita Bakery was a family-owned Mexican bakery located at 171 Grand St in Williamsburg, Brooklyn. Run by Alfonso Sosa and his family, it was known for affordable food, including egg-and-cheese breakfast sandwiches, café con leche, tacos, cakes, and other sweets. Its distinctive window displays featured decorated cakes with playful toppers, making the bakery a recognizable part of the neighborhood. La Villita was more than a place to buy food: it was a beloved local business that served residents and represented the Latino community's presence in Williamsburg. After 17 years in business, the bakery closed in February 2013, after its rent reportedly increased from $5,000 to $10,000 a month. Its closure reflected the growing pressure of rising rents and gentrification on longtime neighborhood businesses.",

    currentImages: [
      {
        image: "images/v2.jpeg",
        title: "Salt + Charcoal",
        date: "NOW",
        description:
          "Today, Salt + Charcoal, a restaurant, occupies this location at 171 Grand St. La Villita Bakery, the former neighborhood bakery, is no longer here."
      },
      {
        image: "images/v3.jpeg",
        title: "The location today",
        date: "NOW",
        description:
          "This photo shows the location today, where Salt + Charcoal now stands in place of the former La Villita Bakery."
      }
    ],

    note: "171 Grand St, Brooklyn, NY"
  },

  {
    title: "Buddies Coffee",
    location: "150 Grand St, Brooklyn, NY 11249",

    historicalImage: "images/b1.JPEG",
    historicalDate: "BEFORE",
    historicalTitle: "Buddies Coffee",

    historicalDescription:
      "Buddies Coffee was an independent, Puerto Rican-owned coffee business founded by Rachel Nieves and Taylor Nawrocki on December 26, 2020, initially operating as a coffee cart in New York City. It later became a café at 150 Grand St in Williamsburg, Brooklyn, known for its specialty coffee, baked goods, and signature coquito latte, inspired by the Puerto Rican holiday drink. Beyond serving coffee, Buddies became a gathering place and represented the continuing presence of Puerto Rican-owned businesses in a neighborhood with a long Puerto Rican history. The Williamsburg location closed in May 2025 after the owners faced a major rent increase that made staying in the space unsustainable. The business later continued at a new location in Manhattan. The closure of the original shop reflects the pressure rising rents can place on independent businesses and community spaces in Williamsburg.",

    currentImages: [
      {
        image: "images/b2.jpeg",
        title: "Block Golf",
        date: "NOW",
        description:
          "Today, Block Golf occupies this location at 150 Grand St. The indoor golf venue features golf simulators, replacing the former Buddies Coffee storefront."
      }
    ],

    note: "150 Grand St, Brooklyn, NY 11249"
  },

  {
    title: "Cubana Social",
    location: "70 N 6th St, Brooklyn, NY 11249",

    historicalImages: [
      {
        image: "images/c1.JPEG",
        title: "Cubana Social",
        date: "BEFORE",
        description:
          "Cubana Social was a Cuban restaurant and music venue established in Williamsburg in 2008 by Christina Bouza. It served Cuban food and hosted live music, creating a gathering place for neighbors, artists, and musicians. After years in the neighborhood, Cubana Social closed in December 2016. Its final day was December 17, 2016. The owner said the landlord planned to raise the rent by 300 percent when the lease ended on December 31, making it financially unsustainable to continue operating the business. Bouza also described the impact of gentrification and the displacement of longtime residents from Williamsburg. The closure marked the loss of a neighborhood space built around Cuban food, live music, and community connection."
      },
      {
        image: "images/c2.jpg",
        title: "Cubana Social",
        date: "BEFORE",
        description:
          "Cubana Social was a Cuban restaurant and music venue established in Williamsburg in 2008 by Christina Bouza. It served Cuban food and hosted live music, creating a gathering place for neighbors, artists, and musicians. After years in the neighborhood, it closed on December 17, 2016, after the owner said the landlord planned to raise the rent by 300 percent when the lease ended. The increase made it financially unsustainable to continue operating the business amid Williamsburg's rapid gentrification."
      }
    ],

    historicalDate: "BEFORE",
    historicalTitle: "Cubana Social",
    historicalDescription:
      "Cubana Social was a Cuban restaurant and music venue established in Williamsburg in 2008 by Christina Bouza. After years in the neighborhood, it closed on December 17, 2016. The owner said the landlord planned to raise the rent by 300 percent, making it financially unsustainable to continue operating the business. Its closure reflected the pressure rising rents and gentrification placed on independent businesses and community spaces.",

    currentImages: [
      {
        image: "images/c3.jpeg",
        title: "Patagonia",
        date: "NOW",
        description:
          "Today, Patagonia, an outdoor clothing and gear store, occupies the former Cubana Social location at 70 N 6th St in Williamsburg. The Cuban restaurant and music venue is no longer here."
      }
    ],

    note: "70 N 6th St, Brooklyn, NY 11249"
  },

  {
    title: "The L Train",
    location: "Williamsburg, Brooklyn, NY",

    historicalImage: "images/L1.jpg",
    historicalDate: "BEFORE",
    historicalTitle: "L Train, January 1988",

    historicalDescription:
      "This photograph shows the L train in Williamsburg in January 1988, with graffiti covering the walls around the tracks. During the 1970s and 1980s, graffiti became an important part of New York City's hip-hop culture. For many young artists, including Black and Latino writers, graffiti was a way to express identity, make themselves visible, and leave a mark on the city. Although painting subway trains without permission was illegal, the art form developed its own styles and communities, connecting young people through creativity and a shared cultural movement. Graffiti helped spread visual styles and ideas across neighborhoods as trains carried the artwork throughout the city. This image preserves a moment when public transportation also served as a highly visible canvas for urban expression.",

    currentImages: [
      {
        image: "images/L2.png",
        title: "The L Train in 2026",
        date: "NOW",
        description:
          "In this 2026 photograph, the L train remains part of everyday life in Williamsburg, but the visual landscape around it has changed. Graffiti on subway trains has been increasingly targeted by cleanup efforts and stricter enforcement, pushing much of this form of expression away from the trains and into other spaces. This change raises questions about who gets to shape the city's visual culture and where artistic expression is allowed. As Williamsburg has become more expensive and attracted wealthier residents and businesses, some forms of working-class street culture have become less visible, while more commercial and institutionally accepted forms of art have gained space. The contrast between these photographs shows not only a change in the subway environment, but also a shift in how public space and cultural expression are regulated."
      }
    ],

    note: "Williamsburg, Brooklyn, NY"
  }
];


function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}


/* Create the photo information window */
function createPhotoModal() {
  if (document.getElementById("photo-modal")) return;

  document.body.insertAdjacentHTML("beforeend", `
    <div
      id="photo-modal"
      class="photo-modal"
      aria-hidden="true"
      role="dialog"
      aria-modal="true"
      aria-labelledby="photo-modal-title"
    >
      <div class="photo-modal-backdrop" data-close-modal></div>

      <div class="photo-modal-content">
        <button
          class="photo-modal-close"
          type="button"
          aria-label="Close photo information"
          data-close-modal
        >&times;</button>

        <img id="photo-modal-image" src="" alt="">

        <div class="photo-modal-text">
          <p id="photo-modal-label" class="eyebrow"></p>
          <h2 id="photo-modal-title"></h2>
          <p id="photo-modal-location" class="photo-modal-location"></p>
          <p id="photo-modal-description"></p>
        </div>
      </div>
    </div>
  `);

  const modal = document.getElementById("photo-modal");

  modal.querySelectorAll("[data-close-modal]").forEach(button => {
    button.addEventListener("click", closePhotoModal);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closePhotoModal();
  });
}


function openPhotoModal(photo, location = "") {
  createPhotoModal();

  const modal = document.getElementById("photo-modal");

  document.getElementById("photo-modal-image").src = photo.image;
  document.getElementById("photo-modal-image").alt = photo.title || "";

  document.getElementById("photo-modal-label").textContent =
    photo.date || "";

  document.getElementById("photo-modal-title").textContent =
    photo.title || "Untitled photograph";

  const locationElement = document.getElementById("photo-modal-location");
  locationElement.textContent = location;

  document.getElementById("photo-modal-description").textContent =
    photo.description || "";

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  modal.querySelector(".photo-modal-close").focus();
}


function closePhotoModal() {
  const modal = document.getElementById("photo-modal");

  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}


/* Render the existing photo galleries */
function photoCard(photo, label, index) {
  const image = photo.image
    ? photo.clickable
      ? `<button
           class="comparison-photo-button gallery-photo-button"
           type="button"
           data-gallery-photo="${index}"
           aria-label="Read about ${escapeHTML(photo.title || "Project photograph")}"
         >
           <img
             src="${escapeHTML(photo.image)}"
             alt="${escapeHTML(photo.alt || photo.title || "Project photograph")}"
             loading="lazy"
           >
         </button>`
      : `<img
           src="${escapeHTML(photo.image)}"
           alt="${escapeHTML(photo.alt || photo.title || "Project photograph")}"
           loading="lazy"
         >`
    : `<div class="image-placeholder photo-placeholder">
         <span>${escapeHTML(label)}</span>
         <span>Photo will go here</span>
       </div>`;

  return `
    <article class="photo-card">
      <div class="photo-meta">
        <span class="date">${escapeHTML(photo.date || "Date to be confirmed")}</span>
        <h3>${escapeHTML(photo.title || "Untitled photograph")}</h3>
        ${photo.location
          ? `<p><strong>Location:</strong> ${escapeHTML(photo.location)}</p>`
          : ""}
        ${photo.locationUrl
          ? `<p><a href="${escapeHTML(photo.locationUrl)}" target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>`
          : ""}
        ${photo.clickable
          ? ""
          : photo.description
            ? `<p>${escapeHTML(photo.description)}</p>`
            : ""}
      </div>
      ${image}
    </article>
  `;
}


function renderGallery(elementId, photos, label) {
  const container = document.getElementById(elementId);

  if (!container) return;

  if (!photos.length) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = photos
    .map((photo, index) => photoCard(photo, label, index))
    .join("");

  container.querySelectorAll("[data-gallery-photo]").forEach(button => {
    button.addEventListener("click", () => {
      const photo = photos[Number(button.dataset.galleryPhoto)];

      if (photo) {
        openPhotoModal(photo, photo.location || "");
      }
    });
  });
}


/* Render the before-and-after comparisons */
function renderComparisons() {
  const container = document.getElementById("comparison-list");

  if (!container) return;

  if (!comparisons.length) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = comparisons.map((pair, index) => {
    const historicalPhotosForPair = pair.historicalImages || [
      {
        image: pair.historicalImage,
        title: pair.historicalTitle || pair.title,
        date: pair.historicalDate || "BEFORE",
        description: pair.historicalDescription
      }
    ];

    const historicalHTML = historicalPhotosForPair.map((photo, photoIndex) => `
      <div class="comparison-image">
        <span class="comparison-label">BEFORE</span>

        <button
          class="comparison-photo-button"
          type="button"
          data-pair="${index}"
          data-photo="historical-${photoIndex}"
          aria-label="Read about ${escapeHTML(photo.title || pair.title)}"
        >
          <img
            src="${escapeHTML(photo.image)}"
            alt="Historical photograph of ${escapeHTML(photo.title || pair.title)}"
            loading="lazy"
          >
        </button>
      </div>
    `).join("");

    const currentHTML = pair.currentImages.map((photo, photoIndex) => `
      <div class="comparison-image">
        <span class="comparison-label">NOW</span>

        <button
          class="comparison-photo-button"
          type="button"
          data-pair="${index}"
          data-photo="${photoIndex}"
          aria-label="Read about ${escapeHTML(photo.title)}"
        >
          <img
            src="${escapeHTML(photo.image)}"
            alt="${escapeHTML(photo.title)} at ${escapeHTML(pair.location)}"
            loading="lazy"
          >
        </button>
      </div>
    `).join("");

    return `
      <article class="comparison-pair">

        <div class="comparison-caption">
          <h3>${escapeHTML(pair.title)}</h3>
          <p><strong>Location:</strong> ${escapeHTML(pair.location)}</p>
        </div>

        <div class="comparison-photos">
          <div class="comparison-before">
            ${historicalHTML}
          </div>

          <div class="comparison-after">
            ${currentHTML}
          </div>
        </div>

      </article>
    `;
  }).join("");

  container.querySelectorAll(".comparison-photo-button[data-pair]").forEach(button => {
    button.addEventListener("click", () => {
      const pair = comparisons[Number(button.dataset.pair)];

      if (button.dataset.photo.startsWith("historical-")) {
        const historicalPhotosForPair = pair.historicalImages || [
          {
            image: pair.historicalImage,
            title: pair.historicalTitle || pair.title,
            date: pair.historicalDate || "BEFORE",
            description: pair.historicalDescription
          }
        ];

        const photoIndex = Number(button.dataset.photo.split("-")[1]);

        openPhotoModal(historicalPhotosForPair[photoIndex], pair.location);
      } else {
        const photo = pair.currentImages[Number(button.dataset.photo)];
        openPhotoModal(photo, pair.location);
      }
    });
  });
}


/* Start the website features */
createPhotoModal();
renderGallery("current-gallery", currentPhotos, "CURRENT PHOTO");
renderGallery("archive-gallery", historicalPhotos, "ARCHIVAL PHOTO");
renderComparisons();
