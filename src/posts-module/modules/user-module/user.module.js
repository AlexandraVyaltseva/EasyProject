import signinForm from './components/sign-in-form/sign-in-form.component'
import signupForm from './components/sign-up-form/sign-up-form.component'
import changeUser from './components/change-user-info/change-user-info.component'

import userService from './services/user-data.service';

angular.module('userModule', [])
    .component('signinForm', signinForm)
    .component('signupForm', signupForm)
    .component('changeUser', changeUser)
    .service('userService', userService)