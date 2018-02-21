var app=angular.module("wikiViewer",[]);


app.config(['$httpProvider', function($httpProvider) {
    
            $httpProvider.defaults.useXDomain = true;
    
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
        }
    
]);

app.controller("wiki-controller",function($scope,$http,$sce){
    $scope.searchValue="";
    $scope.randomURL='http://en.wikipedia.org/w/api.php';

    $scope.searchValueChange=function(){
        console.log($scope.searchValue);
    }

    $scope.getSearchResult=function(){
        console.log("Search clicked :",$scope.searchValue);
    }

    $scope.getRandom=function(){
        console.log("Get Random Wiki");
        // $http.get($scope.randomURL,
        //     {
        //         headers:{ 'dataType': "jsonp"},
        //         data: {
        //             'action': "opensearch",
        //             'format': "json",
        //             'search': 'google'
        //         }
        //     })
        // .then(function(response){
        //     console.log(response);
        // })
        var trustedUrl = $sce.trustAsResourceUrl($scope.randomURL);
        $http.jsonp(trustedUrl)
        .then(function(data){
            console.log(data);
        });
    

        // fetch($scope.randomURL).then(function(response) {
        //     console.log(document.location(response.url));
        //   })
    }


    //console.log("inside-controller");
    //$scope.getRandom();
})