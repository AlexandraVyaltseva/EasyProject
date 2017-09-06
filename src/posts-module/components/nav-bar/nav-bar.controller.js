export default class {
    constructor(userService, $state, $rootScope) {
        this.userService = userService;
        this.$state = $state;
    }

    logout() {
        this.userService.logoutUser().then(response => {
            this.userService.currentUser = response.data;
            this.userService.isAuth = false;
            this.$state.go('posts');
        });
    }

}