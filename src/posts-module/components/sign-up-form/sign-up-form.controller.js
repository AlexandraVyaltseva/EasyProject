export default class Controller {
    constructor(userService, $state) {
        this.userService = userService;
        this.$state = $state;
        this.formModel = {};
    }

    registerUser() {
        console.log(this.formModel);
        this.userService.registerUser(this.formModel).then(response => {
            console.log(response.data);
            this.formModel = {};
            this.$state.go('posts');
        })
    }


}