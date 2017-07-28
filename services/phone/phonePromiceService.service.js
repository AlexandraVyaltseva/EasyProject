export default class Service {
    constructor($q) {
        this.$q = $q;

    }
    getPhonesList() {
        let deffered = $q.defer();
        Phone.query()
            .then(response => {
                    deffered.resolve(response);
                    console.log(response);
                },
                error => {
                    deferred.reject(err);
                    console.log(error);
                }
            );
        return deferred.promise;
    }

    // getPhone() {
    //     let deffered = $q.defer();

    //     Phone.get({ phoneId: $routeParams.phoneId })
    //         .then(phone => {
    //             this.phone = phone;
    //             this.setImage(phone.images[0]);
    //         })

    // }
}

// Service.$inject = ['Phone', '$q'];

// Service.$inject = [];