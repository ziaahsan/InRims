"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.app')
   .component('itemDetailsOverlay', (() => {
      // Component object
      return {
         controller: controller(),
         templateUrl: 'src/components/item/details/view.html'
      };

      //<summary>
      // NG - controller
      //</summary>
      function controller() {
         return ['$scope', '$location', '$window', '$http', '$routeParams', function ($scope, $location, $window, $http, $routeParams) {
            var ctrl = this;

            // Setup cards
            ctrl.info = '';

            // Clean up
            ctrl.$onDestroy = function () {

            }

            // Initialization on-start
            ctrl.$onInit = function () {
               makeScrollMagic();
               loadJSONData($routeParams.id);
            }

            // Redirection
            ctrl.redirect = function ($event, path) {

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

      

      //<summary>
      // ScrollMagic library to handle some AWESOME sprite management effects.
      //</summary>
      function makeScrollMagic() {
         let frame = document.querySelector('.frame-rim-b100');
         let frame_count = 9;
         let offset = 50;
         let scrollMagic;

         scrollMagic = new ScrollMagic.Controller({
            globalSceneOptions: {
               triggerHook: 0
            }
         });

         new ScrollMagic.Scene({
            triggerHook: 0,
            triggerElement: '.cu-frame-rim',
            duration: (frame_count * offset) + 'px',
            reverse: true
         })
            .setPin('.cu-frame-rim')
            .addTo(scrollMagic);

         // build step frame scene
         for (var i = 1, l = frame_count; i <= l; i++) {
            new ScrollMagic.Scene({
               triggerElement: '.cu-frame-rim',
               offset: i * offset
            })
               .setClassToggle(frame, 'frame-rim-b100-' + i)
               .addTo(scrollMagic);
         }
      }
   })());
