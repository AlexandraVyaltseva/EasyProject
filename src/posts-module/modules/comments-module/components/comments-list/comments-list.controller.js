export default class Controller {
    constructor(commentService, userService, $filter) {
        this.commentService = commentService;
        this.userService = userService;
        this.$filter = $filter;
    }

    deleteComment(comment) {
        this.commentService.deleteCommentById(comment).then(() => {
            let index = this.comments.indexOf(comment);
            if (index >= 0) {
                this.comments.splice(index, 1);
            }
        });
    }

    addComment(comment) {
        comment.postId = this.id;
        comment.date = this.$filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss');

        this.commentService.addCommentToBD(comment).then(response => {
            comment.id = response.data[0];
            comment.user = this.userService.currentUser.name;
            comment.author_id = this.userService.currentUser.id;
            this.comments.push(comment);
        });
    }

}