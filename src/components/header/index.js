"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.app')
   .component('headerOverlay', (() => {
      // Component object
      return {
         controller: controller(),
         templateUrl: 'src/components/header/view.html'
      };

      //<summary>
      // NG - controller
      //</summary>
      function controller() {
         return ['appInfo', '$scope', '$location', '$window', function (appInfo, $scope, $location, $window) {
            var ctrl = this;

            // App name
            ctrl.appName = appInfo.name;

            // Clean up
            ctrl.$onDestroy = function () {

            }

            // Initialization on-start
            ctrl.$onInit = function () {

            }

            // Redirection
            $scope.redirect = function ($event, path) {

            }
         }];
      }
   })());
