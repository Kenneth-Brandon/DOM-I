const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

/*
Dom Selectors
getElementById()
getElementByClassName()
getElementByTagName()
querySelector()
querySelectorAll()
*/

// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation

const navBar = document.querySelectorAll("nav a");
for (let i = 0; i < navBar.length; i++){
  navBar[i].innerHTML = siteContent["nav"]["nav-item-" + (i + 1)];
};

//CTA text

siteContent["cta"]["h1"] = "Dom<br>Is<br>Awesome";
const ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = siteContent["cta"]["h1"]

//CTA button

const ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"]

//CTA image

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

//Main content
//Top content

const topContentHeader = document.querySelectorAll(".main-content .top-content h4");
topContentHeader[0].textContent = siteContent["main-content"]["features-h4"];
topContentHeader[1].textContent = siteContent["main-content"]["about-h4"];

const topContentParagraph = document.querySelectorAll(".main-content .top-content p");
topContentParagraph[0].textContent = siteContent["main-content"]["features-content"];
topContentParagraph[1].textContent = siteContent["main-content"]["about-content"];

//Middle image

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Bottom content

const bottomContentHeader = document.querySelectorAll(".main-content .bottom-content h4");
bottomContentHeader[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentHeader[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentHeader[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomParagraph = document.querySelectorAll(".main-content .bottom-content p");
bottomParagraph[0].textContent = siteContent["main-content"]["services-content"];
bottomParagraph[1].textContent = siteContent["main-content"]["product-content"];
bottomParagraph[2].textContent = siteContent["main-content"]["vision-content"];

//Contact Section

const contactHeader = document.querySelector(".contact h4")
contactHeader.textContent = siteContent["contact"]["contact-h4"]

const contactParagraphs = document.querySelectorAll(".contact p");
contactParagraphs[0].textContent = siteContent["contact"]["address"];
contactParagraphs[1].textContent = siteContent["contact"]["phone"];
contactParagraphs[2].textContent = siteContent["contact"]["email"];

//Footer

const footerParagraph = document.querySelector("footer p")
footerParagraph.textContent = siteContent["footer"]["copyright"]

//Change nav links color

for (let i = 0; i < navBar.length;i++){
  navBar[i].classList.add("orangeTextClass");
  const greenTextClass = document.querySelectorAll('.orangeTextClass')[i];
  greenTextClass.style.color = "orange";
}

//Append and prepend

let navTags = document.querySelector('nav');

let navLinkOne = document.createElement('a');
navLinkOne.innerText = 'Halloween!'
navLinkOne.href = '#'
navLinkOne.style.color = "black";

navTags.appendChild(navLinkOne);

let navLinkTwo = document.createElement('a');
navLinkTwo.innerText = 'Happy!'
navLinkTwo.href = '#'
navLinkTwo.style.color = "black";

navTags.insertBefore(navLinkTwo, navTags.childNodes[0]);