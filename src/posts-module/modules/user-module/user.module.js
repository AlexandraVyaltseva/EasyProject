import signinForm from './components/sign-in-form/sign-in-form.component'
import signupForm from './components/sign-up-form/sign-up-form.component'

import userService from './services/user-data.service';

angular.module('userModule', [])
    .component('signinForm', signinForm)
    .component('signupForm', signupForm)
    .service('userService', userService)