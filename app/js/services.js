'use strict';

/* Services */

// angular.module 函数创建模块
var phonecatServices = angular.module('phonecatServices', ['ngResource']);
// ngResource 模块包含$resource 服务
phonecatServices.factory('Phone', ['$resource',  //避免压缩问题
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      //isArray ：boolean，如果为true，那么这个行为返回的对象是个数组
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
