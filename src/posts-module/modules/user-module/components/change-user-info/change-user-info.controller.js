export default class Controller {
    constructor(userService, $state, $mdToast) {
        this.userService = userService;
        this.$mdToast = $mdToast;
        this.isEdit = false;

        if (userService.currentUser != null) {
            this.formModel = Object.assign({}, userService.currentUser);
        } else {
            userService.getCurrentUser()
                .then(res => {
                    this.formModel = res.data;
                });
        }
    }

    resetUser() {
        this.isEdit = false;
        this.formModel = Object.assign({}, this.userService.currentUser);
    }

    editUser() {
        this.isEdit = true;
    }

    changeUser() {
        this.userService.changeUser(this.formModel).then(response => {

            if (response.data != false) {
                this.isEdit = false;
                this.userService.setUser(response.data);
                this.showCustomToast('Информация сохранена.');
                this.newcommentForm.$setPristine();
                this.newcommentForm.$setUntouched();

            } else {
                this.showCustomToast('Такой логин уже существует!');
            }
        });
    }

    showCustomToast(text) {
        this.$mdToast.show({
            hideDelay: 2000,
            position: 'top right',
            template: `<md-toast>
          <span class="md-toast-text" flex>` + text + `</span>    
        </md-toast>`
        });
    }

}