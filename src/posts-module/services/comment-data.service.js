export default class Service {
    constructor($http, $q) {
        this.urlBase = 'data/';
        this.jsonFormat = '.json';
        this.$http = $http;
        this.$q = $q;
    }

    getAllComments() {
        return this.$http.get(this.urlBase + 'comments1' + this.jsonFormat);
    }

    getComments(postId) {
        return this.$http.get(this.urlBase + 'comments' + postId + this.jsonFormat);
    }

    addCommentToBD(comment) {
        // return this.$http.post("", comment);
        console.log(comment);

    }
}