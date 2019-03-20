/************************************************************
 * @description
 * @file        :   app.js
 * @overview    :   To call the templates.
 * @author      :   hemavathi B.V <hemavathibv16@gmail.com
 * @version     :   1.0
 * @since       :   06-03-2019
 * *********************************************************/
var app = angular.module('chatApp', ['ui.router', 'btford.socket-io']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginctrl'
        })
    $stateProvider
        .state('register', {
            url: '/Register',
            templateUrl: 'templates/register.html',
            controller: 'registerCtrl'
        })
    $stateProvider
        .state('dashBoard', {
            url: '/dashBoard',
            templateUrl: 'templates/dashBoard.html',
            controller: 'chatController'
        })
    $stateProvider
        .state('forgetPassword', {
            url: '/forgetPassword',
            templateUrl: 'templates/forgetPassword.html',
            controller: 'forgotPasswordctrl'
        })
    $stateProvider
        .state('resetPassword', {
            url: '/resetPassword',
            templateUrl: 'templates/resetPassword.html',
            controller: 'resetPasswordctrl'
        })


    $urlRouterProvider.otherwise('/login');



})
app.service('SocketService', ['socketFactory', function SocketService(socketFactory) {
    return socketFactory({
        ioSocket: io.connect('http://localhost:3000')
        //connecting socket io
    })
}])
