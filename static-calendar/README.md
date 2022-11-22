# Static Calendar
You've been using a calendar for the __year 2000__ for
over a decade now, it's time to upgrade!  
The problem is, the calendar is __static__.
Let's write some code to __dynamically__ generate
the calendar for the current year.

## Tasks
### Analyze `static.html`'s calendar HTML structure
Look through the DOM structure and figure out how the elements
could be extracted into JavaScript component functions.

### Re-create the calendar using JavaScript component functions
Write your dynamic calendar into `index.html` and `calendar.js`!
- Write JavaScript function components based on your analysis of
  the `static.html` DOM structure. Pay attention to the classes!
- A component is simply a function, which returns a new DOM element.
- The root component, which contains all other components,
  is inserted into the DOM.

### Select and render different calendar years
- Add a way for the user to input a different year (text-field/dropdown/menu/etc.)
- After inputting the new year, re-render the calendar using the new year

## Background Materials
### JavaScript Function Components
<details>
<summary>Function Components</summary>

#### Definition
Our definition of a __function component__ is a function that
creates a new HTML element and returns it.  
Example:
```js
function titleComponent(title) {
    const element = document.createElement("h1");
    element.innerText = title;
    return element;
}
```

#### Usage
Components can render other components, and so forth.  
Your __root component__ (top-most component of your component structure)
must be rendered in the DOM.  
Example:
```js
function rootComponent() {
    const root = document.createElement("div");
    root.appendChild(titleComponent("Hello World"));
    return root;
}

// Render root component
document.body.appendChild(rootComponent());
```

</details>

### Tutorials
- [DOM manipulation with JS](https://www.w3schools.com/js/js_htmldom_nodes.asp)
- [Listenening for user input (`eventListener`)](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

### API Docs
- [`createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
