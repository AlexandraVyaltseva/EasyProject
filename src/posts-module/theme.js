export default class {
    constructor($mdThemingProvider) {

        $mdThemingProvider.theme('altTheme')
            .primaryPalette('purple')
            .accentPalette('green')
            .warnPalette('orange');

        $mdThemingProvider.setDefaultTheme('altTheme');
    }
}