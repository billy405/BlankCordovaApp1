angular.module('Cloud9', ['ngRoute', 'ngMessages'])
  .config(function ($routeProvider) {
      $routeProvider
  .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
  })
  .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
  })
  .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'SignupCtrl'
  })
  .when('/photo/:id', {
      templateUrl: 'views/detail.html',
      controller: 'DetailCtrl'
  })
  .otherwise('/')

  });$authProvider.loginUrl = 'http://localhost:3000/auth/login';
      $authProvider.signupUrl = 'http://localhost:3000/auth/signup';
      $authProvider.oauth2({
          name: 'Cloud9',
          url: 'http://localhost:3000/auth/instagram',
          redirectUri: 'http://localhost:8000',
          clientId: '799d1f8ea0e44ac8b70e7f18fcacedd1',
          requiredUrlParams: ['scope'],
          scope: ['likes'],
          scopeDelimiter: '+',
          authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
          
      });
      var config = require('./config');

      var User = mongoose.model('User', new mongoose.Schema({
          instagramId: { type: String, index: true },
          email: { type: String, unique: true, lowercase: true },
          password: { type: String, select: false },
          username: String,
          fullName: String,
          picture: String,
          accessToken: String
      }));

      mongoose.connect(config.db);
