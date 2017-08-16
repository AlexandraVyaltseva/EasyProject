export default class {
    constructor(commentService, $filter) {
        this.$filter = $filter;
        this.commentService = commentService;

        this.formModel = {};
        this.isShown = false;
    }

    createComment() {
        this.isShown = true;
    }

    cancelForm() {
        this.text = "";
        this.isShown = false;
    }

    addComment() {
        this.formModel.date = this.$filter('date')(new Date(), 'yyyy-MM-dd HH:mm:ss');
        this.formModel.postID = this.postID;
        this.formModel.user = "User";
        console.log(this.formModel);
        this.commentService.addCommentToBD(this.formModel);
        this.comments.push(this.formModel);
        this.formModel = {};
    }

    $onInit() {
        this.postID = this.id;
        this.comments = this.comments;
        console.log(this.comments);
    }
}