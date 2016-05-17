'use strict';

angular.module('swinn-angular-app.version', [
  'swinn-angular-app.version.interpolate-filter',
  'swinn-angular-app.version.version-directive'
])

.value('version', '0.1');
