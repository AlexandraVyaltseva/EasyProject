export default class Service {
    constructor($http, httpService) {
        // this.urlBase = 'http://localhost:3000/';
        this.httpService = httpService;
    }

    getComments(postId) {
        return this.httpService.request('GET', 'getCommentsByPhotoId/' + postId, {});
    }

    addCommentToBD(comment) {
        return this.httpService.request('POST', 'addComment', comment);
    }

    deleteCommentById(comment) {
        return this.httpService.request('POST', 'deleteCommentById', comment);
    }

    changeComment(comment) {
        return this.httpService.request('POST', 'changeComment', comment);
    }
}