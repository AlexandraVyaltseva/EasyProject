export default class Service {
    constructor($http, $q) {
        // this.urlBase = 'data/';
        // this.jsonFormat = '.json';
        this.urlBase = 'http://localhost:3000/getAllPhotos';
        this.$http = $http;
        this.$q = $q;
    }

    getPosts() {
        //return this.$http.get(this.urlBase + 'posts' + this.jsonFormat);
        return this.$http.get(this.urlBase);
    }

    // getPost(postId) {
    //     return this.$http.get(this.urlBase + 'posts' + this.jsonFormat);
    // }

    addPost() {

    }

    deletePost(postId) {

    }
}