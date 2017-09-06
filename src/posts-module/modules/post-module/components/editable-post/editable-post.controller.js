export default class {
    constructor(commentService) {
        this.commentService = commentService;
        this.formModel = {};
    }

    cancelForm() {
        this.onCancel();
    }

    editPost() {
        this.onEdit({ post: this.formModel });
    }

    $onInit() {
        this.formModel = Object.assign({}, this.post);
        //this.formModel = this.post;
    }

}