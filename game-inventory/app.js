const INVENTORY = {
    sword: 1,
    potion: 2,
    torch: 2
};

addItemsToInventory(INVENTORY, [
    "potion",
    "torch",
    "torch",
    "torch",
    "bomb",
]);

removeItemsFromInventory(INVENTORY, ["torch", "bomb"]);


