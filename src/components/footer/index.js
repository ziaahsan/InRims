"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.footer', [])
   .component('footerOverlay', (() => {
      // Component object
      return {
         restrict: 'E',
         replace: true,
         controller: controller(),
         templateUrl: 'src/components/footer/view.html'
      };

      //<summary>
      // NG - controller
      //</summary>
      function controller() {
         return ['$scope', '$location', '$window', function ($scope, $location, $window) {            
            // Clean up
            this.$onDestroy = function () {

            }

            // Initialization on-start
            this.$onInit = function () {

            }

            // Redirection
            $scope.redirect = function ($event, path) {

            }
        }];
      }
   })());
