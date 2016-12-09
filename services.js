

angular.module('starter.services', [])

.factory('Products', function(){

  var products = [{
      id: 0,
      bio: '8 in. x 8 in. x 16 in. Gray Concrete Block' ,
      shortname: 'concrete',
      name: 'Concrete Block',
      reknown: 'Lisa Dound',
      description: 'Half of a Rust-Oleum 2774 Zinsser Interior EggShell, Perma White: for use on bathrooms, laundry rooms, dorm rooms. Available for deals of sell or exchange',
      distance: 0,
      latitude: 43.083524,
      longitude: -77.633703
  }, {
      id: 1,
      bio: 'White Semi Gloss Interior Paint',
      shortname: 'white-wallPaint',
      name: 'White Wall Paint',
      reknown: 'Lisa Dound',
      description: 'Half of a Rust-Oleum 2774 Zinsser Interior EggShell, Perma White: for use on bathrooms, laundry rooms, dorm rooms. Available for deals of sell or exchange',
      distance : 0,
      latitude : 43.086000,
      longitude: -77.674537
  }, {
      id: 2,
      bio: 'Premiere 8 in. x 8 in. x 4 in. Decora Glass Blocks',
      shortname: 'glassblock',
      name: 'Glass Block',
      reknown: 'Bob Kent',
      description: 'Half of a Rust-Oleum 2774 Zinsser Interior EggShell, Perma White: for use on bathrooms, laundry rooms, dorm rooms. Available for deals of sell or exchange',
      distance : 0,
      latitude : 43.092684,
      longitude: -77.656014
  }];



  /*$cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat1  = position.coords.latitude
      var long1 = position.coords.longitude
    }, function(err) {
      // error
    }); */

return {
distan: function(lat1, long1) {
  for (var i = 0; i < products.length; i++) {
     var R = 3958.8;
     var dLat = toRad((lat1 - products[i].latitude));
     var dLon = toRad((long1 - products[i].longitude));
     var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
     Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
     Math.sin(dLon / 2) *
     Math.sin(dLon / 2);
     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
     products[i].distance = R * c;
     return products[i].distance;
  }
}
}

  return {
    all: function() {
      return products;
    },
    remove: function(product) {
      products.splice(produts.indexOf(chat), 1);
    },
    get: function(productId) {
      for (var i = 0; i < products.length; i++) {
        if (product[i].id === parseInt(productId)) {
          return products[i];
        }
      }



      return null;
    }
  };
})

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})


/*
.factory('LocationService', function($q) {
    var distance;
	return {
        setDistance: function(latitude, longitude) { */
/*
              Geolocation.getCurrentPosition({
                 }).then((position) => {
                let latitude1  = position.coords.latitude
                let longitude1 = position.coords.longitude
                }, (err) => {
                // error
              ); */
    /*
            var R = 3958.8;
            var dLat = toRad((latitude1 - latitude));
            var dLon = toRad((longitude1 - longitude));
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            distance = R * c;
        },
		getProfileData: function() {
			return distance;
		}
    }
}) */

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'Do you have a white ink?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'I have ceramic pieces',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'Are you on for exchanges?',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'It is new, never used',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'I am selling it for 30 dollars',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})



.service('ExchangeService', function($q) {
    return {
        exchange: function(description) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (description == '') {
                deferred.resolve();
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
});
