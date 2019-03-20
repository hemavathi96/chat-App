/************************************************************
 * @description
 * @file        :   forgetPasswordController.js
 * @overview    :   To call the resetPassword templates as on the request .
 * @author      :   hemavathi B.V <hemavathibv16@gmail.com>
 * @version     :   1.0
 * @since       :   05 march 2019
 * 
 * **********************************************************/
app.controller('forgotPasswordctrl', function ($scope, forgotPasswordServices) {
    console.log('in control');

    $scope.forgotPassword = function () {
        let data = {
            'email': $scope.email
        }
        console.log($scope.email)
        forgotPasswordServices.forgotPassword(data, $scope)

    }
})