export default class Controller {
    constructor(PhonePromiceServise) {
        PhonePromiceServise.getPhonesList().then(data => {
            console.log(data);
            this.phones = data;
        });
        this.orderProp = 'age';
    }
}

// Controller.$inject = ['PhonePromiceServise'];