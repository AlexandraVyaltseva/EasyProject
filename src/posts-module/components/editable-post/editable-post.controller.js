export default class {
    constructor(commentService) {
        this.commentService = commentService;
        this.formModel = {};
    }

    cancelForm() {
        this.onCancel();
    }

    editPost() {
        this.post.title = this.formModel.title;
        this.post.description = this.formModel.description;
        this.onEdit({ post: this.post });
    }

    $onInit() {
        this.post = this.post;

        this.formModel.title = this.post.title;
        this.formModel.description = this.post.description;
    }

}