export default class {
    constructor($resourse) {
        return $resource('phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: { phoneId: 'phones' },
                isArray: true
            }
        });

    }
}