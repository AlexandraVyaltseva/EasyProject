export default class Controller {
    constructor(commentService) {
        this.commentService = commentService;
    }
    $onInit() {
        this.comments = this.comments;
        this.id = this.id;
    }

    deleteComment(comment) {
        console.log(comment.id);
        this.commentService.deleteCommentById(comment).then(() => {
            let index = this.comments.indexOf(comment);
            if (index >= 0) {
                this.comments.splice(index, 1);
            }
        });
    }

}