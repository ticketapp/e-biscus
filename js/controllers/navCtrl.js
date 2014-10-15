app.controller('navCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.location = $location.path();
    $scope.$on("$locationChangeStart",function(event, next, current){
        $scope.location = $location.path();
    });
  }]);