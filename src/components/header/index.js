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
         return ['appName', '$scope', '$location', '$window', function (appName, $scope, $location, $window) {
            var ctrl = this;

            // App name
            ctrl.appName = appName;

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
