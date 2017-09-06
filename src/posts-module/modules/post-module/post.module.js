import postsList from './components/posts-list/posts-list.component'
import mypostsList from './components/my-posts-list/my-posts-list.component'
import post from './components/post/post.component'
import newpostForm from './components/new-post/new-post.component'
import editablePost from './components/editable-post/editable-post.component'

import postService from './services/post-data.service';

angular.module('postModule', [])
    .component('postsList', postsList)
    .component('mypostsList', mypostsList)
    .component('post', post)
    .component('newPost', newpostForm)
    .component('editablePost', editablePost)
    .service('postService', postService)