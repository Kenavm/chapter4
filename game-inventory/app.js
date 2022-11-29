/*
import inventory from input field
The user should be able to write a list of items into the #inventory input field, from which the INVENTORY object should be created.

After the user typed a list of items into the input field, an inventory should be created from that list of items.
Use our importInventory function to import the items from the input field into an inventory, when the input field changes.
*/

let itemInputField = document.getElementById("inventory");



itemInputField.addEventListener("change", addItems);

function addItems() {
  let itemList = itemInputField.value;
  let inventoryDisplay = document.getElementById("inventory-display");

  if (itemList != "") {
    inventory = importInventory(itemList);
  }
  createHTMLElements(inventory);

  inventoryDisplay.innerText = displayInventory(inventory);
}

function createHTMLElements(inventory) {
  let inventoryItems = document.getElementById("inventory-items");

  for (const item in inventory) {
    if (!inventory[item]) {
      let itemContainer = document.createElement("div");
      itemContainer.classList.add("item");
      let itemDiv = document.createElement("div");
      itemDiv.innerText = `${item} x ${inventory[item]}`;
      let addButton = "<button>Add</button>";
      let removeButton = "<button>Remove</button>";
    
      itemDiv.innerHTML = addButton.trim();
      itemDiv[1].addEventListener("click", addItems);
      itemDiv.innerHTML = removeButton.trim();
      itemDiv[2].addEventListener("click", removeItems);
      inventoryItems.append(itemDiv);
    } else {
        inventory[item]++;
    }
  } 
}

function removeItems() {

}