import angular from 'angular'
import 'angular-material'
import 'angular-material/angular-material.min.css'
import 'angular-resource'
import 'angular-ui-router'
import 'angular-material-icons'
import 'ng-file-upload'
import 'angular-material-icons'

import routing from './routing'

import postsList from './components/posts-list/posts-list.component'
import mypostsList from './components/my-posts-list/my-posts-list.component'
import post from './components/post/post.component'
import commentsList from './components/comments-list/comments-list.component'
import comment from './components/comment/comment.component'
import nav from './components/nav-bar/nav-bar.component'
import signinForm from './components/sign-in-form/sign-in-form.component'
import signupForm from './components/sign-up-form/sign-up-form.component'
import newpostForm from './components/new-post/new-post.component'
import newcommentForm from './components/new-comment/new-comment.component'
import editableComment from './components/editable-comment/editable-comment.component'
import editablePost from './components/editable-post/editable-post.component'

import postService from './services/post-data.service';
import commentService from './services/comment-data.service';
import userService from './services/user-data.service';


angular.module('postsModule', ['ngMaterial', 'ui.router', 'ngResource', 'ngFileUpload', 'ngMdIcons'])
    .component('postsList', postsList)
    .component('mypostsList', mypostsList)
    .component('post', post)
    .component('commentsList', commentsList)
    .component('comment', comment)
    .component('navBar', nav)
    .component('signinForm', signinForm)
    .component('signupForm', signupForm)
    .component('newPost', newpostForm)
    .component('newComment', newcommentForm)
    .component('editableComment', editableComment)
    .component('editablePost', editablePost)
    .config(routing)
    .service('postService', postService)
    .service('commentService', commentService)
    .service('userService', userService);