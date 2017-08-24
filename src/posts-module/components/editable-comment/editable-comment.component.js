import template from './editable-comment.template.html';
import controller from './editable-comment.controller';

export default {
    template,
    controller,
    bindings: {
        comment: '=',
        onEdit: '&',
        onCancel: '&'
    }
}