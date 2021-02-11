"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.app')
   .component('footerOverlay', (() => {
      // Component object
      return {
         controller: controller(),
         templateUrl: 'src/components/footer/view.html'
      };

      //<summary>
      // NG - controller
      //</summary>
      function controller() {
         return ['appInfo', '$scope', '$location', '$window', function (appInfo, $scope, $location, $window) {
            var ctrl = this;

            // App name
            ctrl.appName = appInfo.name;
            ctrl.date = new Date();

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
