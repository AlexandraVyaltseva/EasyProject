export default class Service {
    constructor($http, $q) {
        // this.urlBase = 'data/';
        // this.jsonFormat = '.json';
        this.urlBase = 'http://localhost:3000/';
        this.$http = $http;
        this.$q = $q;
    }

    getComments(postId) {
        return this.$http.get(this.urlBase + 'getCommentsByPhotoId/' + postId);
    }

    addCommentToBD(comment) {
        return this.$http.post(this.urlBase + 'addComment', comment);
        //console.log(comment);
    }
}