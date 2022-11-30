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
let personInd = Math.floor(Math.random() * persons.length);
let person = persons[personInd];

let talkerInd = Math.floor(Math.random() * person.length)
let talker = person[talkerInd];

let placeInd = Math.floor(Math.random() * places.length);
let place = places[placeInd];

let verbInd = Math.floor(Math.random() * verbs.length);
let verb = verbs[verbInd];

let drinkInd = Math.floor(Math.random() * drinks.length);
let drink = drinks[drinkInd];

let questionInd = Math.floor(Math.random() * questions.length);
let question = questions[questionInd];

let answerInd = Math.floor(Math.random() * answers.length);
let answer = answers[answerInd];



//print final result
console.log("Silly Random jokes generator: \n+++++++++++++++++++++++++++++");
let messege = "";
for (let i = 0; i < 3; i ++){
    if (person[i].startsWith("a") || person[i].startsWith("e") || person[i].startsWith("i") || person[i].startsWith("o") || person[i].startsWith("u")){
        messege += "an " + person[i] + " ";
    }else{
        messege += "a " + person[i] + " ";
    }
}
messege += "and " + verb + " " + drink + ", the " + talker + " asked:\n -\"Why did the " + question + "?\" \n -\"Because " + answer + "!\"";
//printing results
console.log(messege);