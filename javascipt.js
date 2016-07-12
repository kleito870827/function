var numbers = [];

var square = function(arr){
return arr.map( function(e){
  return e*e;
});

};
square(numbers);

var name = [];

var prefix = fuction (arr){
return arr.map(fuction (e){
return "Mr "+e;
});
};

prefix(name);


var name = [];

var prefix = fuction (arr){
return arr.map(fuction (e){
return "<"+tag+">"+e+"</"+tag+">";
});
};

prefix(name);

var passengers =[["thomas","meeks"],
["thomas","meeks"],["thomas","meeks"]
],

var passengerName = passengers.map(function (e,i){
return i + e[0] +" "+ e[1];

});

var puzzlers = [
function(i){ return 3*i - 8;},
function(i){ return math.pow(i + 2,3);},
function(i){ return i*i - 9;},
function(i){ return i%4;},
];
var puzzlersOf10= puzzlers.map(fuction (e){
return e(10);
});
