/************************************************************
 * Purpose      :   To validate and control the functionality.
 * @description
 * @file        :   registerController.js
 * @overview    :   To validate and and passing the control to the service.
 * @author      :    hemavathi B.V <hemavathibv16@gmail.com>
 * @version     :   1.0
 * @since       :   05-03-2019
 * 
 * **********************************************************/
app.controller('registerCtrl', function ($scope, registerServices) {
    $scope.register = function () {
        console.log("abcde");
        if ($scope.username !== undefined) {
            let data = {
                'username': $scope.username,
                'email': $scope.email,
                'password': $scope.password,
                'confirme password': $scope.confirmepassword
            }
            if ($scope.password != $scope.confirmepassword) {
                $scope.message = 'password and confirm-password does not match';
            } else {
                console.log('data in controller', data);
                registerServices.register(data, $scope);
            }
        } else {
            return $scope.username = "invalid name";
        }
    }
})

