app.controller('jardinageCtrl', function ($scope) {
    $scope.articles = [
        {
        "title":"title1",
        "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet turpis nec eros efficitur, sit amet semper massa tempor. Donec consectetur dui ut eros placerat, at mollis ligula lacinia. Etiam sit amet finibus enim, a tempor felis. Etiam nec neque nec nisi consectetur posuere id at augue. Maecenas lacinia, lacus in dictum sollicitudin, diam purus maximus metus, quis pretium ligula ipsum non orci. Fusce aliquam, nibh eget consectetur scelerisque, orci purus facilisis erat, pulvinar placerat tortor sem euismod sem. Ut tempor accumsan neque vitae tristique. Maecenas blandit quis eros eu tristique. Ut consectetur velit vel nisi sodales, a dapibus enim congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet turpis nec eros efficitur, sit amet semper massa tempor. Donec consectetur dui ut eros placerat, at mollis ligula lacinia. Etiam sit amet finibus enim, a tempor felis. Etiam nec neque nec nisi consectetur posuere id at augue. Maecenas lacinia, lacus in dictum sollicitudin, diam purus maximus metus, quis pretium ligula ipsum non orci. Fusce aliquam, nibh eget consectetur scelerisque, orci purus facilisis erat, pulvinar placerat tortor sem euismod sem. Ut tempor accumsan neque vitae tristique. Maecenas blandit quis eros eu tristique. Ut consectetur velit vel nisi sodales, a dapibus enim congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet turpis nec eros efficitur, sit amet semper massa tempor. Donec consectetur dui ut eros placerat, at mollis ligula lacinia. Etiam sit amet finibus enim, a tempor felis. Etiam nec neque nec nisi consectetur posuere id at augue. Maecenas lacinia, lacus in dictum sollicitudin, diam purus maximus metus, quis pretium ligula ipsum non orci. Fusce aliquam, nibh eget consectetur scelerisque, orci purus facilisis erat, pulvinar placerat tortor sem euismod sem. Ut tempor accumsan neque vitae tristique. Maecenas blandit quis eros eu tristique. Ut consectetur velit vel nisi sodales, a dapibus enim congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet turpis nec eros efficitur, sit amet semper massa tempor. Donec consectetur dui ut eros placerat, at mollis ligula lacinia. Etiam sit amet finibus enim, a tempor felis. Etiam nec neque nec nisi consectetur posuere id at augue. Maecenas lacinia, lacus in dictum sollicitudin, diam purus maximus metus, quis pretium ligula ipsum non orci. Fusce aliquam, nibh eget consectetur scelerisque, orci purus facilisis erat, pulvinar placerat tortor sem euismod sem. Ut tempor accumsan neque vitae tristique. Maecenas blandit quis eros eu tristique. Ut consectetur velit vel nisi sodales, a dapibus enim congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet turpis nec eros efficitur, sit amet semper massa tempor. Donec consectetur dui ut eros placerat, at mollis ligula lacinia. Etiam sit amet finibus enim, a tempor felis. Etiam nec neque nec nisi consectetur posuere id at augue. Maecenas lacinia, lacus in dictum sollicitudin, diam purus maximus metus, quis pretium ligula ipsum non orci. Fusce aliquam, nibh eget consectetur scelerisque, orci purus facilisis erat, pulvinar placerat tortor sem euismod sem. Ut tempor accumsan neque vitae tristique. Maecenas blandit quis eros eu tristique. Ut consectetur velit vel nisi sodales, a dapibus enim congue."
        },
        {
        "title":"title2",
        "content":"<h2>Lorem ipsum dolor sit amet</h2> <div class='span3'><img src='img/180ans.png'/></div> consectetur adipiscing elit. Proin laoreet turpis nec eros efficitur, sit amet semper massa tempor. Donec consectetur dui ut eros placerat, at mollis ligula lacinia. Etiam sit amet finibus enim, a tempor felis. Etiam nec neque nec nisi consectetur posuere id at augue. Maecenas lacinia, lacus in dictum sollicitudin, diam purus maximus metus, quis pretium ligula ipsum non orci. Fusce aliquam, nibh eget consectetur scelerisque, orci purus facilisis erat, pulvinar placerat tortor sem euismod sem. Ut tempor accumsan neque vitae tristique. Maecenas blandit quis eros eu tristique. Ut consectetur velit vel nisi sodales, a dapibus enim congue."
        },
        {
        "title":"title3",
        "content":"<h2>Lorem ipsum dolor sit amet</h2> <div class='span3'><img src='img/180ans.png'/></div> consectetur adipiscing elit. Proin laoreet turpis nec eros efficitur, sit amet semper massa tempor. Donec consectetur dui ut eros placerat, at mollis ligula lacinia. Etiam sit amet finibus enim, a tempor felis. Etiam nec neque nec nisi consectetur posuere id at augue. Maecenas lacinia, lacus in dictum sollicitudin, diam purus maximus metus, quis pretium ligula ipsum non orci. Fusce aliquam, nibh eget consectetur scelerisque, orci purus facilisis erat, pulvinar placerat tortor sem euismod sem. Ut tempor accumsan neque vitae tristique. Maecenas blandit quis eros eu tristique. Ut consectetur velit vel nisi sodales, a dapibus enim congue."
        },
        {
        "title":"title4",
        "content":"<h2>Lorem ipsum dolor sit amet</h2> <div class='span3'><img src='img/180ans.png'/></div> consectetur adipiscing elit. Proin laoreet turpis nec eros efficitur, sit amet semper massa tempor. Donec consectetur dui ut eros placerat, at mollis ligula lacinia. Etiam sit amet finibus enim, a tempor felis. Etiam nec neque nec nisi consectetur posuere id at augue. Maecenas lacinia, lacus in dictum sollicitudin, diam purus maximus metus, quis pretium ligula ipsum non orci. Fusce aliquam, nibh eget consectetur scelerisque, orci purus facilisis erat, pulvinar placerat tortor sem euismod sem. Ut tempor accumsan neque vitae tristique. Maecenas blandit quis eros eu tristique. Ut consectetur velit vel nisi sodales, a dapibus enim congue."
        }
    ];

    $scope.selected = $scope.articles[0];
    $scope.query = $scope.selected.title;
    $scope.setMaster = function(article) {
        $scope.selected = article;
        $scope.query = $scope.selected.title;
    }

    $scope.isSelected = function(article) {
        return $scope.selected === article;
    }

    var len = $scope.articles.length;
    var selectedScopeIndex;
    $scope.next = function next() {
        for(selectedScopeIndex = 0; selectedScopeIndex < len; selectedScopeIndex++) {
            if($scope.articles[selectedScopeIndex] == $scope.selected) {
                break;
            }
        }


       if(selectedScopeIndex == len - 1) {
           selectedScopeIndex = 0;
       } else {
           selectedScopeIndex++;
       }
       $scope.selected = $scope.articles[selectedScopeIndex];
       $scope.query = $scope.selected.title;
    }

    $scope.prev = function prev() {
        for(selectedScopeIndex = 0; selectedScopeIndex < len; selectedScopeIndex++) {
            if($scope.articles[selectedScopeIndex] == $scope.selected) {
                break;
            }
        }
       if(selectedScopeIndex == 0) {
           selectedScopeIndex = len - 1;
       } else {
           selectedScopeIndex--;
       }
       $scope.selected = $scope.articles[selectedScopeIndex];
       $scope.query = $scope.selected.title;
    }
    $scope.selectQuery = function(){
        for(selectedScopeIndex = 0; selectedScopeIndex < len; selectedScopeIndex++) {
            if($scope.articles[selectedScopeIndex].title == $scope.query) {
                $scope.selected = $scope.articles[selectedScopeIndex];
                console.log(selectedScopeIndex);
                break;
            }
        }
    }

});