export default class Controller {
    constructor(postService) {
        this.posts = postService.query();

        this.orderProp = '';
    }
}

// Controller.$inject = ['PhonePromiceServise'];