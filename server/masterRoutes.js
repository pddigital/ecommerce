const productRoutes = require('./products/productRoutes')

module.exports = app => {
  productRoutes(app);
}
