// export default class Service {
//     constructor($resource) {
//         return $resource('data/:postId.json', {}, {
//             query: {
//                 method: 'GET',
//                 params: { postId: 'posts' },
//                 isArray: true
//             }
//         });
//     }
// }

export default class Service {
    constructor($http, $q) {
        this.urlBase = 'data/';
        this.jsonFormat = '.json';
        this.$http = $http;
        this.$q = $q
    }

    getPosts() {
        return this.$http.get(this.urlBase + 'posts' + this.jsonFormat);
    }

    getPost(postId) {
        return this.$http.get(this.urlBase + 'posts' + this.jsonFormat);
    }

    addPost() {

    }

    deletePost(postId) {

    }
}