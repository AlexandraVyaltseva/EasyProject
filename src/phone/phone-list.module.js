import phonelist from './phone-list/phone-list.component'
import '../../services/phone/phone.module'

angular.module('phoneListModule', ['phoneModule'])
    .component('phoneList', phonelist);