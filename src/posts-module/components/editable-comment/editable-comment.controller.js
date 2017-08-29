export default class {
    constructor(commentService, $filter, userService) {
        this.$filter = $filter;
        this.commentService = commentService;
        this.userService = userService;

        this.formModel = {};
        this.isEdit = false;
    }

    $onInit() {
        this.comment = this.comment;
        this.formModel.text = this.comment.text;
    }

    cancelForm() {
        this.onCancel();
    }

    editComment() {
        this.comment.text = this.formModel.text;
        this.onEdit({ comment: this.comment });
    }

}