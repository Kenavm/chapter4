# Bitter
With the power of DOM manipulation, you can make
any celebrity tweet offensive or funny posts -
or at least make it look that way.  

You're supposed to create a simple social media app,
filled with funny, fake posts of celebrities: __Bitter__.

## What are you going to learn?
- Manipulating the DOM with the browser developer tools
- Manipulating the DOM with JavaScript
- Creating new DOM elements with JavaScript

## Tasks
### Create a fake post!
Choose any celebrity, find their one of their social media accounts
(Twitter, Facebook, Instagram, ...) and edit their __profile description__
and one of their __posts__, using the browser's __developer tools__.
1. The celebrity's profile description is changed
2. One of the celebrity's posts is changed
3. Create a screenshot of their new profile and upload it to the repository

---

### Bitter - The fake social media app
Let's create a knock-off Twitter app!  
We'll populate its feed with fake posts by celebrities.

### Create post elements
For every post object in the provided `POSTS` variable,
corresponding HTML elements should be created and inserted
into the `#posts` element.  
For every post object...
- an __avatar__ image (profile picture) is rendered
- the __author__ name is rendered
- the text __body__ of the post is rendered

### Create new post form
Allow the user to __create__ new fake posts,
which will also be rendered in the DOM.
The user can enter an author name and the post body,
and when the user clicks a "Create Post" button, the post
should be rendered alongside the other posts.
- Add a post __author__ input field
- Add a post __body__ input field
- Add a button to __create__ and __render__ the post

### Delete existing posts
Allow the user to __delete__ existing posts.
When the user clicks on a "Delete Post" button next to
the rendered post, the post is deleted and not rendered anymore.
- Add delete __button__ to every rendered post
- When the button is __clicked__, the corresponding post is __deleted__

## Background Materials
- [`querySelector` basics](https://www.w3schools.com/jsref/met_document_queryselector.asp)
- [Creating, inserting, removing HTML elements with JS](https://www.w3schools.com/js/js_htmldom_nodes.asp)
- API docs:
    - [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    - [`createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
    - [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
