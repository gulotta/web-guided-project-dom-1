// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
const mainNav = document.getElementById("mainNav");
const divElems = document.getElementsByTagName("div");
const cardElems = document.getElementsByClassName("card");

const queryMainNav = document.querySelector("#mainNav");
const queryDivElems = document.querySelectorAll("div");
const queryCardElems = document.querySelectorAll(".card");



//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector("header");
const logoTitle = document.querySelector("#logoTitle");
const firstCard = document.querySelector(".card:nth-of-type(1)");

// B- finding within one particular element
const imageFirstCard = firstCard.querySelector("img");
const titleFirstCard = firstCard.querySelector("h2");
const subtitleFirstCard = firstCard.querySelector("h3");
const textFirstCard = firstCard.querySelector("p");

// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll("nav a");
// B- Loop over the links and console.log their text content
links.forEach(link => console.log(link.textContent)); // higher order function => function that takes another function as an argument!
/** for (let i=0; i <links.length; i++){
 * function(links[i]){}
 * } */
// C- Turn the collection of links into a real array
const linksArr = Array.from(links);
/**
 * for (let i = 0; i < links.length; i++) {
 *    newArr.push(links[i]);
 * }
 * return newArrl
 */

// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeLink = linksArr.find(link => link.textContent === "Home")
/**
 * find    => returns the first element which passes the condiction, meeths the criteria?
 * filter  => returns all elements which pass the condition
 * map     => make some update to all elements of the array
 * reduce  => reduce th e array to a singular value
 */

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = 'Bloomtech Doggos';
titleFirstCard.textContent = 'I is DOGGO';
subtitleFirstCard.textContent = 'A story in three parts';
textFirstCard.textContent = "Dogs are nice, dogs are kind, stay away from cats!";
link2FirstCard.textContent = 'Dog Ipsum';

//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
link1FirstCard.setAttribute("href", "https://pexels.com/search/dog");
link2FirstCard.href = "https://doggoipsum.com/";
imageFirstCard.src = "https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg";
logoTitle.className = 'logo heading banana';
//  B- Using .setAttribute to change a few attributes


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add("sky");
header.classList.remove("sky");
//  B- By manipulating inline styles on the element
header.style.fontSize = '2em';
// setInterval(()  => header.classList.toggle("sky"), 1000);

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement("a"); // THIS HAS TO BE A DOM TAG NAME
blogLink.textContent = "Blog";
blogLink.href = "#"
document.querySelector("nav").appendChild(blogLink);
blogLink.classList.add("menu-item");

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times

const secondCard = firstCard.cloneNode(true);

document.querySelector(".card-group").appendChild(secondCard);
header.remove();
document.body.prepend(header);

const data = {
    "contact": {
        "contact-heading" : "Contact",
        "address" : "123 Way 456 Street Somewhere, USA",
        "phone" : "1 (888) 888-8888",
        "email" : "sales@great-idea.io",
    }
};

const contactHeading = document.querySelector(".contact-heading");
const address = document.querySelector(".address");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");

contactHeading.textContent = data["contact"]["contact-heading"];
address.textContent = data["contact"]["address"];
phone.textContent = data["contact"]["phone"];
email.textContent = data["contact"]["email"];

/**
 * dot notation      => blah.name => const blah = {name: "Casey"}
 * bracket notation  => 1.) variables => const userInput = "name" => blah[userInput]
 *                      2.) data["contact"][contact-heading]
 */

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]



// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
