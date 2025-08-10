// Menu data structure
// var menuLinks = [
//     { text: "about", href: "/about" },
//     { text: "catalog", href: "/catalog" },
//     { text: "orders", href: "/orders" },
//     { text: "account", href: "/account" },
// ];
var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];
// PART-1--------------------------------------------------|
let mainEl = document.getElementsByTagName("main");

// Set the background color of mainEl to the value stored in the
//  --main-bg CSS custom property.

mainEl[0].style.backgroundColor = "var(--main-bg)";

// Set the content of mainEl to <h1>DOM Manipulation</h1>.
// Method 1
// mainEl[0].innerHTML = "<h1>DOM Manipulation</h1>";
// Method 2
const h1 = mainEl[0].appendChild(document.createElement("h1"));

h1.textContent = "DOM Manipulation";

// Add a class of flex-ctr to mainEl.
mainEl[0].classList.add("flex-ctr");

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById("top-menu");
// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";
// Set the background color of topMenuEl to the value stored in the
//  --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// Iterate over the entire menuLinks array and for each "link" object:

menuLinks.forEach((link) => {
    // Create an <a> element.
    let a = document.createElement("a");
    // On the new element, add an href attribute with its value set
    // to the href property of the "link" object.
    a.setAttribute("href", link.href);
    // Set the new element's content to the value of the
    // text property of the "link" object.
    a.textContent = link.text;
    // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(a);
});

// Part 2: Adding Additional HTML and CSS-----------------------------------|
// Add the following additional "sub-menu" < nav > element 
// to the index.html file within your < header > element, 
// beneath the existing < nav > element
//Add to CSS properties
let header=document.getElementsByTagName("header");
let nav=document.createElement("nav");
nav.setAttribute("id","sub-menu");
header[0].appendChild(nav);

//Part 3: Creating the Submenu
// Select and cache the < nav id = "sub-menu" > element in a 
// variable named subMenuEl.
let subMenuEl=document.getElementById("sub-menu");
// Set the height subMenuEl element to be "100%".
subMenuEl.style.height="100%";
// Set the background color of subMenuEl to the value stored
//  in the--sub - menu - bg CSS custom property.
subMenuEl.style.backgroundColor="var(--sub-menu-bg)"
// Add the class of flex - around to the subMenuEl element.
subMenuEl.classList.add("flex-around");
// Now, change the position of the submenu to temporarily hide it.
//  Later, we will make the submenu appear dynamically based on user interaction:
// Set the CSS position property of subMenuEl to the value of absolute.
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.position="absolute";
subMenuEl.style.top="0";

// Part 4: Adding Menu Interaction------------------------------------------|
// In order to add submenu links, we will need to restructure the menuLinks 
// array within index.js.Update the menuLinks array 

// In order to add interaction:
// Select and cache the all of the < a > elements inside of topMenuEl 
// in a variable named topMenuLinks.
let topMenuLinks=topMenuEl.getElementsByTagName("a");
// Attach a delegated 'click' event listener to topMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault() method.
// The second line of code of the function should immediately return if the element clicked was not an < a > element.
// Log the content of the < a > to verify the handler is working.
