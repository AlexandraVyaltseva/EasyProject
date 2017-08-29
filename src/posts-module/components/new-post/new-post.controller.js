export default class {
    constructor($http, postService) {
        this.postService = postService;
        this.$http = $http;
        this.formModel = {};
    }

    addPost() {

        console.log(this.formModel);


        this.postService.addPost(this.picFile, this.formModel).then(res => {
            console.log(res.data);
            this.formModel = {};
            //this.picFile = '';
            this.onAdd({ post: res.data });
        }, (res) => { console.log(res.status) });
    }
}