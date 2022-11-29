/*
import inventory from input field
The user should be able to write a list of items into the #inventory input field, from which the INVENTORY object should be created.

After the user typed a list of items into the input field, an inventory should be created from that list of items.
Use our importInventory function to import the items from the input field into an inventory, when the input field changes.
*/

let itemInputField = document.getElementById("inventory");

itemInputField.addEventListener("change", addItem);

function addItem() {
  let itemList = itemInputField.value;
  let inventoryDisplay = document.getElementById("inventory-display");
  let inventoryItems = document.getElementById("inventory-items");
  if (itemList != "") {
    inventory = importInventory(itemList);
  }

  inventoryItems.append(createHTMLElements(inventory, itemList));

  inventoryDisplay.innerText = displayInventory(inventory);
}

function createHTMLElements(inventory, itemlist) {
  for (const item in inventory) {
   
      let itemContainer = document.createElement("div");
      itemContainer.classList.add("item");
      let itemDiv = document.createElement("div");

      itemDiv.innerText = `${item} x ${inventory[item]}`;
      itemContainer.append(itemDiv);

      let addButton = "<button>Add</button>";
      itemContainer.append(addButtons(addButton, inventory, itemlist));

      let removeButton = "<button>Remove</button>";
      itemContainer.append(addButtons(removeButton, inventory, itemlist));
    
      return itemContainer;
    }
}
 
function addButtons(buttonString, inventory, itemList) {
  let div = document.createElement("div");
  div.innerHTML = buttonString.trim();
  if(buttonString.includes("Add")) {
    div.firstChild.addEventListener("click", function() {addItemsToInventory(inventory, itemList)});
  } else {
    div.firstChild.addEventListener("click", function()  {removeItemsFromInventory(inventory, itemList)});
  }
  return div.firstChild;
}

function refreshInventoryList() {
  
}

function removeItem() {}
