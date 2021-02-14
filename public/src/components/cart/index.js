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
         return ['appInfo', '$scope', '$location', '$window', '$http', '$routeParams', function (appInfo, $scope, $location, $window, $http, $routeParams) {
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
               $http.get(appInfo.jsonDataURL).then(results => {
                  ctrl.info = results.data[id];
               })
            }
         }];
      }
   })());
