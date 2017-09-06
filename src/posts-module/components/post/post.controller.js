export default class {
    constructor(commentService, postService, userService, $mdDialog) {
        this.commentService = commentService;
        this.postService = postService;
        this.userService = userService;
        this.$mdDialog = $mdDialog;

        this.isShown = false;
        this.isEdit = false;
    }

    showConfirm(ev) {
        let confirm = this.$mdDialog.confirm()
            .title('Вы действительно хотите удалить этот пост?')
            .ariaLabel('Lucky day')
            .targetEvent(event)
            .ok('Да')
            .cancel('Отмена');

        this.$mdDialog.show(confirm).then(() => {
            this.postService.deletePost(this.post.id).then(() => {
                this.onDelete(this.post);
            })
        }, () => {});
    }

    cancelEdit() {
        this.isEdit = false;
    }

    editMode() {
        this.isEdit = true;
    }

    changePost(post) {
        this.postService.changePost(post).then(() => {
            this.post.title = post.title;
            this.post.description = post.description;
            this.isEdit = false;
        });
    }

    showComments() {
        if (this.isShown === false && this.comments == null) {
            this.isShown = true;
            this.commentService.getComments(this.post.id).then(response => {
                console.log(response.data);
                this.comments = response.data;
                this.isShown = true;

            });
        } else {
            if (this.isShown === false) {
                this.isShown = true;
            } else {
                this.isShown = false;
            }
        }
    }
}