export default class Controller {
    constructor(postService) {
        postService.getUserPosts().then(response => {
            console.log(response.data);
            this.posts = response.data;
        });
        this.orderProp = '-uploadDate';
        this.isShown = false;
        this.buttonText = "Добавить пост";
    }
    createPost() {
        this.isShown = !this.isShown;
        this.isShown ? this.buttonText = "Отмена" : this.buttonText = "Добавить пост";
    }


}