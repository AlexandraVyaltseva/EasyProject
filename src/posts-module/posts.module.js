import angular from 'angular'
import 'angular-material'
import 'angular-material/angular-material.min.css'
import 'angular-resource'
import 'angular-ui-router'

import postslist from './components/posts-list/posts-list.component'
import post from './components/post/post.component'
import commentslist from './components/comments-list/comments-list.component'
import comment from './components/comment/comment.component'
import nav from './components/nav-bar/nav-bar.component'

import postService from './services/post-data.service';
import commentService from './services/comment-data.service';


angular.module('postsModule', ['ngMaterial', 'ui.router', 'ngResource'])
    .component('postsList', postslist)
    .component('post', post)
    .component('commentsList', commentslist)
    .component('comment', comment)
    .component('navBar', nav)
    .config(['$stateProvider', '$urlRouterProvider',
        function config($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('posts', {
                    url: "/posts",
                    template: '<posts-list></posts-list>'
                })
                .state('myposts', {
                    url: "/myposts",
                    template: '<p>Вас пока нет, и нет Ваших фото</p>'
                });

            $urlRouterProvider.otherwise('/posts');
        }
    ])
    .factory('postService', postService)
    .service('commentService', commentService);