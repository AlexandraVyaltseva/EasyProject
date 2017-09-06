import newcommentForm from './components/new-comment/new-comment.component'
import editableComment from './components/editable-comment/editable-comment.component'
import commentsList from './components/comments-list/comments-list.component'
import comment from './components/comment/comment.component'

import commentService from './services/comment-data.service';

angular.module('commentsModule', [])
    .component('commentsList', commentsList)
    .component('comment', comment)
    .component('newComment', newcommentForm)
    .component('editableComment', editableComment)
    .service('commentService', commentService);