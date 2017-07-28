export default class {
    constructor($http, $routeParams) {
        let self = this;

        $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
            self.phone = response.data;
            self.setImage(self.phone.images[0]);

        });

        //this.phoneId = $routeParams.phoneId;
    }

    setImage(imageUrl) {
        this.mainImageUrl = imageUrl;
        console.log(this.mainImageUrl);
    }


}