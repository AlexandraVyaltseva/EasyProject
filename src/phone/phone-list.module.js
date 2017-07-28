import phonelist from './phone-list/phone-list.component'

angular.module('phoneModule', ['ngResource'])
    .component('phoneList', phonelist);