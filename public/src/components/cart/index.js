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
         return ['appInfo', '$scope', '$http', '$routeParams', '$sce', '$interval', function (appInfo, $scope, $http, $routeParams, $sce, $interval) {
            $scope.redirectTime = 5;

            var ctrl = this;
            let successMsg = `<b>Thank you for reserving</b><br/>Your reservation has been saved. We will call for verfication.<br/>You will be redirected in ${$scope.redirectTime} seconds.`

            // Setup info
            ctrl.info = '';
            ctrl.success = '';
            ctrl.error = '';
            ctrl.loading = false;
            ctrl.redirectTimer = null;

            // Clean up
            ctrl.$onDestroy = function () {
               $interval.cancel(redirectTimer);
            }

            // Initialization on-start
            ctrl.$onInit = function () {
               loadJSONData($routeParams.id);
            }

            // Make reservations
            $scope.reserve = async function () {
               if (ctrl.loading) return;

               ctrl.loading = true;

               if (!ctrl.info) {
                  ctrl.error = "Something isn't quite right. Try refreshing your page.";
                  ctrl.loading = false;
                  return
               }

               if (ctrl.info.stock.quantity === 0) {
                  ctrl.error = "Sorry, but you cant reserve something thats not in stock.";
                  ctrl.loading = false;
                  return
               }

               let location = $('select[name="location"]').find(":selected").val();
               let phone = $('input[name="phone-number"]').val();
               
               $http.post(appInfo.jsonDataURL, {
                  "title": ctrl.info.title,
                  "location": location,
                  "phone": phone
               }).then(results => {
                  console.log(results)
                  ctrl.loading = false;
                  ctrl.error = '';

                  ctrl.success = successMsg;
                  ctrl.redirectTimer = $interval(redirectTimer, 1000);
               }).catch(e => {
                  if (e.data.error) {
                     let alreadyParsedParamError = []
                     ctrl.error = '<b>Please fix the following error:</b><br/>';
                     e.data.message.map((item, indx) => {
                        if (alreadyParsedParamError[item.param] === undefined) {
                           ctrl.error += `&dash; ${item.msg}<br/>`;
                           alreadyParsedParamError[item.param] = true;
                        }
                     })
                  }
                  ctrl.loading = false;
               });
            }

            $scope.sanitizeText = function (text) {
               return $sce.trustAsHtml(text);
            }

            // Esc key callback
            function closeOnEscKey () {
               
            }

            function redirectTimer() {
               $scope.redirectTime -=1;
               ctrl.success = successMsg;
               if ($scope.redirectTime === 0) {
                  $interval.cancel(ctrl.redirectTimer);
                  ctrl.success = "Redirecting..."
               }
            }

            // @todo: For now fetch all just like lists, but in general this is not the case
            function loadJSONData (id) {
               $http.get(appInfo.jsonDataURL).then(results => {
                  ctrl.info = results.data[id];
               });
            }
         }];
      }
   })());
