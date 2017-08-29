export default class Service {
    constructor($http, $q, Upload) {
        this.urlBase = 'http://localhost:3000/';
        this.$http = $http;
        this.$q = $q;
        this.Upload = Upload;
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

    changePost(post) {
        return this.$http.post(this.urlBase + 'changePhoto', post, {
            withCredentials: true
        });
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
        console.log(id);
        return this.$http.post(this.urlBase + 'deletePhotoById', id, {
            withCredentials: true
        });
    }
}