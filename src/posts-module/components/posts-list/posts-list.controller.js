export default class Controller {
    constructor(postService) {
        this.posts = postService.query();

        this.orderProp = 'title';
    }
}

// Controller.$inject = ['PhonePromiceServise'];