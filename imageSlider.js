var app=angular.module("app",[]).
controller("ctrl",function($scope){
	$scope.leftButton="images/11.jpg";
	$scope.rightButton="images/12.jpg";
	$scope.bg="images/bg1.jpg";
	$scope.slides=["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg"];
	$scope.i=0;
	$scope.leftArrow=function(){
		if ($scope.i>0) {
			$scope.i--;
		}
		else{
			$scope.leftButton="images/11.jpg";
			$scope.rightButton="images/12.jpg";
		}
	}
	$scope.rightArrow=function(){
		if ($scope.i<5) {
			$scope.i++;
		}
		else{
			$scope.rightButton="images/24.jpg";
			$scope.leftButton="images/22.jpg";
		}
	}
})