

function getAllProducts() {
    // A Fake service implementation return always the same set of data
    const products = require("./product.js.mockdata.json");
    return JSON.stringify(products);
}

module.exports = {
    getAllProducts: getAllProducts
}