export default class {
    constructor($mdDialog) {
        this.$mdDialog = $mdDialog;
        this.showAlert = showAlert;
        this.closeAlert = closeAlert;
        this.showGreeting = showCustomGreeting;
    }
}