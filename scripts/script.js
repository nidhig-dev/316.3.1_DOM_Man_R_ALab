// Menu data structure
// var menuLinks = [
//     { text: "about", href: "/about" },
//     { text: "catalog", href: "/catalog" },
//     { text: "orders", href: "/orders" },
//     { text: "account", href: "/account" },
// ];

// PART 4.1-----------------------------------------|
var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: 'catalog', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: 'orders', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: 'account', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];
/*var menuLinks = [
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
];*/

// PART-1--------------------------------------------------|
// Now that you have a deeper understanding of DOM manipulation concepts,
// ✅ if there is anything you would like to fix or change, now is the time to do so.
let mainEl = document.querySelector("main");

// Set the background color of mainEl to the value stored in the
//  --main-bg CSS custom property.

mainEl.style.backgroundColor = "var(--main-bg)";

// Set the content of mainEl to <h1>DOM Manipulation</h1>.
// Method 1
// mainEl[0].innerHTML = "<h1>DOM Manipulation</h1>";
// Method 2
const h1 = mainEl.appendChild(document.createElement("h1"));

h1.textContent = "DOM Manipulation";

// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

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

// ✅PART 2: Adding Additional HTML and CSS-----------------------------------|
// Add the following additional "sub-menu" < nav > element 
// to the index.html file within your < header > element, 
// beneath the existing < nav > element
//Add to CSS properties
// let header = document.querySelector("header");
// let nav = document.createElement("nav");
// nav.setAttribute("id", "sub-menu");
// header.appendChild(nav);

//✅PART 3: Creating the Submenu----------------------------------|
// 3.1.1 Select and cache the < nav id = "sub-menu" > element in a 
// variable named subMenuEl.
let subMenuEl = document.getElementById("sub-menu");
// 3.1.2 Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";
// 3.1.3 Set the background color of subMenuEl to the value stored
//  in the--sub - menu - bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
// 3.1.4 Add the class of flex - around to the subMenuEl element.
subMenuEl.classList.add("flex-around");
// Now, change the position of the submenu to temporarily hide it.
//  Later, we will make the submenu appear dynamically based on user interaction:
// 3.2.1 Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";
//3.2.2 Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

//✅ PART 4: Adding Menu Interaction------------------------------------------|
// In order to add submenu links, we will need to restructure the menuLinks 
// array within index.js.Update the menuLinks array 

// In order to add interaction:
// 4.2.1 Select and cache the all of the < a > elements inside of topMenuEl 
// in a variable named topMenuLinks.
let topMenuLinks = topMenuEl.getElementsByTagName("a");
//4.2.2 Attach a delegated 'click' event listener to topMenuEl.
for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].addEventListener("click", handleNavClick);

};


function handleNavClick(event) {
    //4.2.2.a The first line of code of the event listener function should call the event object's
    //  preventDefault() method.
    event.preventDefault();
    //4.2.2.b The second line of code of the function should immediately return if the element
    // clicked was not an < a > element.

    // either I can use: this.tagname or this.textContent or
    // event.target.tagname or event.target.textcontent
    // ---------------this=event.target-----------------------------|
    //  console.log(this.tagName);
    // -------------Method 1----------------|
    //        if (event.target.tagName ==='A'){
    //        console.log(`${event.target.textContent} at link ${event.target.href} was clicked`);
    //     return;
    //    }

    // -------------------------Method 2---------------------|

    if (this.tagName === 'A') {
        // 4.2.2.c Log the content of the < a > to verify the handler is working.
         console.log(`${(this.textContent).toUpperCase()} was clicked and the href link is ${this.href}`);

        //  PART 5.1 Within the event listener, if the clicked < a > element does not yet have a
        //  class of "active"(it was inactive when clicked):

        if (this.classList != ("active")) {
            // console.log("Link was not active");
            menuLinks.forEach(link => {
                // checking which main link is clicked with the menulinks array's text

                if (link.text == this.textContent) {
                    // checking if the main link has a sublink
                    // PART -5.1.a-------------------------------------------------|
                    // If the clicked < a > element's "link" object within menuLinks has a subLinks
                    // property (all do, except for the "link" object for ABOUT), set the CSS top
                    // property of subMenuEl to 100%.
                    if (link.subLinks) {
                        subMenuEl.style.top = '100%';
                        // console.log("submenu el is", subMenuEl)

                        // 5.2- Call helper function buildSubmenu
                        subMenuEl=buildSubmenu(subMenuEl,link.subLinks);
                        
                        // 5.3 Attach a delegated 'click' event listener to subMenuEl.
                        let subMenuLinks=subMenuEl.getElementsByTagName('a');
                        for(let i=0;i<subMenuLinks.length;i++){
                            subMenuLinks[i].addEventListener('click', handleSubMenuLinks);
                        }


                    }
                    else {
                        //5.1.b- Otherwise, set the CSS top property of subMenuEl to 0.

                        subMenuEl.style.top = '0';
                        // Part 5.3.5----------------------------|
                        // If the ABOUT link is clicked, an < h1 > About</h1 > should be displayed.

                        let newH1 = mainEl.querySelector('h1');
                        newH1.textContent = (this.textContent).toUpperCase();

                    }
                }
            });
        }
        else{
            // Ensure that clicking CATALOG, ORDERS, etc.shows the submenu bar, 
            // and that clicking them again hides it.
            subMenuEl.style.top = '0';
        }
        // 4.3.2 The event listener should remove the active class from each other < a > element in
        // topMenuLinks - whether the active class exists or not.
        //     Hint: Removing a non - existent class from an element does not cause an error!
        
        // grab the link if class is active else return null
        let linkActive = document.querySelector('.active');
        // console.log("Previous active link was", linkActive);
        // console.log("Current active link is", this.href);
        // if link is active but is not the current clicked link,
        //  then remove active coz some other link was clicked
        if (linkActive && linkActive != this.href) {
            linkActive.classList.remove("active");

        }

        // 4.3.1   The event listener should add the active class to the < a > element that was clicked,
        //  unless it was already active, in which case it should remove it.
        this.classList.toggle("active");

        return;
    }
    else {
        return;
    }

}

//  ✅Part 5: Adding Submenu Interaction--------------------------------------|



function handleSubMenuLinks(event) {
    //PART 5.3.1 (a)-----------------------------------------------------------|
    //  The first line of code of the event listener function should call 
    // the event object's preventDefault() method.
    // console.log("Entered sub link menu ");
    event.preventDefault();
    // PART 5.3.1(b)-------------------------------------------------------------|
    // The second line of code within the function should immediately return
    //  if the element clicked was not an < a > element.
    if (this.tagName === 'A') {
        // PART 5.3.1 (c)-----------------------------------------------------|
        // Log the content of the < a > to verify the handler is working.
         console.log(this.href);
        // PART 5.3.2-------------------------------------------------------|
        // Next, the event listener should set the CSS top property of subMenuEl to 0.
        subMenuEl.style.top='0';



        // PART 5.3.3 ------------------------------------------------------|
        // Remove the active class from each < a > element in topMenuLinks.

        // grab the link if class is active else return null
        let linkActive = document.querySelector('.active');
        // if link is active but is not the current clicked link,
        //  then remove active coz some other link was clicked
        if (linkActive && linkActive != this.href) {
            linkActive.classList.remove("active");
            // subMenuEl.style.top = '0';
        }
        
        // The event listener should add the active class to the < a > element that was clicked,
        //  unless it was already active, in which case it should remove it.
        this.classList.toggle("active");
        // console.log("I clicked same link again");
        
        // PART- 5.3.4----------------------------------------------------|
        // Update the contents of mainEl, within an < h1 >, to the contents
        //  of the < a > element clicked within subMenuEl.
        let newH1 = mainEl.querySelector('h1');
        newH1.textContent = (this.textContent).toUpperCase();;


        return;
    }
    else {
        return;
    }
}

function buildSubmenu(subMenuEl,subLinks){

// PART 5.2.1----------------------------------------------|
    // Emptying the previous submenu
    subMenuEl.textContent = '';
    // PART 5.2.2-----------------------------------------|
    subLinks.forEach(sublink => {

        // console.log(`The sublink for ${Link.text} is ${sublink.text} `);
        // PART 5.2.2.a-----------------------------------!
        let subA = document.createElement("a");
        // PART 5.2.2.b-----------------------------------!
        // On the new element, add an href attribute with its value set
        // to the href property of the "sublink" object.
        subA.setAttribute("href", sublink.href);
        // PART 5.2.2.c-----------------------------------!
        // Set the new element's content to the value of the
        // text property of the "sublink" object.
        subA.textContent = sublink.text;
        // PART 5.2.2.d-----------------------------------!
        // Append the new element to the subMenuEl element.
        subMenuEl.appendChild(subA);

    });
    // console.log("submenu el in helper function is",subMenuEl)
    return(subMenuEl);
}