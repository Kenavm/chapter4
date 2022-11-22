# Game Inventory
When creating a game, you will often times need a
way to store the player's __items__ somehow in the code.  
So let's create an __inventory__ data-structure,
some functions to interact with it, and a fitting UI!  

In our game, the player may be able to __pick-up__ items,
which would __add__ the item to our inventory.  
When the player __uses__ an item (like a health potion),
then the item should be __removed__ from the inventory.  
And we'll need a way to __display__ the inventory to the player.  

## What You'll Learn
- adding items to, changing items in, and removing items from objects
- string manipulation
- creating and manipulation DOM elements

## Tasks
The tasks are split into __two parts__:  
1. First we write some functions to interact with an inventory.
2. Then we can use these functions to add functionality to our UI.

You can complete these tasks in order, but feel free
to start with the UI functionality, and implement the
inventory functions as you need them!

### Inventory functions
The functions for the following tasks should be written
in the `gameInventory.js` file.

#### Display inventory
Write the function `displayInventory`, which takes an
`inventory` object as its parameter and returns a formatted `string`.  
You'll need to figure out how to iterate over object properties for this.  
Depending on the items in the inventory, the output string should look something like this:  
```
sword: 1
potions: 3
torches: 8
```
- Each item's __name__ in the inventory is on a line
- Following the item name is a __colon__ character (`":"`) and a space (`" "`)
- At the end of each line the item __count__ is written

#### Add items to inventory
Write the function `addItemsToInventory`, which takes the `inventory`
object and an `items` array as parameters. The given `items`
is an array of item names, which should be __added__ to the inventory.
- When an item is not already in the inventory, it should
  be added with `1` as its initial item count value.
- When an item is already in the inventory,
  its item count should be incremented by 1.
- When multiple occurrences of the same item is given in `items`,
  then each item should increment the item count.

#### Remove items from inventory
Write the function `removeItemsFromInventory`, which takes the `inventory`
object and an `items` array as parameters. The given `items`
is an array of item names, which should be __removed__ from the inventory.
- When an item is in the inventory, the item count
  for this item should be decreased by 1.
- When an item count reaches `0`, then this item property should
  be removed from the `inventory` object.

#### Import inventory from string
Write the function `importInventory`, which takes a `string` as parameter,
and should return a new `inventory` object.
The parameter is a string containing item names separated with commas (`","`),
it will look something like this:
```
sword, potion, potion, shield
```
- When the function is given the string `"sword, shield"`,
  it should return an `inventory` object with one sword and one shield item.
- When multiple of the same item is present in the parameter,
  they will all increment that item's count in the inventory.
- Spaces (`" "`) should be ignored.
- Use our `addItemsToInventory` function.

#### Export inventory to string
Write the function `exportInventory`, which takes an `inventory`
object as its parameter. It should return a `string`, which
contains all item names separated with `", "`.
It should generate a string in the format the `importInventory`
function can take as parameter.
- When the function is given an inventory with one sword and
  two potions, it should return the string: `"sword, potion, potion"`.
- When an item's count is greater than one, then that item name
  should appear `count` times in the output string.

#### Display inventory table (optional)
Write the function `displayInventoryTable`, which takes an
`inventory` object as its parameter and returns a formatted `string`.
The formatted string should look fancier than our `displayInventory` function,
it should look more like a table, like this:
```
---------------
   Name | Count
---------------
  sword |     1
potions |     3
torches |     8
---------------
```
- The separator lines (`---`) should be as wide as the longest row in the table
- All table fields should be right-aligned
- Make sure all pipe characters (`"|"`) are vertically aligned above each other

### UI functionality
The following tasks should be implemented
in the `app.js` file.

#### Import inventory from input field
The user should be able to write a list of items into the
`#inventory` input field, from which the `INVENTORY` object
should be created.
- After the user typed a list of items into the input field,
  an inventory should be created from that list of items.
- Use our `importInventory` function to import the items from
  the input field into an inventory, when the input field changes.

#### Display our inventory
When the inventory in our app changes, we should display
the inventory as a string in the `#inventory-display` element.
- Use our `displayInventory` function and render its formatted
  string into the `#inventory-display` element.
- This display should be updated when the user changes the
  list of items in our `#inventory` input field.
- __(Optional)__ Use our `displayInventoryTable` function instead of `displayInventory`.

#### Create elements for items
When the inventory changes, create elements for each unique item,
and insert them into the `#inventory-items` element.
Each item element should contain the __item name__ and the __item count__.
In addition, each element should get buttons to
__add__ and __remove__ one of the given item.  
An example HTML structure for an item could look like this:
```html
<div class="item">
    <div>Potion x 3</div>
    <button>Add</button>
    <button>Remove</button>
</div>
```
- When our inventory changes, generate elements for each item.
- Each item element should have the class `".item"`.
- When we click on the __add__ button, we want to add one of this item,
  incrementing its count (ex. using `addItemsToInventory`)
- When we click on the __remove__ button, we want to remove one of this item,
  decrementing its count (ex. using `removeItemsFromInventory`)

## Background Materials
- [Iterate Object in JavaScript](https://www.javascripttutorial.net/object/iterate-object-in-javascript/)
- [Remove a Property from a JavaScript Object](https://www.freecodecamp.org/news/how-to-remove-a-property-from-a-javascript-object/)
- [DOM manipulation with JavaScript](https://www.w3schools.com/js/js_htmldom_nodes.asp)
- API docs:
    - [`split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
    - [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
    - [`padStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
    - [`createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
    - [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
