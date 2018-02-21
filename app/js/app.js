var app=angular.module("wikiViewer",[]);


app.config(['$httpProvider', function($httpProvider) {
    
            $httpProvider.defaults.useXDomain = true;
    
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
        }
    
]);

app.controller("wiki-controller",function($scope,$http,$sce){
    $scope.searchValue="";
    $scope.randomURL='http://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=';
    $scope.resultList=[];
    $scope.flag=false;
    $scope.searchValueChange=function(){
        console.log($scope.searchValue);
    }

    $scope.getSearchResult=function(){
        
        console.log("Search clicked :",$scope.searchValue);
        $http.get($scope.randomURL+$scope.searchValue)
        .then(function(response){
            $scope.resultList=$scope.getFormattedData(response.data);
            console.log(response);
            $scope.flag=true;
        })
    }

    $scope.getRandom=function(){
        console.log("Get Random Wiki");

        // $http.get($scope.randomURL+$scope.searchValue)
        // .then(function(response){
        //     console.log(response);
        // })

        // var trustedUrl = $sce.trustAsResourceUrl($scope.randomURL);
        // $http.jsonp(trustedUrl,{jsonpCallbackParam: 'callback'})
        // .then(function(data){
        //     console.log(data);
        // });
    

        // fetch($scope.randomURL).then(function(response) {
        //     console.log(document.location(response.url));
        //   })
    }

    $scope.getFormattedData=function(data){
        console.log("Inside getFormattedData");
        const length=data[1].length;
        let resultArray=[];
        data[1].map(function(val,index){
            let obj={};
            obj.title=val;
            obj.desc=data[2][index];
            obj.link=data[3][index];
            resultArray.push(obj);
        })

        //console.log(resultArray);
        return resultArray;
    }


    //console.log("inside-controller");
    //$scope.getRandom();
})