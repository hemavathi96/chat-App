/************************************************************
 * Purpose      :   To validate and control the functionality.
 * @description
 * @file        :   loginController.js
 * @overview    :   To validate and and passing the control to the service.
 * @author      :   hemavathi B.V <hemavathibv16@gmail.com>
 * @version     :   1.0
 * @since       :   05-03-2019
 * 
 * **********************************************************/
app.controller('loginctrl', function ($scope, loginServices) {

    $scope.login = function () {
        let data = {
            'email': $scope.email,
            'password': $scope.password
        }
        console.log('data in controller', data);
        return loginServices.login(data, $scope)
    }
})




