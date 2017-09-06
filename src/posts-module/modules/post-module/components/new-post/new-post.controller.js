export default class {
    constructor($http, postService) {
        this.postService = postService;
        this.$http = $http;
        this.formModel = {};
    }

    addPost() {
        this.postService.addPost(this.picFile, this.formModel).then(res => {
            this.formModel = {};
            this.onAdd({ post: res.data });
        }, (res) => {});
    }
}