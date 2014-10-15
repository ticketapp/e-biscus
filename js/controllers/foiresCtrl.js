app.controller('foiresCtrl', function ($scope) {

              $scope.articles = [
              {
              "title":"title1",
              "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet turpis nec eros efficitur, sit amet semper massa tempor. Donec consectetur dui ut eros placerat, at mollis ligula lacinia. Etiam sit amet finibus enim, a tempor felis. Etiam nec neque nec nisi consectetur posuere id at augue. Maecenas lacinia, lacus in dictum sollicitudin, diam purus maximus metus, quis pretium ligula ipsum non orci. Fusce aliquam, nibh eget consectetur scelerisque, orci purus facilisis erat, pulvinar placerat tortor sem euismod sem. Ut tempor accumsan neque vitae tristique. Maecenas blandit quis eros eu tristique. Ut consectetur velit vel nisi sodales, a dapibus enim congue."
              },
              {
              "title":"title2",
              "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet turpis nec eros efficitur, sit amet semper massa tempor. Donec consectetur dui ut eros placerat, at mollis ligula lacinia. Etiam sit amet finibus enim, a tempor felis. Etiam nec neque nec nisi consectetur posuere id at augue. Maecenas lacinia, lacus in dictum sollicitudin, diam purus maximus metus, quis pretium ligula ipsum non orci. Fusce aliquam, nibh eget consectetur scelerisque, orci purus facilisis erat, pulvinar placerat tortor sem euismod sem. Ut tempor accumsan neque vitae tristique. Maecenas blandit quis eros eu tristique. Ut consectetur velit vel nisi sodales, a dapibus enim congue."
              }
              ];

              $scope.selected = {"title":"title1"};
              $scope.setMaster = function(article) {
                  $scope.selected = article;
              }

              $scope.isSelected = function(article) {
                  return $scope.selected === article;
              }

          });