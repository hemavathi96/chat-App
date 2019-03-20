/************************************************************
 * @description
 * @file        :  forgotPasswordServices.js
 * @overview    :   To call the registration templates as on the request .
 * @author      :   hemavathi B.V <hemavathibv16@gmail.com>
 * @version     :   1.0
 * @since       :   06 march 2019
 * 
 * **********************************************************/
app.service('forgotPasswordServices', function ($http, $location) {
    try {

        this.forgotPassword = function (data, $scope) {
            console.log('in service ', data);
            $http({
                method: 'POST',
                url: 'http://localhost:3000/ForgotPassword',
                data: data
            }).then(function successCallBack(response) {
                console.log("forgotPassword is successfull");
                var userid = response.data.message[0]._id;
                var name = response.data.message[0].username;
                var token = response.data.token;
                localStorage.setItem("userid", userid);
                localStorage.setItem("name", name);
                localStorage.setItem("token", token);
                $location.path('dashBoard');
                // $location.path('dashBoard');
                console.log(response);
                $scope.loginMessage = "login successfull";
            },
                function errorCallBack(error) {
                    console.log("forgotPassword Failed");
                    console.log(error);
                    $scope.loginMessage = "EmailId incorrect";
                }
            )
        }
    } catch (err) {
        console.log(err.message);

    }
})



