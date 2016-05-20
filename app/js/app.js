'use strict';

// Declare app level module which depends on views, and components
//extendIndex.$inject = ['mgIndex'];
//function extendIndex(mgIndex) {
//    return angular.extend(mgIndex, {
//        init: 'index.filter={page:0,recordsPerPage:1}'
//    });
//}

angular.module('swinn-angular-app', [
    'ngRoute',
    'ngAnimate',
    'mgCrud',
    'ngMaterial',
//    'md.data.table',
    'swinn-angular-app.filters',
    'swinn-angular-app.services',
    'swinn-angular-app.directives',
    'swinn-angular-app.controllers',
    'swinn-angular-app.version'
])
        .config(function (mgHttpProvider) {
//            mgHttpProvider.setDefaultConfig({url: 'http://localhost/swinnapi/web'});
            mgHttpProvider.setDefaultConfig({url: 'http://localhost:8080/swinnrestfulapi/wr'});
        })
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
//                    .primaryPalette('pink', {
//                        'default': '400', // by default use shade 400 from the pink palette for primary intentions
//                        'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
//                        'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
//                        'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
//                    })
//                    // If you specify less than all of the keys, it will inherit from the
//                    // default shades
//                    .accentPalette('purple', {
//                        'default': '200' // use shade 200 for default, and keep all other shades the same
//                    })
//                    .dark();
        })
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider
                        .when('/', {templateUrl: 'views/site/index.html', controller: 'SiteCtrl'})
                        .when('/index', {templateUrl: 'views/site/index.html', controller: 'SiteCtrl'})
//                        users
                        .when('/user', {templateUrl: 'views/user/list.html', controller: 'UsersCtrl'})
                        .when('/user/edit/:id', {templateUrl: 'views/user/edit.html', controller: 'UsersCtrl'})
                        .when('/user/create', {templateUrl: 'views/user/create.html', controller: 'UsersCtrl'})
                        .when('/user/delete/:id', {templateUrl: 'views/user/delete.html', controller: 'UsersCtrl'})
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
            }]);
//                .factory('extendIndex', extendIndex);





