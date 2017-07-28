import angular from 'angular';

// import routing from './app.config';

import phoneService from './phone.service';
import phonePromiceServise from './phonePromiceService.service'

import 'angular-material';
import 'angular-material/angular-material.min.css'

import 'angular-route';
import 'angular-resource';

import '../../src/calculator/calculator.module';
import '../../src/phone/phone-list.module'
import '../../src/phone/phone-detail.module'

angular.module('phoneModule', ['ngMaterial', 'ngRoute', 'ngResource', 'calculatorModule', 'phoneDetailModule', 'phoneListModule'])
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
            when('/phones', {
                template: '<phone-list></phone-list>'
            }).
            when('/phones/:phoneId', {
                template: '<phone-detail></phone-detail>'
            }).
            otherwise('/phones');
        }
    ])
    .factory('Phone', phoneService)
    .service('PhonePromiceServise', phonePromiceServise);