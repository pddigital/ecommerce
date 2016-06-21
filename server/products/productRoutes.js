const productCtrl = require('./productCtrl');

module.exports = app => {
      app.get('/api/products', productCtrl.getProducts);
      app.post('/api/products', productCtrl.postProduct);
      app.get('/api/products/:id', productCtrl.getOneProduct);
      app.put('/api/update/:id', productCtrl.updateProduct);
      app.delete('/api/remove/:id', productCtrl.removeProduct);


}
