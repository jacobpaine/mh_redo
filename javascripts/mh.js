var app = angular.module("MusicApp", []);

app.controller("TodoCtrl", 
	["$scope", "$http", "$q", function($scope, $http, $q) {

	// For use of Q in Angular
	var getSongs = $q(function(resolve, reject){
  	$http.get('./data/songs.json')
  		.success(
       function(objectFromJSONFile){
    	 	resolve(objectFromJSONFile.songs);
    }, function (error) {
      		reject(error);
    	}
  	  );
	});

  var getSongs2 = $q(function(resolve, reject){
    $http.get('./data/songs2.json')
      .success(
       function(objectFromJSONFile){
        resolve(objectFromJSONFile.songs2);
    }, function (error) {
          reject(error);
      }
      );
  });

  // var all = $q.all([getSongs, getSongs2]);
  //   all.then(success);
  //   function success(songs){
  //                 // $scope.list = [songs];
  //                 // $scope.list2 = [songs];
  //                 var aoa = songs;
  //                 $scope.master = songs;
  //                 console.log("mastersongs", $scope.master);

  //   }

	getSongs.then(function success(songs){
      console.log("songs", songs);
            $scope.master = songs;
  	}, function (error) {
    	console.log("Failed");
  	});

  getSongs2.then(function success(songs2){
      console.log("songs2", songs2);
            $scope.master = $scope.master.concat(songs2);
    }, function (error) {
      console.log("Failed");
    });

}]);

