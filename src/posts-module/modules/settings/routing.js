export default class {
    constructor($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('posts', {
                url: "/posts",
                template: '<posts-list></posts-list>',
                data: { authenticate: false }
            })
            .state('myposts', {
                url: "/myposts",
                template: '<myposts-list></myposts-list>',
                data: { authenticate: true }
            })
            .state('signin', {
                url: "/signin",
                template: '<signin-form></signin-form>',
                data: { authenticate: false }
            })
            .state('signup', {
                url: "/signup",
                template: '<signup-form></signup-form>',
                data: { authenticate: false }
            })
            .state('change-user-info', {
                url: "/change-user-info",
                template: '<change-user></change-user>',
                data: { authenticate: false }
            });

        $urlRouterProvider.otherwise('/posts');
    }
}