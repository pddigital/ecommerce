angular.module('ecommerceApp').controller('mainCtrl', function($scope, ecommerceService) {

  $scope.test = "This is a test";
  $scope.products = [];



  $scope.getProducts = ()=> {
    ecommerceService.getProducts().then((products) => {
      $scope.products = products.data;
    })
  }

  $scope.postProduct = ()=> {
    $scope.productAdd = {
      title: $scope.title,
      description: $scope.description,
      price: $scope.price
    }
    ecommerceService.postProduct($scope.productAdd).then(() => {
      $scope.getProducts();
    })
  }

  $scope.removeProduct = (id)=> {
    console.log(id)
    ecommerceService.removeProduct(id).then(() => {
      $scope.getProducts();
    })
  }

  $scope.getProduct = (id)=> {
    console.log(id)
    ecommerceService.getProduct(id).then((result) => {
      $scope.product = result.data;
    })
  }

  $scope.updateProduct = (product)=> {
  
    ecommerceService.updateProduct(product).then(() => {
        $scope.getProducts();
    })
  }

})
