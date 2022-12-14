/*
import inventory from input field
The user should be able to write a list of items into the #inventory input field, from which the INVENTORY object should be created.
 
After the user typed a list of items into the input field, an inventory should be created from that list of items.
Use our importInventory function to import the items from the input field into an inventory, when the input field changes.
*/
 
let itemInputField = document.getElementById("inventory");
let inventoryDisplay = document.getElementById("inventory-display");
let inventoryItems = document.getElementById("inventory-items");
 
itemInputField.addEventListener("blur", addItemsToInventory);
 
function addItemsToInventory() {
  let items = itemInputField.value.trim().split(",").map(item => item.trim());
  if (items.length) {
    importInventory(items);
  }
  createInventoryDisplay();
  createInventoryItems();
}
 
function createInventoryDisplay() {
  const ul = document.createElement("ul");
  for (const item in inventory) {
    const li = document.createElement("li");
    li.innerText = `${item} x ${inventory[item]}`;
    ul.appendChild(li);
  }
  inventoryDisplay.replaceChildren(ul);
}
 
function createInventoryItems() {
  let rows = [];
  for (const item in inventory) {
    const tableRow = document.createElement("div");
    tableRow.classList.add("inventory-item");
    const itemLabel = document.createElement("label");
    itemLabel.innerText = item;
    const addButton = document.createElement("button");
    addButton.id = item;
    addButton.innerText = `Add`;
    addButton.addEventListener("click", () => { 
      addItemToInventory(item); 
      createInventoryDisplay(); 
    })
    let removeButton = document.createElement("button");
    removeButton.id = item;
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", () => {
    let lastItem = removeItemsFromInventory(item);
    if (lastItem) {
      deleteTableRow(tableRow);
    }
      createInventoryDisplay();
    })
    
    tableRow.appendChild(addButton);
    tableRow.appendChild(removeButton);
    tableRow.appendChild(itemLabel);
    rows.push(tableRow);
  }
  inventoryItems.replaceChildren(...rows);
}
 

function deleteTableRow(tableRow) {
  tableRow.remove();
}