import template from './editable-post.template.html';
import controller from './editable-post.controller';

export default {
    template,
    controller,
    bindings: {
        post: '=',
        onEdit: '&',
        onCancel: '&'
    }
}