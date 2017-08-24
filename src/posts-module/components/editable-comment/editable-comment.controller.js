export default class {
    constructor(commentService, $filter, userService) {
        this.$filter = $filter;
        this.commentService = commentService;
        this.userService = userService;

        this.formModel = {};
        this.isShown = false;
    }

    createComment() {
        this.isShown = true;
    }

    cancelForm() {
        this.onCancel();
    }

    editComment() {
        this.comment.text = this.formModel.text;
        this.onEdit({ comment: this.comment });
    }

    $onInit() {
        this.comment = this.comment;
        this.formModel.text = this.comment.text;


    }
}