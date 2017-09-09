import './modules/config-module/config.module'
import './modules/comments-module/comments.module'
import './modules/post-module/post.module'
import './modules/user-module/user.module'

import routing from './modules/settings/routing'
import theme from './modules/settings/theme'

import nav from './components/nav-bar/nav-bar.component'

import httpService from './services/http.service'
import nameFilter from './filter/user-name.filter'


angular.module('postsModule', ['configModule', 'commentsModule', 'postModule', 'userModule'])
    .component('navBar', nav)
    .config(routing)
    .config(theme)
    .filter('fullName', function() {
        return function(user) {
            return user.name + ' ' + user.login;
        }
    })
    .service('httpService', httpService)
    .run((amMoment) => {
        amMoment.changeLocale('RU');
    });