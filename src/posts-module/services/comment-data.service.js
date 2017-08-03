export default class Service {
    constructor($http, $q) {
        this.urlBase = 'data/';
        this.jsonFormat = '.json';
        this.$http = $http;
        this.$q = $q
    }

    // constructor($resource) {
    //     return $resource('data/:postId.json', {}, {
    //         query: {
    //             method: 'GET',
    //             params: { postId: 'comments' },
    //             isArray: true
    //         }
    //     });
    // }

    getAllComments() {
        return this.$http.get(this.urlBase + 'comments1' + this.jsonFormat);
    }

    getComments(postId) {
        return this.$http.get(this.urlBase + 'comments' + postId + this.jsonFormat);

    }
}