const mainRoute = require('./main/main');
const carsRoute = require('./cars-route');
const trainsRoute = require('./trains-route');
const imageRoute = require('./image/get-image');
const getUser = require('./user/get-user');
const handleProductsRoute = require('./products');

const router = {
  '/me': mainRoute,
  '/cars': carsRoute,
  '/trains': trainsRoute,
  '/image': imageRoute,
  '/users': getUser,
  '/products': handleProductsRoute,
  '/products/add-order': handleProductsRoute,
  default: mainRoute
};

module.exports = router;
