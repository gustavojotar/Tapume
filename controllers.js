angular.module('ionic.example', ['ionic'])

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})




.controller('LoginCtrl', function($scope, LoginService, $state) {
    $scope.data = {};

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

.controller('ExchangeCtrl', function($scope, ExchangeService, $state) {
    $scope.data = {};

    $scope.login = function() {
        ExchangeService.exchange($scope.data.description).success(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Your deal is in its way!',
                template: 'You are close to get a great Deal!'
            });

        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'You have an empty description!',
                template: 'Please check your credentials!'
            });
        });
    }
})




/*
.controller('ListController', ['$scope', '$http', '$state',
    function($scope, $http, $state, $cordovaGeolocation, LocationService) {
    $http.get('js/data.json').success(function(data) {
      $scope.products = data.products;
      $scope.whichproduct=$state.params.pId;
      $scope.whichproduct.lat = $state.params.pId.latitude;
      $scope.whichproduct.longi = $state.params.pId.longitude;
      $scope.data = {showDelete: false, showReorder: false };

   var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
      var lat1  = position.coords.latitude
      var longi2 = position.coords.longitude
    }, function(err) {
      // error
    });


      var dist = LocationService.distance(lat,longi, lat1, longi1)

      $state.params.pId.distance = dist;

      $scope.onItemDelete = function(item) {
        $scope.products.splice($scope.products.indexOf(item), 1);
      }

      $scope.doRefresh =function() {
      $http.get('js/data.json').success(function(data) {
          $scope.products = data;
          $scope.$broadcast('scroll.refreshComplete');
        });
      }

      $scope.toggleStar = function(item) {
        item.star = !item.star;
      }

      $scope.moveItem = function(item, fromIndex, toIndex) {
        $scope.products.splice(fromIndex, 1);
        $scope.products.splice(toIndex, 0, item);
      };
    });

}]); */

.controller('ProductCtrl', function($scope, $cordovaGeolocation, Products, $q) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

   var posOptions = {timeout: 10000, enableHighAccuracy: false};

  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat1  = position.coords.latitude
      var long1 = position.coords.longitude
    }, function(err) {
      // error
    });

    $scope.dist = function() {
        Products.distan(function(lat1, long1) {
    });
    }



  $scope.products = Products.all(lat1, long1);
  $scope.remove = function(product) {
    Products.remove(Product);
  };
});

