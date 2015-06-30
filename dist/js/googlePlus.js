System.register('ng-cordova/googlePlus', [], function (_export) {
  // install  :     cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-googleplus.git
  // link     :     https://github.com/EddyVerbruggen/cordova-plugin-googleplus

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.googleplus', []).factory('$cordovaGooglePlus', ['$q', '$window', function ($q, $window) {

        return {
          login: function login(iosKey) {
            var q = $q.defer();

            if (iosKey === undefined) {
              iosKey = {};
            }
            $window.plugins.googleplus.login({ 'iOSApiKey': iosKey }, function (response) {
              q.resolve(response);
            }, function (error) {
              q.reject(error);
            });

            return q.promise;
          },

          silentLogin: function silentLogin(iosKey) {
            var q = $q.defer();

            if (iosKey === undefined) {
              iosKey = {};
            }
            $window.plugins.googleplus.trySilentLogin({ 'iOSApiKey': iosKey }, function (response) {
              q.resolve(response);
            }, function (error) {
              q.reject(error);
            });

            return q.promise;
          },

          logout: function logout() {
            var q = $q.defer();
            $window.plugins.googleplus.logout(function (response) {
              q.resolve(response);
            });
          },

          disconnect: function disconnect() {
            var q = $q.defer();
            $window.plugins.googleplus.disconnect(function (response) {
              q.resolve(response);
            });
          }
        };
      }]);
    }
  };
});