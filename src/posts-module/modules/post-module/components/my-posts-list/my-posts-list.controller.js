export default class Controller {
    constructor(postService, userService) {
        this.userService = userService;
        postService.getUserPosts().then(response => {
            this.posts = response.data;
        });
        this.orderProp = '-uploadDate';
        this.isShown = false;

    }

    createPost() {
        this.isShown = !this.isShown;
    }

    addPost(post) {
        console.log(post);
        this.posts.push(post);
        this.createPost();
    }

    deletePost(post) {
        let index = this.posts.indexOf(post);
        if (index >= 0) {
            this.posts.splice(index, 1);
        }
    }

}