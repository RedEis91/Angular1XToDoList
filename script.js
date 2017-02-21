var app = angular.module("myModule", []);

app.controller("toDo", function ($scope) {
    $scope.thingsToDo = ["Buy a gallon of almond milk", "Call your poor mom, she misses you!", "Do some yoga. Breathe in. Breathe out. Nice.",
                         "Bake some bread in your oven or something... I don't know...it's your life!", 
                          "Now...Uh....Think about cheese for a while? Honestly? I have no idea...figure it out. I can't do all the thinking for you!"];
    
    $scope.addItem = function () {
        $scope.thingsToDo.push($scope.item);
        
        $scope.item = null;
    }


    $scope.removeItem = function (item) {
        $scope.thingsToDo.splice(item, 1);
    }
    
});
