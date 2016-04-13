'use strict';

// Declare app level module which depends on views, and components
jrPeopleIndex.$inject = ['mgIndex'];
function jrPeopleIndex(mgIndex) {
    return angular.extend(mgIndex, {
        init: 'index.filter={page:0,recordsPerPage:1}'
    });
}
angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'mgCrud',
    'ngMaterial',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'myApp.version'
])
        .config(function (mgHttpProvider) {
            mgHttpProvider.setDefaultConfig({url: 'http://localhost:8080/swinnrestful/wr'});
        })
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider
                        .when('/', {templateUrl: 'views/site/index.html',controller: 'SiteCtrl'})
                        .when('/index', {templateUrl: 'views/site/index.html',controller: 'SiteCtrl'})
//                        users
                        .when('/users', {templateUrl: 'views/users/list.html',controller: 'UsersCtrl'})
                        .when('/users/edit/:id', {templateUrl: 'views/users/edit.html',controller: 'UsersCtrl'})
                        .when('/users/create', {templateUrl: 'views/users/create.html',controller: 'UsersCtrl'})
                        .when('/users/delete/:id', {templateUrl: 'views/users/delete.html',controller: 'UsersCtrl'})
//                        .when('/customers', {
//                            templateUrl: 'views/customers/index.html',
//                            controller: 'CustomersCtrl'
//                        })
//                $routeProvider.when('/services', {
//                    templateUrl: 'views/site/services.html',
//                    controller: 'SiteCtrl'
//                });                
//                $routeProvider.when('/contact', {
//                    templateUrl: 'views/site/contact.html',
//                    controller: 'SiteCtrl'
//                });                
//                $routeProvider.when('/todo', {
//                    templateUrl: 'views/todo/index.html',
//                    controller: 'TodoCtrl'
//                });  
                        .otherwise({redirectTo: 'views/site/index.html'});
            }]).factory('jrPeopleIndex', jrPeopleIndex);





