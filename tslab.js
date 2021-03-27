var mountainsWeHaventClimbed = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(mountains) {
    var tallest = null;
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mountain = mountains_1[_i];
        if (!tallest) {
            tallest = mountain;
        }
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    }
    return tallest === null || tallest === void 0 ? void 0 : tallest.name;
}
console.log(findNameOfTallestMountain(mountainsWeHaventClimbed));
var products = [
    {
        name: "Banana",
        price: 1.05
    },
    {
        name: "Cupcake",
        price: 1.65
    },
    {
        name: "Kerry's Famous Stuffed Shells",
        price: 11.99
    },
    {
        name: "Sweetstone Pineapple Gummie",
        price: 11.00
    },
    {
        name: "Bottled Water (free with purchase)",
        price: 0
    },
    {
        name: "Sourdough Double Whopper",
        price: 10.97
    },
    {
        name: "Mozzarella cheese sticks (packs of 12)",
        price: 4.99
    },
    {
        name: "2000 vintage cote de boeuf (World's most expensive steak)",
        price: 3200
    },
    {
        name: "Bresse Chicken (French raised, world's most expensive chicken. It is sold by the Gram... yes by the GRAM!! )",
        price: 48
    }
];
function calcAverageProductPrice(products) {
    var position = 0, sum = 0, length = products.length;
    while (position < length) {
        sum = sum + products[position++].price;
    }
    return sum / length;
}
console.log(calcAverageProductPrice(products));

var inventory = [
    {
        name: "motor",
        price: 10.00,
        quantity: 10
    },
    {
        name: "sensor",
        price: 12.50,
        quantity: 4
    },
    {
        name: "LED",
        price: 1.00,
        quantity: 20
    }
];
function calcInventoryValue(inventoryItem) {
    
    var total = 0;
    for (var _i = 0, inventoryItem_1 = inventoryItem; _i < inventoryItem_1.length; _i++) {
        var inventory_1 = inventoryItem_1[_i];
        total += inventory_1.price * inventory_1.quantity;
    }
    return total;
};

console.log(calcInventoryValue(inventory))
