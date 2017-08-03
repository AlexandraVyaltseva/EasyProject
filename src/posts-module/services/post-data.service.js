export default class Service {
    constructor($resource) {
        return $resource('data/:postId.json', {}, {
            query: {
                method: 'GET',
                params: { postId: 'posts' },
                isArray: true
            }
        });
    }
}