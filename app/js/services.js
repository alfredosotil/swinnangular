/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

var customerService = angular.module('myApp.services', ['ngResource']);

customerService.factory('Customer', function($resource){
    return $resource('http://localhost:8080/restfulbackend/wr/customers',{},{
        findAll:{method:'GET', isArray: true}
    });
});
