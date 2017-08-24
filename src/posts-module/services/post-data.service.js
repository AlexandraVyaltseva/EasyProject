export default class Service {
    constructor($http, $q) {
        this.urlBase = 'http://localhost:3000/';
        this.$http = $http;
        this.$q = $q;
    }

    getPosts() {
        return this.$http.get(this.urlBase + 'getAllPhotos', {
            withCredentials: true
        });
    }

    getUserPosts() {
        return this.$http.get(this.urlBase + 'getUserPhotos', {
            withCredentials: true
        });
    }

    // getPost(postId) {
    //     return this.$http.get(this.urlBase + 'posts' + this.jsonFormat);
    // }

    addPost() {}

    deletePost(postId) {}
}