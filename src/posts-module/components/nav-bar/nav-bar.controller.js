export default class {
    constructor(userService, $state, $rootScope) {
        this.userService = userService;
        this.$state = $state;

        this.currentNavItem = 'posts';
    }
    $onInit() {
        // console.log(this.$state.current);
        this.currentNavItem = 'posts';
    }

    logout() {
        this.userService.logoutUser().then(response => {
            // console.log(response.data);
            this.userService.currentUser = response.data;
            this.userService.isAuth = false;
            this.$state.go('posts');
        });
    }

}