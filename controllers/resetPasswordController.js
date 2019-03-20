/************************************************************
 * @description
 * @file        :   resetPasswordController.js
 * @overview    :   To call the resetPassword templates as on the request .
 * @author      :   hemavathi B.V <hemavathibv16@gmail.com>
 * @version     :   1.0
 * @since       :   05 march 2019
 * 
 * **********************************************************/
app.controller('resetPasswordctrl', function ($scope, resetPasswordServices) {
    console.log('in control');

    $scope.resetPassword = function () {
        let data = {
            'newPassword': $scope.newPassword,
            'confirmePassword': $scope.confirmePassword
        }
        console.log($scope.email)
        resetPasswordServices.resetPassword(data, $scope)

    }
})