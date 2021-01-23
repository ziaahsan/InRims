"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.cart.reserve', [])
   .component('cartReserveOverlay', (() => {
      // Component object
      return {
         restrict: 'E',
         replace: true,
         controller: controller(),
         templateUrl: 'src/components/cart/reserve/view.html'
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
