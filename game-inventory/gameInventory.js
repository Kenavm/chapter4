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
function addItemToInventory(itemToAdd) {
  if (!inventory[itemToAdd]) {
    inventory[itemToAdd] = 1;
  } else {
    inventory[itemToAdd]++;
  }
}

/**
 * @param {Inventory} inventory
 * @param {string[]} itemsToRemove
 */
function removeItemsFromInventory(itemToRemove) {
  if (inventory[itemToRemove] > 1) {
    inventory[itemToRemove]--;
    return false;
  } else if (inventory[itemToRemove] === 1) {
    delete inventory[itemToRemove];
    return true;
  }
}

/**
 * @param {string} text
 * @returns {Inventory}
 */
function importInventory(itemsArray) {
  itemsArray.forEach((item) => addItemToInventory(item));
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
