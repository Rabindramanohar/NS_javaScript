function Cart() {

  let items = [];
  let cost = 0;

/* 1. Add
2. Remove
3. Checkout
4. Empty */

this.add = function(id, name, price) {

  try {
    if(items.length === 10)
    throw new Error("Cart is full!!");
  } catch (er) {
    console.log("Cart is full, you can't add more items here!!");
    return;
  }

  let obj = {};
  obj.id = id;
  obj.name = name;
  obj.price = price;

  items.push(obj);
}

this.remove = function(id) {

  try {
    if(items.length === 0)
      throw new Error("Cart is already empty!!");
  } catch (er) {
    console.log("Cart if empty you can't remove anymore!!");
    return;
  }

  let remainingItems = items.filter((item) => item.id !== id);
  items = remainingItems;

};

this.checkout = function() {
  for (let index = 0; index < items.length; index++) {
    cost += items.price;
  }
  console.log("checking out!! Total cost: "+cost);

  this.empty();
};

this.empty = function() {
  items = [];
  cost = 0;
};


Object.defineProperties(this, {
  items: {
    configurable: false,
    get: function() {
      return items;
    }
  },
  cost: {
    configurable: false,
    get: function() {
      return cost;
    }
  }
});
}
