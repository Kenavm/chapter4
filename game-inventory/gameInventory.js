/**
 * Our inventory is represented as an object, where each key is an
 * item name, and each key's value is a number,
 * representing the amount of this item in the inventory.
 *
 * An inventory object looks like this:
 *
 *     {
 *         sword: 1,
 *         potions: 3,
 *         torch: 8,
 *     }
 *
 * @typedef {Record<string, number>} Inventory
 */

 let inventory = {};

/**
 * @param {Inventory} inventory
 * @returns {string}
 */

function displayInventory(inventory) {
  let inventoryString = "";
  for (const item in inventory) {
    inventoryString += `${item}: ${inventory[item]}\n`;
  }

  return inventoryString;
}

/**
 * @param {Inventory} inventory
 * @param {"asc" | "desc" | undefined} order
 * @returns {string}
 */

function displayInventoryTable(inventory) {}

/**
 * @param {Inventory} inventory
 * @param {string[]} itemsToAdd
 */
function addItemsToInventory(inventory, itemsToAdd) {
  for (const itemToAdd of itemsToAdd) {
    if (!inventory[itemToAdd]) {
      inventory[itemToAdd] = 1;
    } else {
      inventory[itemToAdd]++;
    }
  }
}

/**
 * @param {Inventory} inventory
 * @param {string[]} itemsToRemove
 */
function removeItemsFromInventory(inventory, itemsToRemove) {
  for (const itemToRemove of itemsToRemove) {
    if (inventory[itemToRemove] && inventory[itemToRemove] === 1) {
      delete inventory[itemToRemove];
    } else {
      inventory[itemToRemove]--;
    }
  }
}

/**
 * @param {string} text
 * @returns {Inventory}
 */
function importInventory(text) {

  let itemList = text.split(", ");
 
  
  addItemsToInventory(inventory, itemList);
  
  return inventory;
}

/**
 * @param {Inventory} inventory
 * @returns {string}
 */
function exportInventory(inventory) {
  let itemArray = [];

  for (const item in inventory) {
    for (let i = 0; i < inventory[item]; i++) {
        itemArray.push(item);
    }
  }
  
  return itemArray.join(", ");
}
