export default class Controller {
    constructor(userService, $state, $mdToast) {
        this.userService = userService;
        this.$mdToast = $mdToast;
        this.$state = $state;
        this.formModel = {};

    }

    loginUser() {
        this.userService.loginUser(this.formModel).then(response => {
            this.formModel = {};
            this.signinForm.$setPristine();
            this.signinForm.$setUntouched();
            if (response.data != false) {
                this.userService.setUser(response.data);
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

}