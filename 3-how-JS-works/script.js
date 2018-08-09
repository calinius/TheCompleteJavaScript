///////////////////////////////////////
// Lecture: Hoisting

// DOES'N MATTER IF THE FUNCTION IS APELATED BEFORE OR AFTER THE DECLARATION OF HER

//functions

/*calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}*/


// LIKE THIS WILL NOT WORK IF THE FUNCTION IS APELATED IN FRONT OF THE DELCARATION 

//retirement(1956);

/*var retirement = function(year) {
    console.log(65 - (2016 - year));
}

retirement(1990);*/


//variables
// AT VARIABLES WHEN CONSOLE BEFORE DECLARATION OF THE VARIABLE, THE VARIABLE WILL BE UNDEFINED

/*console.log(age);
var age = 23;
console.log(age);


function foo() {
    var age = 65;
    console.log(age);   //His own execution context object
}

foo();
console.log(age); */   //Globar excution context object

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}*/



// Example to show the differece between execution stack and scope chain

/*var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}*/



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

/*calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction(); */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
























