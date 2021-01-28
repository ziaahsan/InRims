"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.cards.style0', [])
   .component('cardsStyle0Overlay', (() => {
      // Component object
      return {
         restrict: 'E',
         replace: true,
         controller: controller(),
         templateUrl: 'src/components/cards/style0/view.html'
      };

      //<summary>
      // NG - controller
      //</summary>
      function controller() {
         return ['$scope', '$location', '$http', '$window', '$sce', function ($scope, $location, $http, $window, $sce) {
            $scope.cards = '';

            // Clean up
            this.$onDestroy = function () {

            }

            // Initialization on-start
            this.$onInit = function () {
               $scope.loadRimJson();
            }

            // Redirection
            $scope.redirect = function (...args) {
               let uri = `${args[1]}/${args[2]}`;
               $location.path(uri);
            }

            $scope.loadRimJson = function () {
               let url = 'http://192.168.2.31/AngularJS/Wheels/data/rims.json';
               $http.get(url).then(results => {
                  $scope.cards = results.data;
                  console.log($scope.cards)
               })
            }

            $scope.sanitizeText = function (text) {
               return $sce.trustAsHtml(text);
            }
         }];
      }
   })());
