var fs = require('fs');
var faker = require('faker/index');

var ordersObj = {} // empty Object
var key = 'Orders';
ordersObj[key] = []; // empty Array, which you can push() values into

for (var orderCounter = 50; orderCounter > 0; orderCounter--) {
    // order
    var order = {
        billing_fname: faker.name.firstName(),
        billing_lname: faker.name.lastName(),
        billing_address1: faker.address.streetAddress(),
        billing_address2: faker.address.secondaryAddress(),
        billing_city: faker.address.city(),
        billing_state: faker.address.stateAbbr(),
        billing_zip: faker.address.zipCode(),
        process_date: faker.date.recent(),
    };

    // recipient
    order['recipients'] = [];
    var numRecipients = Math.floor(Math.random() * 2) + 1 // each order will have between 1 and 2 recipients
    for (var recipientCounter = numRecipients; recipientCounter > 0; recipientCounter--) {
        var recipient = {
            shipping_fname: faker.name.firstName(),
            shipping_lname: faker.name.lastName(),
            shipping_address1: faker.address.streetAddress(),
            shipping_address2: faker.address.secondaryAddress(),
            shipping_city: faker.address.city(),
            shipping_state: faker.address.stateAbbr(),
            shipping_zip: faker.address.zipCode(),
        }
        order['recipients'].push(recipient);

        // items
        recipient['items'] = [];
        var numItems = Math.floor(Math.random() * 4) + 1 // each recipient will have between 1 and 3 items
        for (var itemCounter = numItems; itemCounter > 0; itemCounter--) {
            var item = {
                name: faker.commerce.productName(),
                price: faker.commerce.price(0, 100), // price between $0 and $100
                qty: Math.floor(Math.random() * 6) + 1, // qty between 1 and 6
                sku: faker.random.alphaNumeric(5).toUpperCase(),
                category: faker.commerce.department(),
                color: faker.commerce.color(),
                material: faker.commerce.productMaterial()
            }
            recipient['items'].push(item);
        }
    }
    ordersObj[key].push(order);
}

fs.writeFile(__dirname + '/Orders.data.json', JSON.stringify(ordersObj, null, 2), function () {
    console.log("Order data generated successfully!");
});