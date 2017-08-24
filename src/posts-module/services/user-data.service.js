export default class userService {
    constructor($http, $q) {
        this.urlBase = 'http://localhost:3000/';
        this.$http = $http;
        this.$q = $q;
        this.isAuth = null;
        this.getCurrentUser()
            .then(res => {
                this.currentUser = res.data;
                this.isAuth = (res.data.id != 0);
            })
    }

    registerUser(user) {
        return this.$http.post(this.urlBase + 'register', user, {
            withCredentials: true
        });
    }

    loginUser(user) {
        return this.$http.post(this.urlBase + 'login', user, {
            withCredentials: true
        });
    }

    logoutUser() {
        return this.$http.post(this.urlBase + 'logout', {}, {
            withCredentials: true
        });
    }

    getCurrentUser() {
        return this.$http.get(this.urlBase + 'getCurrentUser', {
            withCredentials: true
        });
    }
}