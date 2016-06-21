angular.module('ecommerceApp').factory('ecommerceService', function($http) {
    return {
      getProducts: ()=> {
          return $http.get(`/api/products`);
      },
      postProduct: (productAdd)=> {
          return $http.post(`/api/products`, productAdd);
      },
      removeProduct: (id)=> {
          return $http.delete(`/api/remove/` + id)
      },
      getProduct: (id)=> {
          return $http.get(`/api/products/` + id)
      },
      updateProduct: (product)=> {
          return $http.put(`/api/update/` + product._id, product)
      }
    }
})
