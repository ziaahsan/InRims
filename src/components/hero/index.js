"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.app')
   .component('heroOverlay', (() => {
      // Component object
      return {
         controller: controller(),
         templateUrl: 'src/components/hero/view.html'
      };

      //<summary>
      // NG - controller
      //</summary>
      function controller() {
         return ['$scope', '$location', '$window', function ($scope, $location, $window) {
            var ctrl = this;

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
