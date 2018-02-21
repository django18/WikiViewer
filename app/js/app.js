var app=angular.module("wikiViewer",[]);


app.config(['$httpProvider', function($httpProvider) {
    
            $httpProvider.defaults.useXDomain = true;
    
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
        }
    
]);

app.controller("wiki-controller",function($scope,$http){
    $scope.searchValue="";
    $scope.randomURL='https://en.wikipedia.org/wiki/Special:Random';

    $scope.search=function () {
        $http.get()
    }

    $scope.getRandom=function(){
        console.log("Get Random Wiki");
        $http.get($scope.randomURL)
        .then(function(response){
            console.log(response);
        })
    }


    //console.log("inside-controller");
    //$scope.getRandom();
})