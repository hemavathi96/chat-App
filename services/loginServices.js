
app.service('loginServices', function ($http, $location) {
    try {
        let self = this;
        self.login = function (data, $scope) {
            console.log('in service ', data);
            $http({
                method: 'POST',
                url: 'http://localhost:3000/login',
                data: data
            }).then(function successCallBack(response) {
                console.log("Login is successfull");
                var userid = response.data.message[0]._id;
                console.log(userid);

                var name = response.data.message[0].username;
                var token = response.data.token;
                console.log(token);

                localStorage.setItem("userid", userid);
                localStorage.setItem("name", name);
                localStorage.setItem("token", token);

                $location.path('dashBoard');
                console.log(response);
                $scope.loginMessage = "Login successfull";

            },
                function errorCallBack(error) {
                    console.log("Login Failed");
                    console.log(error);
                    $scope.loginMessage = "Login Failed";
                }
            )
        }
    } catch (err) {
        console.log(err.message);

    }
})



