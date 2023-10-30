app = angular.module("myApp",[])
app.controller("myCtrl",function($scope){
    $scope.homeframe = "";
    $scope.infoframe = "none";
    $scope.classframe = "none";
    $scope.regframe = "none"
    $scope.movieframe = "none";
    $scope.contactframe = "none";
    $scope.image="myimg.jpg";
    $scope.options = ["Home","Student Info","Classmates","Registration","Movies","Contact Us"];
    $scope.outputsite = function(x){
        if(x==0){
            $scope.homeframe = "";
            $scope.infoframe = "none";
            $scope.classframe = "none";
            $scope.regframe = "none"
            $scope.movieframe = "none";
            $scope.contactframe = "none";
            $scope.image="myimg.jpg";
        }
        else if(x==1){
            $scope.homeframe = "none";
            $scope.infoframe = "";
            $scope.classframe = "none";
            $scope.regframe = "none"
            $scope.movieframe = "none";
            $scope.contactframe = "none";
            $scope.image="login.jpg";
        }
        else if(x==2){
            $scope.homeframe = "none";
            $scope.infoframe = "none";
            $scope.classframe = "";
            $scope.regframe = "none"
            $scope.movieframe = "none";
            $scope.contactframe = "none";
            $scope.image="Valorant.jpg";
        }
        else if(x==3){
            $scope.homeframe = "none";
            $scope.infoframe = "none";
            $scope.classframe = "none";
            $scope.regframe = ""
            $scope.movieframe = "none";
            $scope.contactframe = "none";
            $scope.image="reg.jpg";
        }
        else if(x==4){
            $scope.homeframe = "none";
            $scope.infoframe = "none";
            $scope.classframe = "none";
            $scope.regframe = "none"
            $scope.movieframe = "";
            $scope.contactframe = "none";
            $scope.image="movie.jpg";
        }
        else{
            $scope.homeframe = "none";
            $scope.infoframe = "none";
            $scope.classframe = "none";
            $scope.regframe = "none"
            $scope.movieframe = "none";
            $scope.contactframe = "";
            $scope.image="contact.png";
        }
    }
});