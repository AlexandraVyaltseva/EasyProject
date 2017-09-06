export default class {
    constructor(commentService, $filter, userService) {
        this.$filter = $filter;
        this.commentService = commentService;
        this.userService = userService;

        this.formModel = {};
        this.isEdit = false;
    }

    $onInit() {
        this.formModel = Object.assign({}, this.comment);
    }

    cancelForm() {
        this.onCancel();
    }

    editComment() {
        this.onEdit({ comment: this.formModel });
    }

}