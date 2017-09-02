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
        this.formModel.text = "";
        this.isShown = false;
    }

    addComment() {
        this.formModel.date = this.$filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss');
        this.formModel.postId = this.postId;
        // console.log(this.formModel);
        this.commentService.addCommentToBD(this.formModel).then(response => {
            //  console.log(response.data[0]);
            this.formModel.id = response.data[0];
            this.formModel.user = this.userService.currentUser.name;
            this.formModel.author_id = this.userService.currentUser.id;
            this.comments.push(this.formModel);
            this.formModel = {};
        });
    }

    $onInit() {
        this.postId = this.id;
        this.comments = this.comments;
        // console.log(this.comments);
    }
}