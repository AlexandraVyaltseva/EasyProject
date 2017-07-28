export default class {
    constructor($http, $routeParams, Phone) {

        // $http.get('phones/' + $routeParams.phoneId + '.json')
        //     .then(function(response) {
        //         self.phone = response.data;
        //         self.setImage(self.phone.images[0]);
        //     });

        const phone = Phone.get({ phoneId: $routeParams.phoneId })
            .then(response => {
                this.phone = response.data;
                this.setImage(this.phone.images[0]);
            })
            // this.phoneId = $routeParams.phoneId;
    }

    setImage(imageUrl) {
        this.mainImageUrl = imageUrl;
        console.log(this.mainImageUrl);
    }

}