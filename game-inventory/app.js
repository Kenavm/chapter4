const INVENTORY = {
    sword: 1,
    potion: 2,
};

addItemsToInventory(INVENTORY, [
    "potion",
    "torch",
    "torch",
    "torch",
    "bomb",
]);

removeItemsFromInventory(INVENTORY, ["torch", "bomb"]);

console.log(displayInventory(INVENTORY));
console.log(displayInventoryTable(INVENTORY));
