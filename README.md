## About The Project
This portion of the activity focuses on making elements dynamic and interactive using DOM events and event-driven programming techniques.


## Input-
Provided with two different types of data:
 
 Menu data structure

 ``` var menuLinks = [
     { text: "about", href: "/about" },
     { text: "catalog", href: "/catalog" },
     { text: "orders", href: "/orders" },
     { text: "account", href: "/account" },
 ];
 ```

 An updated Menu data structure

```
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
        text: 'orders', href: '#orders', subLinks: [
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
```



## Output-
A website with working links as asked.


## Validation Checks
- PreventDefault() function in every handler function.
- Check if href links are clicked then only toggle active
- If sublinks are there, then only show sub menu

## Requirements

##### PART 2
- ✅add the following additional "sub-menu" <nav> element to the index.html file within your <header> element, beneath the existing <nav> element, as follows:
``` 
<header>
	<nav id=""top-menu""></nav>
	<!-- Add the <nav> element below -->
	<nav id=""sub-menu""></nav>
</header>
 ```


 - ✅ Secondly, add the following to the styles.css file:
 ```
header, #top-menu {
	position: relative;
}
#top-menu {
	z-index: 20;
}
#sub-menu {
	width: 100%;
	z-index: 10;
	transition: top 0.5s ease-out;
}
#sub-menu a:hover {
	background-color: var(--top-menu-bg);
}
nav a.active {
	background-color: var(--sub-menu-bg);
	color: var(--main-bg);
}
```
##### PART 3
All future steps should be completed within the index.js file.
##### 3.1
- ✅Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
- ✅Set the height subMenuEl element to be "100%".
- ✅Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
- ✅Add the class of flex-around to the subMenuEl element.
##### 3.2
- ✅Set the CSS position property of subMenuEl to the value of absolute.
- ✅Set the CSS top property of subMenuEl to the value of 0.

##### PART 4 :Adding Menu Interaction
In order to add submenu links, we will need to restructure the menuLinks array within index.js. 
##### 4.1 
✅Update the menuLinks array.

##### 4.2 In order to add interaction:
- ✅Select and cache the all of the ```<a>``` elements inside of topMenuEl in a variable named topMenuLinks.
- ✅Attach a delegated 'click' event listener to topMenuEl.
    - ✅(a) The first line of code of the event listener function should call the event object's preventDefault() method.
    - ✅(b) The second line of code of the function should immediately return if the element clicked was not an ```<a>``` element.
- ✅Log the content of the ```<a>``` to verify the handler is working.
##### 4.3
- ✅The event listener should add the active class to the ```<a>``` element that was clicked, unless it was already active, in which case it should remove it.
- ✅The event listener should remove the active class from each other ```<a>``` element in topMenuLinks - whether the active class exists or not.
    - Hint: Removing a non-existent class from an element does not cause an error!
##### PART 5: Adding Submenu Interaction
##### 5.1 
- Within the event listener, if the clicked ```<a>``` element does not yet have a class of "active" (it was inactive when clicked):
     - (a) ✅If the clicked ```<a>``` element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
    - (b)✅ Otherwise, set the CSS top property of subMenuEl to 0.
        - Hint: Caching the "link" object will come in handy for passing its subLinks array later.

##### 5.2 
The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:

1. ✅Clear the current contents of subMenuEl.
2. Iterate over the subLinks array, passed as an argument, and for each "link" object:
    - (a) ✅Create an ```<a>``` element.
    - (b) ✅Add an href attribute to the ```<a>```, with the value set by the href property of the "link" object.
    - (c) ✅Set the element's content to the value of the text property of the "link" object.
    - (d) ✅Append the new element to the subMenuEl.

 Once you have created your helper function, include it in the event listener within the same logic that shows the submenu, remembering to pass the array of sub-links as an argument.

##### 5.3
1. ✅Attach a delegated 'click' event listener to subMenuEl.
    - ✅The first line of code of the event listener function should call the event object's preventDefault() method.
    - ✅The second line of code within the function should immediately return if the element clicked was not an ```<a>``` element.
    - ✅ Log the content of the ```<a>``` to verify the handler is working.
2. ✅Next, the event listener should set the CSS top property of subMenuEl to 0.
3. ✅Remove the active class from each ```<a>``` element in topMenuLinks.
4. ✅Update the contents of mainEl, within an ```<h1>```, to the contents of the ```<a>``` element clicked within subMenuEl.
5. ✅If the ABOUT link is clicked, an ```<h1>```About```</h1>``` should be displayed.


## Reflection
1. What could you have done differently during the planning stages of your project to make the execution easier?

    Pretty happy with the way I approached it.

2. What would you add to, or change about your application if given more time?

    Nothing.
