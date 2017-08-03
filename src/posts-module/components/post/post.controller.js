export default class {
    constructor(commentService) {
        this.commentService = commentService;
    }
    $onInit() {
        this.title = this.post.title;
        this.id = this.post.id;
        this.imageUrl = this.post.imageUrl;
        this.description = this.post.description;
        this.uploadDate = this.post.uploadDate;
        this.likes = this.post.likes;
    }

    showComments() {
        console.log(this.id);
        this.commentService.getComments(this.id).then(response => {
            console.log(response.data);
            this.comments = response.data;
        });
    }
}