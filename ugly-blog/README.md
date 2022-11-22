# Ugly Blog
You've spent a weekend programming a simple __blog__ app,
but you were too focused on the logic, that you forgot
to even open the app!  
Now you've realised, __it looks ugly__.  

Let's add some __styling__ with __CSS__ to make it look
__<span style="color: #e44;">p</span><span style="color: #4e4;">r</span><span style="color: #44e;">e</span><span style="color: #ee4;">t</span><span style="color: #e4e;">t</span><span style="color: #4ee;">y</span>__!

## Tasks
Add styling to the unstyled blog app, by writing your CSS in `style.css`.  
In the provided HTML file, you'll find `template` tags.  
The HTML in these templates are used to generate the post and form elements
via the provided JavaScript.  
You're free to change the HTML however you want,
also inside the `template` tags, but follow these rules:
- Don't change any `id` or `name` attributes
- Keep HTML in `template` tags
- Keep the `form` tag in the `#edit-post-template` template
- Avoid writing CSS selectors for `id`s ending with `-`

If you accidentally break some functionality after changing some HTML,
then best __undo__ your last couple changes to get the code working again.

### Style the page!
Change the HTML in `index.html` and write your CSS into `style.css` to
recreate a visual style similar to this:

<details>
<summary>Reference screenshot</summary>

![reference]
</details>

### Flexible post form and list
Use __display flex__ to align the `#new-post` and `#posts` elements
next to each other, allowing them to __wrap__ if the screen
width becomes too small.  

### Responsiveness
Make sure the app is still usable, even on a mobile screen width.  
Elements should stack on top of each other when the screen width
becomes too small. Try to use __display flex__ as much as possible
to automatically let the elements align themselves. You can
also use `@media`-queries in your CSS to apply specific styling on
smaller screen widths.  
On mobile, the app could look something like this:

<details>
<summary>Mobile reference screenshot</summary>

![reference-mobile]
</details>

### Post cards
Style the `.post` elements inside the `#post-template` template
to look like __cards__.
- Add a __shadow__.
- Add __rounded corners__.
- Proper post meta info (author, timestamp) alignment, font-size, etc.
- Adequate spacing from the card edges to the post body.
- Adequate spacing between the post title, body, and buttons.
- Proper button sizes and alignment.

<details>
<summary>Post card reference</summary>

![reference-post]
</details>

### Edit post form
Style the form element and its children inside the
`#edit-post-template` template.
- The children elements should have equal spacing to each other.
- The `input` fields should have adequate __padding__.
- The whole form can be a __card__, with a __shadow__ and __rounded corners__.

Make it look similar to this:

<details>
<summary>Post edit form reference screenshot</summary>

![reference-form]
</details>

### Edit post errors
Style the __error messages__ in `.form-error` in the post form,
which appear when the user leaves an input field blank.
The errors should immediately pop-out to the user, for example with
a strong color like <span style="color: #f17373;">red</span>.

<details>
<summary>Post edit errors reference screenshot</summary>

![reference-errors]
</details>

### Stats
Position the stats found in the elements `#stats-total-posts` and
`#stats-last-update` in one of the corners of the screen.

<details>
<summary>Stats reference screenshot</summary>

![reference-stats]
</details>

## Background Materials
- [`flex` cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [`box-shadow`](https://www.w3schools.com/CSSref/css3_pr_box-shadow.asp)
- [`border-radius`](https://www.w3schools.com/cssref/css3_pr_border-radius.asp)
- [`@media`-queries](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)
- [CSS selectors](https://www.w3schools.com/cssref/css_selectors.asp)

[reference]:        ./screenshots/reference.png
[reference-mobile]: ./screenshots/reference-mobile.png
[reference-post]:   ./screenshots/reference-post.png
[reference-form]:   ./screenshots/reference-form.png
[reference-errors]: ./screenshots/reference-errors.png
[reference-stats]:  ./screenshots/reference-stats.png
