export default class Service {
    constructor($http) {
        this.urlBase = 'http://localhost:3000/';
        this.$http = $http;
    }

    request(method, url, data) {
        return this.$http({
            method: method,
            url: this.urlBase + url,
            data: data,
            withCredentials: true,
        });
    }
}