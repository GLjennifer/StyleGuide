'use strict';
var app = angular.module("styleGuideApp", ["firebase", "ngRoute"]);

app.controller("styleController", function($scope, $firebaseArray, $routeParams) {
    var ref = new Firebase("https://cssstyleguide.firebaseio.com/");

    var saveStatus = document.getElementById('saveStatus');
    $scope.savedNewEntry = function () {
        saveStatus.innerText = $scope.n.projectname + " CSS Style Guide been saved."
    };

    $scope.projectId = $routeParams._id;  //capture variable from id on url


    //3 way binding
    // download the data into a local object
    // var sync = $firebase(ref);
    // $scope.allStyles = sync.$asArray();

    //downloading data into local Array
    $scope.allStyles = $firebaseArray(ref);


    $scope.addItem = function () {
        $scope.allStyles.$add({   //$add syntax is unique to angularfirebase
            "projectname": $scope.n.projectname,
            "tags": {
                "H1": {
                    name: "h1",
                    examplename: $scope.n.tags.H1.examplename,
                    fontcolor: $scope.n.tags.H1.fontcolor,
                    fontfamily: $scope.n.tags.H1.fontfamily,
                    fontbackup: $scope.n.tags.H1.fontbackup,
                    fontweight: $scope.n.tags.H1.fontweight,
                    font: $scope.n.tags.H1.font,
                    fontstyle: $scope.n.tags.H1.fontstyle,
                    textalign: $scope.n.tags.H1.textalign,
                    size: $scope.n.tags.H1.size,
                    margin: $scope.n.tags.H1.margin,
                    bkgdpreview: $scope.n.tags.H1.bkgdpreview
                },
                "H2": {
                    name: "h2",
                    examplename: $scope.n.tags.H2.examplename,
                    fontcolor: $scope.n.tags.H2.fontcolor,
                    fontfamily: $scope.n.tags.H2.fontfamily,
                    fontbackup: $scope.n.tags.H2.fontbackup,
                    fontweight: $scope.n.tags.H2.fontweight,
                    font: $scope.n.tags.H2.font,
                    fontstyle: $scope.n.tags.H2.fontstyle,
                    textalign: $scope.n.tags.H2.textalign,
                    size: $scope.n.tags.H2.size,
                    margin: $scope.n.tags.H2.margin,
                    bkgdpreview: $scope.n.tags.H2.bkgdpreview
                },
                "H3": {
                    name: "h3",
                    examplename: $scope.n.tags.H3.examplename,
                    fontcolor: $scope.n.tags.H3.fontcolor,
                    fontfamily: $scope.n.tags.H3.fontfamily,
                    fontbackup: $scope.n.tags.H3.fontbackup,
                    fontweight: $scope.n.tags.H3.fontweight,
                    font: $scope.n.tags.H3.font,
                    fontstyle: $scope.n.tags.H3.fontstyle,
                    textalign: $scope.n.tags.H3.textalign,
                    size: $scope.n.tags.H3.size,
                    margin: $scope.n.tags.H3.margin,
                    bkgdpreview: $scope.n.tags.H3.bkgdpreview
                },
                "H4": {
                    name: "h4",
                    examplename: $scope.n.tags.H4.examplename,
                    fontcolor: $scope.n.tags.H4.fontcolor,
                    fontfamily: $scope.n.tags.H4.fontfamily,
                    fontbackup: $scope.n.tags.H4.fontbackup,
                    fontweight: $scope.n.tags.H4.fontweight,
                    font: $scope.n.tags.H4.font,
                    fontstyle: $scope.n.tags.H4.fontstyle,
                    textalign: $scope.n.tags.H4.textalign,
                    size: $scope.n.tags.H4.size,
                    margin: $scope.n.tags.H4.margin,
                    bkgdpreview: $scope.n.tags.H4.bkgdpreview
                },
                "H5": {
                    name: "h5",
                    examplename: $scope.n.tags.H5.examplename,
                    fontcolor: $scope.n.tags.H5.fontcolor,
                    fontfamily: $scope.n.tags.H5.fontfamily,
                    fontbackup: $scope.n.tags.H5.fontbackup,
                    fontweight: $scope.n.tags.H5.fontweight,
                    font: $scope.n.tags.H5.font,
                    fontstyle: $scope.n.tags.H5.fontstyle,
                    textalign: $scope.n.tags.H5.textalign,
                    size: $scope.n.tags.H5.size,
                    margin: $scope.n.tags.H5.margin,
                    bkgdpreview: $scope.n.tags.H5.bkgdpreview
                },
                "p": {
                    name: "p",
                    examplename: $scope.n.tags.p.examplename,
                    fontcolor: $scope.n.tags.p.fontcolor,
                    fontfamily: $scope.n.tags.p.fontfamily,
                    fontbackup: $scope.n.tags.p.fontbackup,
                    fontweight: $scope.n.tags.p.fontweight,
                    font: $scope.n.tags.p.font,
                    fontstyle: $scope.n.tags.p.fontstyle,
                    textalign: $scope.n.tags.p.textalign,
                    size: $scope.n.tags.p.size,
                    margin: $scope.n.tags.p.margin,
                    bkgdpreview: $scope.n.tags.p.bkgdpreview
                },
                "ahref": {
                    name: "a href",
                    examplename: $scope.n.tags.ahref.examplename,
                    fontcolor: $scope.n.tags.ahref.fontcolor,
                    fontfamily: $scope.n.tags.ahref.fontfamily,
                    fontbackup: $scope.n.tags.ahref.fontbackup,
                    fontweight: $scope.n.tags.ahref.fontweight,
                    font: $scope.n.tags.ahref.font,
                    fontstyle: $scope.n.tags.ahref.fontstyle,
                    textalign: $scope.n.tags.ahref.textalign,
                    size: $scope.n.tags.ahref.size,
                    margin: $scope.n.tags.ahref.margin,
                    bkgdpreview: $scope.n.tags.ahref.bkgdpreview
                }
            },
            "colors": {
                "color1": {
                    colorItem: "Primary Color",
                    colorHex: $scope.n.colors.color1.colorHex
                },
                "color2": {
                    colorItem: "Secondary Color",
                    colorHex: $scope.n.colors.color2.colorHex
                },
                "color3": {
                    colorItem: "Tertiary Color",
                    colorHex: $scope.n.colors.color3.colorHex
                },
                "color4": {
                    colorItem: "Fourth Color",
                    colorHex: $scope.n.colors.color4.colorHex
                }
            }
        });
    };

    //Function for deleting links to my firebase database
    $scope.deleteItem = function (delItem) {
        var delconfirmation = confirm("Are you sure you want to delete this resource? \n Press 'ok' to delete the resource or 'cancel' to keep it as is.");
        //$remove is syntax unique to angularfire
        if (delconfirmation) {  //if delconfirmation variable is true (if user pressed ok), then delete listing
            $scope.allStyles.$remove(delItem);
        }
    };

    //Function for updating in my firebase
    $scope.saveItem = function (item) {
        //Simply update the list with the passed link
        $scope.allStyles.$save(item);
        alert("You have successfully updated this resource.")
    };


    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    // syncObject.$bindTo($scope, "data");  //now $scope has syncObject and all it's existing properties


    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //***Add Google font
    $scope.addNewFont = function (input) {
        var googleFontFamily = input.trim();

        //take input and split by space


        var capitalizedWordsArray = [];

        var separateWords = googleFontFamily.split(" ");  //just in case people put in more than 1 space

        //looop through each item in array and use function capitalizeFirstLetter
        for (var i = 0; i < separateWords.length; i++) {
            var capitalizedWord = capitalizeFirstLetter(separateWords[i]);
            capitalizedWordsArray.push(capitalizedWord);
        }
        ;

        //add array back together using "Plus" sign
        var finalFont = capitalizedWordsArray.join("+").toString();
        //var fontWithoutSpaces = googleFontFamily.trim().replace(/( )+/g, "+");

        //.replace(/( )+/g, "+")

        //todo: convert string "input" to title case

        //if it has space
        /*            if (/(\+)/.test(fontWithoutSpaces)){
         fontWithoutSpaces(0).toUpperCase();
         finalFont = fontWithoutSpaces.replace(/(\+)+([a-z]){1}/, /(\+)+([A-Z]){1}/);
         }
         else{
         fontWithoutSpaces.charAt(0).toUpperCase();
         finalFont = fontWithoutSpaces;
         alert(finalFont);
         }*/

        var linkRef = document.createElement("link");
        linkRef.setAttribute("rel", "stylesheet");
        linkRef.setAttribute("type", "text/css");
        linkRef.setAttribute("href", "http://fonts.googleapis.com/css?family=" + finalFont);
        document.head.appendChild(linkRef);
    };

    $scope.resetType = function () {

        $scope.n = {   //$add syntax is unique to angularfirebase
            "projectname": "",
            "tags": {

                "H1": {
                    name: "h1",
                    examplename: "Header 1",
                    fontcolor: "000",
                    fontfamily: "sans-serif",
                    fontbackup: "sans-serif",
                    fontweight: "bold",
                    font: "arial",
                    fontstyle: "normal",
                    textalign: "left",
                    size: "30px",
                    margin: "30px 30px 0 0",
                    bkgdpreview: ""
                },
                "H2": {
                    name: "h2",
                    examplename: "Header 2",
                    fontcolor: "000",
                    fontfamily: "sans-serif",
                    fontbackup: "sans-serif",
                    fontweight: "bold",
                    font: "arial",
                    fontstyle: "normal",
                    textalign: "left",
                    size: "25px",
                    margin: "30px 30px 0 0",
                    bkgdpreview: ""
                },
                "H3": {
                    name: "h3",
                    examplename: "Header 3",
                    fontcolor: "000",
                    fontfamily: "sans-serif",
                    fontbackup: "sans-serif",
                    fontweight: "bold",
                    font: "arial",
                    fontstyle: "normal",
                    textalign: "left",
                    size: "20px",
                    margin: "30px 30px 0 0",
                    bkgdpreview: ""
                },
                "H4": {
                    name: "h4",
                    examplename: "Header 4",
                    fontcolor: "000",
                    fontfamily: "sans-serif",
                    fontbackup: "sans-serif",
                    fontweight: "bold",
                    font: "arial",
                    fontstyle: "italic",
                    textalign: "left",
                    size: "18px",
                    margin: "30px 30px 0 0",
                    bkgdpreview: ""
                },
                "H5": {
                    name: "h5",
                    examplename: "Header 5",
                    fontcolor: "000",
                    fontfamily: "sans-serif",
                    fontbackup: "sans-serif",
                    fontweight: "bold",
                    font: "arial",
                    fontstyle: "italic",
                    textalign: "left",
                    size: "16px",
                    margin: "30px 30px 0 0",
                    bkgdpreview: ""
                },
                "p": {
                    name: "p",
                    examplename: "Paragraph",
                    fontcolor: "000",
                    fontfamily: "sans-serif",
                    fontbackup: "sans-serif",
                    fontweight: "normal",
                    font: "arial",
                    fontstyle: "normal",
                    textalign: "left",
                    size: "14px",
                    margin: "30px 30px 0 0",
                    bkgdpreview: ""
                },
                "ahref": {
                    name: "a href",
                    examplename: "Link",
                    fontcolor: "000099",
                    fontfamily: "sans-serif",
                    fontbackup: "sans-serif",
                    fontweight: "bold",
                    font: "arial",
                    fontstyle: "italic",
                    textalign: "left",
                    size: "14px",
                    margin: "30px 30px 0 0",
                    bkgdpreview: ""
                },
                "ahref:hover": {
                    name: "a href:hover",
                    examplename: "Link on hover",
                    fontcolor: "FF0000",
                    fontfamily: "sans-serif",
                    fontbackup: "sans-serif",
                    fontweight: "bold",
                    font: "arial",
                    fontstyle: "italic",
                    textalign: "left",
                    size: "14px",
                    margin: "30px 30px 0 0",
                    bkgdpreview: ""
                }
            },
            "colors": {
                "color1": {
                    colorItem: "Primary Color",
                    colorHex: "FFFFF"
                },
                "color2": {
                    colorItem: "Secondary Color",
                    colorHex: "FFFFF"
                },
                "color3": {
                    colorItem: "Tertiary Color",
                    colorHex: "FFFFF"
                },
                "color4": {
                    colorItem: "Fourth Color",
                    colorHex: "FFFFF"
                }
            }
        };
/*        $('input.color').attr({
            "style": "color: rgb(255, 255, 255); background-image: none; background-color: #fff;"
        });

        $('div.colorbox').attr({
            "style": "background-color: #fff;"
        });*/
    }; //ends resetType fcn


    //***What user is starting with
    $scope.resetType();



        function displayCode(){

        }

});

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'newproject.html',
            controller: 'styleController'
        })
         .when('/projects', {
            templateUrl: 'existingproject.html',
            controller: 'styleController'
        })
        .otherwise({
            redirectTo:'/'
        });

    // use the HTML5 History API- get rid of ugly hash tags
   // $locationProvider.html5Mode(true);
});
