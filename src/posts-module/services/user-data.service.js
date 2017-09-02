export default class userService {
    constructor($http, httpService) {
        this.urlBase = 'http://localhost:3000/';
        this.httpService = httpService;
        this.isAuth = null;
        this.getCurrentUser()
            .then(res => {
                this.currentUser = res.data;
                this.isAuth = (res.data.id != 0);
            })
    }

    setUser(user) {
        this.isAuth = true;
        this.currentUser = user;
    }

    registerUser(user) {
        return this.httpService.request('POST', 'register', user);
    }

    loginUser(user) {
        return this.httpService.request('POST', 'login', user);
    }

    logoutUser() {
        return this.httpService.request('POST', 'logout', {});
    }

    getCurrentUser() {
        return this.httpService.request('GET', 'getCurrentUser', {});
    }
}