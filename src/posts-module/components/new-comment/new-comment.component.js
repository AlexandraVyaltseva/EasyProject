import template from './new-comment.template.html';
import controller from './new-comment.controller';

export default {
    template,
    controller,
    bindings: {
        id: '=',
        comments: '='
    }
}