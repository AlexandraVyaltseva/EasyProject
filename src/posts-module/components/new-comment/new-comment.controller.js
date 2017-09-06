export default class {
    constructor(commentService, $filter, userService) {
        this.$filter = $filter;
        this.commentService = commentService;
        this.userService = userService;

        this.formModel = {};
    }

    cancelForm() {
        this.formModel = {};
        this.newcommentForm.$setPristine();
        this.newcommentForm.$setUntouched();
    }

    addComment() {
        this.onAdd({ comment: this.formModel });
        this.formModel = {};
        this.newcommentForm.$setPristine();
        this.newcommentForm.$setUntouched();
    }
}