(function(){window.ApplicationModules=[],window.RegisterModule=[]}).call(this),function(){ApplicationModules.push(function(e){return e.module("core").config(["$stateProvider",function(e){return e.state("home",{url:"/",templateUrl:"/assets/modules/core/views/home.client.view-1f2cb2d2f12b4772369974ca9ae34191.html"}),e.state("about",{url:"/about",templateUrl:"/assets/modules/core/views/about.client.view-ca2abadb52d8082fddff5bac22a2c638.html"})}])})}.call(this),function(){ApplicationModules.push(function(e){return e.module("core").controller("CoreController",["$scope","$location",function(e){return e.pageTitle="BusinessCard7"}])})}.call(this),function(){RegisterModule.push("core")}.call(this),function(){ApplicationModules.push(function(e){return e.module("designer").config(["$stateProvider",function(e){return e.state("test",{url:"/test",templateUrl:"/assets/modules/designer/views/test.client.view-f93cf9bba8cfbbd69ebbfc2e5f7c0257.html"})}])})}.call(this),function(){ApplicationModules.push(function(e){return e.module("designer").controller("TestController",["$scope",function(e){return e.update(function(e){return alert(e)})}])})}.call(this),function(){RegisterModule.push("designer")}.call(this),function(){ApplicationModules.push(function(e){return e.module("users").config(["$stateProvider",function(e){return e.state("login",{url:"/user/login",templateUrl:"/assets/modules/users/views/login.client.view-33c18e1e2a5d2706ac4986862a1b68fe.html"})}])})}.call(this),function(){ApplicationModules.push(function(e){return e.module("users").controller("LoginController",["$scope","$location","Authentication",function(e){return e.credentials={username:"",password:""},e.login=function(){return alert("asd")}}])})}.call(this),function(){RegisterModule.push("users")}.call(this),function(){require(["angular","jquery","jquery_ujs","restangular","angular-animate","angular-ui-router","bindonce","ui-bootstrap-tpls","lodash","bootstrap-material-design"],function(e){"use strict";return window.ApplicationConfiguration={applicationModuleName:"businesscard7",applicationModuleVendorDependencies:["ui.router","restangular","ui.bootstrap","ngAnimate","pasvaz.bindonce"],registerModule:function(n){return e.module(n,[]),e.module(this.applicationModuleName).requires.push(n)}},e.element(document).ready(function(){var n;return n=e.element("html"),window.App=e,e.module(window.ApplicationConfiguration.applicationModuleName,window.ApplicationConfiguration.applicationModuleVendorDependencies).config(["$urlRouterProvider","$provide",function(e,n){return e.otherwise("/"),n.decorator("$rootScope",["$delegate",function(e){return e.safeApply=function(n){var o;o=e.$$phase,"$apply"===o||"$digest"===o?n&&"function"==typeof n&&n():e.$apply(n)},e}])}]),e.module(window.ApplicationConfiguration.applicationModuleName).config(["$locationProvider",function(e){return e.hashPrefix("!")}]),_.each(window.RegisterModule,function(e){return window.ApplicationConfiguration.registerModule(e)}),_.each(window.ApplicationModules,function(n){return n(e)}),"#_=_"===window.location.hash&&(window.location.hash="#!"),e.bootstrap(n,[window.ApplicationConfiguration.applicationModuleName])})})}.call(this);