System.register('ng-cordova/backgroundGeolocation', [], function (_export) {
  // install   :     cordova plugin add https://github.com/christocracy/cordova-plugin-background-geolocation.git
  // link      :     https://github.com/christocracy/cordova-plugin-background-geolocation

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.backgroundGeolocation', []).factory('$cordovaBackgroundGeolocation', ['$q', '$window', function ($q, $window) {

        return {

          init: function init() {
            $window.navigator.geolocation.getCurrentPosition(function (location) {
              return location;
            });
          },

          configure: function configure(options) {

            this.init();
            var q = $q.defer();

            $window.plugins.backgroundGeoLocation.configure(function (result) {
              q.notify(result);
              $window.plugins.backgroundGeoLocation.finish();
            }, function (err) {
              q.reject(err);
            }, options);

            this.start();

            return q.promise;
          },

          start: function start() {
            var q = $q.defer();

            $window.plugins.backgroundGeoLocation.start(function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            });

            return q.promise;
          },

          stop: function stop() {
            var q = $q.defer();

            $window.plugins.backgroundGeoLocation.stop(function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            });

            return q.promise;
          }
        };
      }]);
    }
  };
});