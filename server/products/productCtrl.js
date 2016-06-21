const Product = require('./Product')

module.exports = {

  getProducts(req, res){
    Product.find(req.query, (err, response)=> {
      if(err) {
        res.status(500).json(err)
      } else {
        res.json(response);
      }
    })
  },
  postProduct(req, res){
    Product.create(req.body, (err, response)=> {
      if(err) {
        res.status(500).json(err)
      } else {
        res.json(response);
      }
    })
  },
  getOneProduct(req, res){
    Product.findById(req.params.id, (err, response)=> {
      if(err){
        return res.status(500).json(error)
      } else {
        return res.json(response)
      }
    })
  },
  updateProduct(req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, (error, response)=> {
      console.log(req.params.id, req.body)
      if(error) {
        return res.status(500).json(error)
      } else {
        return res.json(req.body)
      }
    })
  },
  removeProduct(req, res) {
    Product.findByIdAndRemove(req.params.id, (error, response)=> {
      if(error) {
        return res.status(500).json(error)
      } else {
        return res.json(response)
      }
    })
  },

}
