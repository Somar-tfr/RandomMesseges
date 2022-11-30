//random silly jokes generator

// lists of messeges
//list of persons 
let persons = [["duck", "chicken","dog"], ["teacher", "worker", "old man"], ["woman", "man", "child"], ["pizza", "chair", "phone"], ["artist", "kangaroo", "penguin"]];

let places = ["bar", "school", "restaurant", "shopping center", "Beachbar", "swimming pool" ];

let verbs = ["ordered", "tried", "took"];

let drinks = ["beer", "whiskey", "coffe", "some milk", "some Tea"]
//why did
let questions = ["chicken cross the street", "Roman empire fall", "elephant ride a Volkswagen", "Firefighter use the bus", "dragon disappear", "dinosaur go extinct"];

//because 
let answers = ["there was a hole on the ground", "princes were fighting about power", "riding a horse is expensive", "a taxi was on fire!", "it was too late to do the opposite", "it was Boring"];

// random calculation of words
let personInd = Math.floor(Math.random() * 5);
let person = persons[personInd];

let placeInd = Math.floor(Math.random() * 6);
let place = places[placeInd];

let verbInd = Math.floor(Math.random() * 3);
let verb = verbs[verbInd];

let drinkInd = Math.floor(Math.random() * 5);
let drink = drinks[drinkInd];

let questionInd = Math.floor(Math.random() * 6);
let question = questions[questionInd];

let answerInd = Math.floor(Math.random() * 6);
let answer = answers[answerInd];

//print final result
//testing results
console.log(person, place, verb, drink, question, answer);