export default class Controller {
    constructor(userService, $state) {
        this.userService = userService;
        this.$state = $state;
        this.formModel = {};
    }

    loginUser() {
        this.userService.loginUser(this.formModel).then(response => {
            console.log(response.data);
            this.formModel = {};
            if (response.data != false) {
                this.userService.currentUser = response.data;
                console.log(this.userService.currentUser);
                this.userService.isAuth = true;
                this.$state.go('myposts');
            } else {
                this.message = response.data;
            }
        });
    }

    getCurrentUser() {
        console.log(this.userService.isAuth);
    }

}