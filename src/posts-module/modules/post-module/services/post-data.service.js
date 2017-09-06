export default class Service {
    constructor($http, Upload, httpService) {
        this.urlBase = 'http://localhost:3000/';
        this.httpService = httpService;
        this.Upload = Upload;
    }

    getPosts() {
        return this.httpService.request('GET', 'getAllPhotos', {});
    }

    getUserPosts() {
        return this.httpService.request('GET', 'getUserPhotos', {});
    }

    changePost(post) {
        return this.httpService.request('POST', 'changePhoto', post);
    }


    addPost(file, data) {
        return this.Upload.upload({
            url: 'http://localhost:3000/addPhoto',
            data: data,
            withCredentials: true,
            file: file
        });
    }

    deletePost(postId) {
        console.log(postId);
        let id = {
            'photoId': postId
        }

        return this.httpService.request('POST', 'deletePhotoById', id);
    }
}