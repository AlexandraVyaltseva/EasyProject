export default class {
    constructor(userService, commentService) {
        this.userService = userService;
        this.commentService = commentService;
        this.isEdit = false;
    }
    $onInit() {
        this.comment = this.comment;
    }
    delete() {
        this.onDelete({ comment: this.comment });
    }

    changeComment(comment) {
        this.commentService.changeComment(comment).then(() => {
            // console.log("Edit comment!");
            this.isEdit = false;
        });
    }

    cancelEdit() {
        this.isEdit = false;
    }

    editMode() {
        this.isEdit = true;
    }

}