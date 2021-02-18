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
         return ['appInfo', '$scope', '$location', '$window', '$http', '$stateParams', function (appInfo, $scope, $location, $window, $http, $stateParams) {
            let root = document.documentElement;
            var ctrl = this;

            // Setup info
            ctrl.info = '';

            // Clean up
            ctrl.$onDestroy = function () {
               window.removeEventListener('keyup', keyPressed);
            }

            // Initialization on-start
            ctrl.$onInit = function () {
               window.addEventListener('keyup', keyPressed);
               loadJSONData($stateParams.id);
            }

            // Esc key callback
            $scope.closeOnEscKey = function () {
               $location.path("/");
            }

            function keyPressed(e) {
               if (e.key === "Escape") {
                  $scope.$apply(() => $scope.closeOnEscKey());
               }
            }

            // @todo: For now fetch all just like lists, but in general this is not the case
            function loadJSONData(id) {
               $http.get(appInfo.jsonDataURL).then(async function(results) {
                  if (!results.data[id]) return;
                  ctrl.info = results.data[id];
                  root.style.setProperty('--rim-sprite-sheet', `url("../${ctrl.info.image.sprite}")`);
                  makeScrollMagic();
               })
            }
         }];
      }

      //<summary>
      // ScrollMagic library to handle some AWESOME sprite management effects.
      //</summary>
      function makeScrollMagic() {
         let frame = document.querySelector('.frame-rim');
         let frame_count = 9;
         let offset = 50;
         let scrollMagic;

         scrollMagic = new ScrollMagic.Controller({
            container: ".cu-modal",
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
               .setClassToggle(frame, 'frame-rim-' + i)
               .addTo(scrollMagic);
         }
      }
   })());
