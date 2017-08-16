export default class Controller {
    constructor(postService) {
        postService.getPosts().then(response => {
            //console.log(response.data);
            this.posts = response.data;
        });
        this.orderProp = '-uploadDate';
        this.isShown = false;
    }
    createPost() {
        this.isShown = !this.isShown;
    }


}