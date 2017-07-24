import angular from 'angular';
import calculatorCtrl from './calculator.controller';

angular.
    module('app', [])
    .component('calculator', {
        template: `<div>
      <input type="number" ng-model="$ctrl.first" />
      <input type="number" ng-model="$ctrl.second" />
      <button ng-click="$ctrl.updateValue()"> Sum </button>
      <br>
      {{$ctrl.calculation}}
    </div>`,

    controller: calculatorCtrl,

    });
    
