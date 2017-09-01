export default class Controller {
    constructor(userService, $state, $mdToast) {
        this.userService = userService;
        this.$mdToast = $mdToast;
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
                this.showCustomToast();
            }
        });
    }

    showCustomToast() {
        this.$mdToast.show({
            hideDelay: 2000,
            position: 'top right',
            template: `<md-toast>
          <span class="md-toast-text" flex>Неверный логин или пароль!</span>    
        </md-toast>`
        });
    }

    getCurrentUser() {
        console.log(this.userService.isAuth);
    }

}