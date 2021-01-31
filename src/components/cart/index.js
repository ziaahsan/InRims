"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.app')
   .component('cartOverlay', (() => {
      // Component object
      return {
         controller: controller(),
         templateUrl: 'src/components/cart/view.html'
      };

      //<summary>
      // NG - controller
      //</summary>
      function controller() {
         return ['$scope', '$location', '$window', '$http', '$routeParams', function ($scope, $location, $window, $http, $routeParams) {
            var ctrl = this;

            // Setup info
            ctrl.info = '';

            // Clean up
            ctrl.$onDestroy = function () {

            }

            // Initialization on-start
            ctrl.$onInit = function () {
               loadJSONData($routeParams.id);
            }

            // Esc key callback
            function closeOnEscKey () {
               
            }

            // @todo: For now fetch all just like lists, but in general this is not the case
            function loadJSONData (id) {
               let url = 'http://192.168.2.31/AngularJS/Wheels/data/rims.json';
               $http.get(url).then(results => {
                  ctrl.info = results.data[id];
               })
            }
         }];
      }
   })());
