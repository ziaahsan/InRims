"use strict";
/* 
 * Script Description:
 *
 */
angular
   .module('js.angular.app')
   .component('itemListsOverlay', (() => {
      // Component object
      return {
         controller: controller(),
         templateUrl: 'src/components/item/lists/view.html'
      };

      //<summary>
      // NG - controller
      //</summary>
      function controller() {
         return ['$scope', '$location', '$http', '$window', '$sce', function ($scope, $location, $http, $window, $sce) {
            var ctrl = this;

            // Setup cards
            ctrl.cards = '';

            // Clean up
            ctrl.$onDestroy = function () {

            }

            // Initialization on-start
            ctrl.$onInit = function () {
               loadRimJson();
            }

            $scope.sanitizeText = function (text) {
               return $sce.trustAsHtml(text);
            }

            // Redirection
            $scope.redirect = function (...args) {
               let uri = `${args[1]}/${args[2]}`;
               $location.path(uri);
            }

            // @todo: For now fetch all data, but in general this is not the case
            function loadRimJson () {
               let url = 'http://192.168.2.31/AngularJS/Wheels/data/rims.json';
               $http.get(url).then(results => {
                  ctrl.cards = results.data;
               })
            }
         }];
      }
   })());
