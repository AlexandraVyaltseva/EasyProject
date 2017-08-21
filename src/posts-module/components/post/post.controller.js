export default class {
    constructor(commentService) {
        this.commentService = commentService;
        this.buttonText = 'Показать комментарии';
        this.isShown = false;
    }

    $onInit() {
        this.user = this.post.user;
        this.title = this.post.title;
        this.id = this.post.id;
        this.imageUrl = this.post.imageUrl;
        this.description = this.post.description;
        this.uploadDate = this.post.uploadDate;
        this.likes = this.post.likes;
        //this.commentsCnt = this.post.commentsCnt;
    }

    showComments() {
        if (this.isShown === false && this.comments == null) {
            this.commentService.getComments(this.id).then(response => {
                this.comments = response.data;
                this.buttonText = 'Скрыть комментарии';
                this.isShown = true;

            });
        } else {
            if (this.isShown === false) {
                this.buttonText = 'Скрыть комментарии';
                this.isShown = true;
            } else {
                this.buttonText = 'Показать комментарии';
                this.isShown = false;
            }
        }
    }
}