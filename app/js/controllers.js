'use strict';

/* Controllers */
/*
在模块定义中 [] 参数用于定义模块的依赖关系。
中括号[]为空表示该模块没有依赖，如果有依赖的话会在中括号写上依赖的模块名字*/
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

/*
path可以包含以冒号开始的命名组（:name）。匹配到下一个斜杠为止的所有字符，并在路由匹配时以给定的名字存储到$routeParams中。
path可以包含以冒号开始，以星号结束的命名组（:name*）。在路由匹配时，所有字符都以给定名字贪婪存储到$routeParams中。
path可以包含可选的命名组，包含一个问号（:name?）
*/

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
  //服务$routeParams保存了地址栏中的参数，例如{id , name}
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

