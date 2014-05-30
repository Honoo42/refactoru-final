if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(
            /\{([^{}]*)\}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}

// ------------------Constructors----------------------
// definition is a function that programs the effect of the ability
var Ability = function (name,definition) {
	this.name = name;
	this. definition = definition;
};
//character job deterimes starting health and ability 
var Job = function (name, ability, health) {
	this.name = name;
	this.ability = ability;
	this.health = health;
	
};
var Character = function (name, job) {
	this.name = name;
	this.job = job;
	this.items = [];
	// implement hit point system
};

// wrong should an array of three wrong answers that are randomized with correct
var Trivia = function (str, difficulty, correct, wrong){
	this.str = str;
	this.difficulty= difficulty;
	this.correct = correct;
	this.wrong= wrong;

};
// array of Trivia
var Category = function (name, questions) {
	this.name = name;
	this.questions = questions;
};
// defines the rank of a monster
var Rank = function(name) {
	this.name = name;
	
}
// array holds the categories that the monster can access questions from
// difficulty is the maximum level of difficulty that they can acess
// rank can be Mook, Elite, Mid-Boss, Boss, End-Boss
var Monsters = function(name, array, difficulty, rank, health) {
	this.name = name;
	this.array = array;
	this.difficulty = difficulty;
	this.rank = rank;
	this.health = health;
	
	
};

var Locations = function (name) {

};
// constructor for collectible items and treasure
var Item = function (name,effect){
	this.name = name;
	this.effect = effect;
}

var Answers = function(Array) {
	this.Array = Array;
	var answerChoice1 = Array[0];
	var answerChoice2 = Array[1];
	var answerChoice3 = Array[2];
	var answerChoice4 = Array[3];
	

}

// -----------------Prototype Methods---------------------
Ability.prototype.create =  function(){
		return $('<div class="ability">{name}</div>'.supplant(this));
};

Job.prototype.create =  function(){
		return $('<div class="job">{name}</div>'.supplant(this));
};

Character.prototype.create =  function(){
		return $('<div class="character">{name}</div>'.supplant(this));
};

Trivia.prototype.create =  function(){
	
		$(this.correct).addClass('correct');
		$(this.wrong).addClass('wrong');

		return $('<div class="trivia">{str}</div>'.supplant(this));
};

Category.prototype.create =  function(){
		return $('<div class="category">{name}</div>'.supplant(this));
};

Rank.prototype.create =  function(){
		return $('<div class="rank">{name}</div>'.supplant(this));
};

Monsters.prototype.create =  function(){
		return $('<div class="monsters">{name} with a maximum difficulty of {difficulty}</div>'.supplant(this));
};

Locations.prototype.create =  function(){
		return $('<div class="locations">{name}</div>'.supplant(this));
};

Item.prototype.create =  function(){
		return $('<div class="item">{name}</div>'.supplant(this));
};
// Using supplant to generate the answer choices and data-attribute to assign the 'correct' class to the 
// right answer after all the answers are suffled
Answers.prototype.create1 =  function(){
	
	var answersOnDisplay ={answerChoice1:this.Array[0][0], correctAnswer:this.Array[0][1].toString() };

		return $('<button class="answers answer-btn answer1" data-answer="{correctAnswer}">{answerChoice1}</button>'.supplant(answersOnDisplay));

	};
Answers.prototype.create2 =  function(){
	var answersOnDisplay ={answerChoice2:this.Array[1][0], correctAnswer:this.Array[1][1].toString() };
		return $('<button class="answers answer-btn answer2" data-answer="{correctAnswer}">{answerChoice2}</button>'.supplant(answersOnDisplay));

	};	
Answers.prototype.create3 =  function(){
	var answersOnDisplay ={answerChoice3:this.Array[2][0], correctAnswer:this.Array[2][1].toString() };
		return $('<button class="answers answer-btn answer3" data-answer="{correctAnswer}">{answerChoice3}</button>'.supplant(answersOnDisplay));

	};
Answers.prototype.create4 =  function(){
	var answersOnDisplay ={answerChoice4:this.Array[3][0], correctAnswer:this.Array[3][1].toString() };
		return $('<button class="answers answer-btn answer4" data-answer="{correctAnswer}">{answerChoice4}</button>'.supplant(answersOnDisplay));

	};
	// 						-Category Functions-
// create a function to loop through a category, pick a Trivia Item
 // and display the string in the Trivia object
// the 
Category.prototype.categorySearch = function() {
	for (var i = 0; i < this.questions.length; i++) {
		console.log(this.questions[i]);
		
	};
	
};
// uses underscore js sample function to randomly grab a
// an item from the array and output it's string
Category.prototype.triviaOutput = function() {
	// var selectedTrivia = _.sample(this.array);
	// selectedTrivia;
	return _.sample(this.questions).str;
}

// goes through each question in the array and filters by difficulty
Category.prototype.triviaDifficulty = function() {

}
// 					-Trivia Functions-
// merges the two choice arrays together and randomizes them
// FUNCTION TO FIX - correctChoice is added multiple times
Trivia.prototype.choiceRandomizer = function() {
	var probablity = Math.random();
	// console.log(probablity);
	

	var wrongChoices = this.wrong;
	// console.log (wrongChoices);
	if (currentCharacter.job.ability.name === "Intuition") {
		intuition(probablity);
	};
	// console.log(wrongChoices);
	var correctChoice = this.correct;
	var choices = wrongChoices.push(correctChoice);

	// shuffles the array of answer choices
	var shuffledChoices = _.shuffle(this.wrong);
	// makes sure that the choices displayed to the player are all unique indexes
	var uniqueChoices = _.uniq(shuffledChoices);
	// var displayChoices = new Answers(uniqueChoices);
		
	// gives each possible answer it's own array
	var answerChoice1 = uniqueChoices[0];
	var answerChoice2 = uniqueChoices[1];
	var answerChoice3 = uniqueChoices[2];
	var answerChoice4 = uniqueChoices[3];

	return uniqueChoices;
}
Trivia.prototype.difficultPull = function() {
	return this.difficulty;
}



// 					-Monsters Functions-
// takes a given monster, searches their available source of categories and
// outputs a random question of the randomly chosen category
Monsters.prototype.encounterGenerator = function() {
	var monster = this;
	var arrayofCategories = this.array;
	var category = _.sample(arrayofCategories);
	var questions = category.questions;
		// run _.reject to filter by difficulty
		var filteredQuestions = _.reject(questions,function (question){return question.difficulty > monster.difficulty});
	var triviaObj= _.sample(filteredQuestions);
	return triviaObj;
};
