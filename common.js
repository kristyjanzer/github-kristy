/* jshint esversion: 6 */


var catshome = function(cat) {
    do {
        var randomcat = Math.floor(Math.random() * catshome.length);
        var cats = cat.splice(randomcat, 1)[0];

        console.log("Корм не получил " + cats.name + ', ' + cats.year);
    } while (cat.length > 1);

    console.log(cat[0].name + ', ' + cat[0].year + " все получил");
};

var createcat = function(name, year) {
    return {
        name: name,
        year: year
    };
};


var white = createcat('Barsik', 18);
var red = createcat('Luna', 12);
var black = createcat('Black', 3);

catshome([white, red, black]);
