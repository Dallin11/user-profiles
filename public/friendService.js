angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    
    this.login = function( user ) {
      $http.post("/api/login", user )
    };

    this.getFriends = function() {
    	$http.get("/api/profiles")
    };
  
});
