export default class {
    constructor(commentService, postService, userService, $mdDialog) {
        this.commentService = commentService;
        this.postService = postService;
        this.userService = userService;
        this.$mdDialog = $mdDialog;

        this.buttonText = 'Показать комментарии';
        this.isShown = false;
        this.isEdit = false;
    }

    $onInit() {
        this.post = this.post;
        this.id = this.post.id;
    }

    showConfirm(ev) {
        let confirm = this.$mdDialog.confirm()
            .title('Вы действительно хотите удалить этот пост?')
            .ariaLabel('Lucky day')
            .targetEvent(event)
            .ok('Да')
            .cancel('Отмена');

        this.$mdDialog.show(confirm).then(() => {
            // this.status = 'Вы решили удалить пост.';
            // console.log(this.status);

            this.postService.deletePost(this.post.id).then(() => {
                this.onDelete(this.post);
            })
        }, () => {
            // this.status = 'Вы решили сохранить пост.';
            // console.log(this.status);
        });
    }

    cancelEdit() {
        this.isEdit = false;
    }

    editMode() {
        this.isEdit = true;
    }

    changePost(post) {
        this.postService.changePost(post).then(() => {
            //console.log("Edit post!");
            this.isEdit = false;
        });
    }

    showComments() {
        if (this.isShown === false && this.comments == null) {
            this.commentService.getComments(this.id).then(response => {
                this.comments = response.data;
                this.buttonText = 'Скрыть комментарии';
                this.isShown = true;

            });
        } else {
            if (this.isShown === false) {
                this.buttonText = 'Скрыть комментарии';
                this.isShown = true;
            } else {
                this.buttonText = 'Показать комментарии';
                this.isShown = false;
            }
        }
    }
}