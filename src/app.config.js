export default function routing($urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('./phone', {
        template: '<phone-list></phone-list>'
    }).
    when('./phone/:phoneId', {
        template: '<phone-detail></phone-detail>'
    }).
    otherwise('./phone');
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}