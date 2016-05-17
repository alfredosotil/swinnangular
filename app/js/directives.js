'use strict';

/* Directives */


angular.module('swinn-angular-app.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
