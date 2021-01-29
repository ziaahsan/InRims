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
         return ['appName', '$scope', '$location', '$window', function (appName, $scope, $location, $window) {
            var ctrl = this;

            // App name
            ctrl.appName = appName;
            ctrl.date = new Date();

            // Clean up
            ctrl.$onDestroy = function () {

            }

            // Initialization on-start
            ctrl.$onInit = function () {

            }

            // Redirection
            ctrl.redirect = function ($event, path) {

            }
         }];
      }
   })());
