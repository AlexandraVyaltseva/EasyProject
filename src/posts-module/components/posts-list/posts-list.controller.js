export default class Controller {
    constructor(postService) {
        postService.getPosts().then(response => {
            console.log(response.data);
            this.posts = response.data;
        });
        this.orderProp = '';
    }

    deletePost(post) {
        let index = this.posts.indexOf(post);
        if (index >= 0) {
            this.posts.splice(index, 1);
        }
    }
}