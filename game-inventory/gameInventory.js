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

/**
 * @param {Inventory} inventory
 * @returns {string}
 */
function displayInventory(inventory) {}

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
function addItemsToInventory(inventory, itemsToAdd) {}

/**
 * @param {Inventory} inventory
 * @param {string[]} itemsToRemove
 */
function removeItemsFromInventory(
    inventory,
    itemsToRemove,
) {}

/**
 * @param {string} text
 * @returns {Inventory}
 */
function importInventory(text) {}

/**
 * @param {Inventory} inventory
 * @returns {string}
 */
function exportInventory(inventory) {}
