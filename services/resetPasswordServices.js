
app.service('resetPasswordServices', function ($http, $location) {
    try {
        let self = this;
        self.resetPassword = function (data, $scope) {
            console.log('in service ', data);
            $http({
                method: 'POST',
                url: 'http://localhost:3000/resetPassword',
                data: data
            }).then(function successCallBack(response) {
                console.log("resetpassword is successfull");
                $location.path('/login');
                console.log(response);
                $scope.resetPasswordMessage = "reset password successfull";

            },
                function errorCallBack(error) {
                    console.log("reset password Failed");
                    console.log(error);
                    $scope.resetPasswordMessage = "reset password Failed";
                }
            )
        }
    } catch (err) {
        console.log(err.message);

    }
})



