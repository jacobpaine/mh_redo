var app = angular.module("MusicApp", []);

app.controller("SongsControl", 
	["$scope", "$http", "$q", function($scope, $http, $q) {
    $scope.Albums = "";


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

  var all = $q.all(getSongs.promise, getSongs2.promise);
    all.then(success);
    function success(songs){
      console.log("songs", songs);
                  $scope.list = [songs];
                  $scope.list2 = [songs];
                  // $scope.master = [songs];
                  // console.log("songs[]", [songs]);
                  // $scope.master = $scope.list.concat($scope.list2)
    }

	getSongs.then(function success(songs){
      console.log("songs", songs);
            $scope.list = songs;
  	}, function (error) {
    	console.log("Failed");
  	});

  getSongs2.then(function success(songs){
      console.log("songs2", songs);
            $scope.list2 = songs;
    }, function (error) {
      console.log("Failed");
    });

}]);

