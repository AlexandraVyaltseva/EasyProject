export default class {
    constructor() {
        this.text = "";
        this.isShown = false;
        this.user = "Пользователь";
    }

    createComment() {
        this.isShown = true;
    }

    cancelForm() {
        this.text = "";
        this.isShown = false;
    }



    // $onInit() {
    //     this.title = this.post.title;
    //     this.id = this.post.id;
    //     this.imageUrl = this.post.imageUrl;
    //     this.description = this.post.description;
    //     this.uploadDate = this.post.uploadDate;
    //     this.likes = this.post.likes;
    //     this.commentsCnt = this.post.commentsCnt;
    // }
}