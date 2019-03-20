

/*************************************************************************************
 * @description
 * @file        :   chatService.js
 * @overview    :   To call the templates as on request.
 * @author      :   hemavathi B.V <hemavathibv16@gmail.com>
 * @version     :   1.0
 * @since       :   06 march-2019
 * ***********************************************************************************/
 app.service('chatServices', function ($http) {

    this.getAllUsers = function ($scope, userToken) {
        try {
            $http({
                method: 'GET',//assigning value to http proprties 
                url: 'http://localhost:3000/getAllUser',
                headers: {
                    'token': userToken,
                }
            }).then(function successCallback(response) {
                    //call back function of http sevice
                   console.log("========",response);
                    
                    $scope.allUser = response.data.result;

                    console.log(response.data.result);

                },
                function errorCallback(response) {
                    console.log("register Unsuccessfull ");
                    console.log(response);
                }
            );
        }catch (err) {
            console.log("error found here in getting users")
        }
    }
    this.getUserMsg = function ($scope) {
        try {
            // this.getUserMsg = function ($scope) {
            let arr = [];
            let userToken = localStorage.getItem('token');
            $http({
                method: 'GET',//assigning value to http proprties 
                url: 'http://localhost:3000/auth/getUserMsg',//assigning value to http proprties 
                headers: {
                    'token': userToken,
                }
            }).then(
                function successCallback(response) {
                  //  console.log(response.data.result.length);
           console.log("-------------------------------------",localStorage.getItem('ruserId'));

                    for (let i = 0; i < response.data.result.length; i++) {  //(response.data.message).length *change was done
                        a = response.data.result[i];

                        if (((localStorage.getItem('userid') == a.senderUserId) && 
                        (localStorage.getItem('ruserId') == a.recieverUserId)) || 
                        ((localStorage.getItem('userid') == a.recieverUserId
                         && localStorage.getItem('ruserId') == a.senderUserId))) {
                         console.log("local user is ", localStorage.getItem('userid'), "a user is ", a.senderUserId, " local rcvrid is ", localStorage.getItem('ruserId'), "  reciver is ", a.recieverUserId);
                            arr.push(a);//pushing all message to array
                        }

                    }
                    $scope.allUserArr = arr;
                    console.log("Users msg successfull ", arr);

                },
                function errorCallback(response) {
                    console.log("Unsuccessfull ");
                    console.log(response);

                }
            )
        }

        catch (err) {
            console.log("founr error in getting message")

        }
    }
})


