import template from './new-post.template.html';
import controller from './new-post.controller';

export default {
    template,
    controller,
    bindings: {
        onAdd: '&'
    }
}