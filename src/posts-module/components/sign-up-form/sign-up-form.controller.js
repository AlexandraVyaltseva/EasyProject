export default class Controller {
    constructor(userService, $state, $mdToast) {
        this.userService = userService;
        this.$mdToast = $mdToast;
        this.$state = $state;
        this.formModel = {};
    }

    registerUser() {
        console.log(this.formModel);
        this.userService.registerUser(this.formModel).then(response => {
            console.log(response.data);
            if (response.data != false) {
                this.formModel = {};
                this.$state.go('posts');
            } else {
                this.formModel = {};
                this.showCustomToast();
            }

        });
    }

    showCustomToast() {
        this.$mdToast.show({
            hideDelay: 2000,
            position: 'top right',
            template: `<md-toast>
          <span class="md-toast-text" flex>Такой логин уже существует, повторите попытку!</span>    
        </md-toast>`
        });
    }



}