const item = {
  name: 'Biscuits',
  type: 'regular',
  catagory: 'food',
  price: 2.0
};

function applyCupon(catagory) {
  return function(discount) {
    return function(item) {
        item.price = item.price-discount * item.price;
        return item;
    };
  };
}
applyCupon('food')(0.1)(item).price;
