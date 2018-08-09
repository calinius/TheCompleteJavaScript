/*var firstName = 'John';

console.log(firstName);

var lastName ='Smith';
var age = 23;*/

/*var fistName = 'John';
var age = 28;

console.log(fistName + ' ' + age);*/


// Challenge 1

/*var massJohn, massMark, heightJohn, heightMark, bmiMark, bmiJohn, BMIHeighter;
massJohn = 90;
massMark = 78;

heightJohn = 1.95;
heightMark = 1.69;

bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

BMIHeighter = bmiMark > bmiJohn;

console.log(' Is Mark\'s BMI heigher that John\'s? ' + BMIHeighter);*/

// The Ternary Operator

/*var firstName = 'John';
var age = 22;

age >= 18 ? console.log(fistName + ' drins beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);*/

//Challenge 2

/*
var scoreJohn, scoreMike, gameJohn1, gameJohn2, gameJohn3, gameMark1, gameMark2, gameMark3;

gameJohn1 = 150;
gameJohn2 = 120;
gameJohn3 = 103;

gameMark1 = 116;
gameMark2 = 94; 
gameMark3 = 123;



scoreJohn = (gameJohn1 + gameJohn2 + gameJohn3) / 3;
scoreMike = (gameMark1 + gameMark2 + gameMark3) / 3;

if (scoreJohn > scoreMike) {
    console.log('John\'s score is ' + scoreJohn + ' and is the hightes score');
} else if (scoreJohn === scoreMike) {
    console.log(scoreJohn + ' is egual with' + scoreMike);
} else {
    console.log('Mike\'s score is ' + scoreMike + ' and is the hightes score');
}
*/

//Functions 

/*function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if(retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');  
    } else {
        console.log(firstName + ' is alredy retired.');
    }
  
}

yearUntilRetirement(1990, 'John');
yearUntilRetirement(1948, 'Mike');
yearUntilRetirement(1969, 'Jane');*/


//Array

/*
var names = ['John', 'Mark', 'Jane'];

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');  //added blue to array john
john.unshift('Mr.');
console.log(john);
*/

// Challenge 3

/*
var bills = [124, 48, 268], tips;

switch (tips) {
    case (bills[0] < 50 ||  bills[1] < 50 || bills[2] < 50 ) :
          tips = bills * 20 / 100;
          console.log(tips);
    break;
    case (50 <= bills[0] <= 200 || 50 <= bills[1] <= 200 || 50 <= bills[2] <= 200) :
        tips = bills * 15 /100;
        console.log(tips);
    break;
    case (bills[0] > 200 ||  bills[1] > 200 || bills[2] > 200) :
        tips = bills * 10 / 100;
        console.log(tips);
    default :
        console.log('No tips!!');
}
*/


/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);
*/

// Objects and properties

/*
var john = {
    firsName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firsName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);


var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/


// Objects and methods

/*var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        return this.age = 2018 - this.birthYear;  // this meens in this context John
    }
};

john.calcAge();
console.log(john);*/

// Challenge 4

/*var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 90,
    height: 1.95,
    //bmi: this.mass / this.height * this.height,
    calBMI: function(bmi) {
        this.bmi = this.mass / (this.height * this.height)
    }
};

var mark = {
    firstName: 'Mark',
    lastName: 'Smith',
    mass: 78,
    height: 1.69,
    calBMI: function(bmi) {
        this.bmi = this.mass / (this.height * this.height)
    }
};

john.calBMI();
mark.calBMI();
console.log(john, mark);*/

/*var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = john.length - 1; i > = 0; i--) {
    console.log(john[i]);
}*/



// Challenge 5


var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        for(var i = 0; i < this.bills.length; i++) {
            
            var percentage;
            var bill = this.bills[i];
            var average;
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }   
            
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
            this.average = bill * percentage / this.tips.length;
        }
    }
}

var mark = {
    fullName: 'Mark Smith',
    bills: [77, 375, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        for(var i = 0; i < this.bills[i]; i++) {
            
            var percentage;
            var bill = this.bills[i];
            var average;
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
            this.average = bill * percentage / this.tips.length;
        }
    }
}

john.calcTips();
mark.calcTips();
console.log(john, mark);


















