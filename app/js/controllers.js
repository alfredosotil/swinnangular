/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

angular.module('swinn-angular-app.controllers', [])
//        .controller('CustomersCtrl', ["$scope", "Customer", function (s, c) {
//                s.pageClass = 'page-home';
//                s.allCustomers = c.findAll();
//            }])
        .controller('TodoCtrl', ["$scope", function (s) {
                s.pageClass = 'page-home';
            }])
        .controller('SiteCtrl', ["$scope", "$location", function (s, l) {
                s.pageClass = 'page-home';
                s.isActive = function (viewLocation) {
                    return viewLocation === l.path();
                };
            }])
        .controller('UsersCtrl', ["$scope", "$location", function (s, l) {
                s.pageClass = 'page-home';
                s.isActive = function (viewLocation) {
                    return viewLocation === l.path();
                };
            }]);

