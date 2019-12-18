var washItems = function(itemsLeft) {
  while (itemsLeft) {
    itemsLeft--;
    console.log("В раковине " + itemsLeft + " посуды");
  }
};

washItems(10);