import phoneDetail from './phone-detail/phone-detail.component'
import '../../services/phone/phone.module'

angular.module('phoneDetailModule', ['ngRoute', 'phoneModule'])
    .component('phoneDetail', phoneDetail);