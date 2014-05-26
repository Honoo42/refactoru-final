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
// };
// -----------------Functions-----------------------------


			//      -Class Ability Definitions-

// Knights can negate a point of damage from an incorrect guess
var block = function (probablity){
	// var probablity = Math.random();
	// console.log(probablity);
	if (probablity >= 0.75) {
		playerTakesHit = currentCharacter.job.health ++ ;
	}
	console.log("Block Activated!");
};
// Rogues use their cunning to sometimes deal a critical hit
// to a monster when they get a question right
var cunning = function(probablity){
	if (probablity >= 0.75) {
		currentMonster.health = currentMonster.health - 1;
	}
	console.log("Critical Hit!");

};
// Wizards can use their high wisdom and intuition to eliminate two wrong answers 
// when the round  begins
var intuition = function(probablity){ 
	// if (probablity >= 0.75) {
	// 	wrongChoices.shift();
	// 	wrongChoices.shift();
	// 	return wrongChoices;
	// }
	return false;
};

// Sorceress use their intelligence and cleverness to access the monsters
//list of available categories and choose the one that she wants
var cleverness = function(){
	return false;

};

// Bard can dazzle their opponent, stupefying them  and bring the difficulty
// of a question down by a tier
var dazzle = function() {
	return false;

};

// Monk learns wisdom from defeat more rapidly,healing double the amount of HP
//  and is blessed to find items at a greater rate
var blessed = function() {
	return false;

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



// 					-Global Functions-
var availableMonsters = function(pool){
			return _.sample(pool);
} 

// 					-Monster Ranks-	

//Mooks are the lowest level of Encounter, should be warm-ups
// var mook = function(){
// 	return false;
// } 

// ----------------------Variables-----------------------
	// 					-Ability Definition-
	var knightBlock = new Ability('Block',block());
	var rogueCunning = new Ability('Cunning',cunning());
	var wizardIntuition = new Ability('Intuition', intuition());
    //                  -Character Job Definition-

var knight = new Job('Knight',knightBlock,10);
var rogue = new Job('Rogue',rogueCunning,8);
var wizard = new Job('Wizard',wizardIntuition,6);
var sorceress = new Job('Sorceress',cleverness,6);
var bard = new Job('Bard',dazzle,8);
var monk = new Job('Monk',blessed,8);

	// 					-Character Definition-
var kanir = new Character('Kanir',knight);
var devaio = new Character('Devaio',wizard);
var shadow = new Character('Shadow',rogue);


	// 					-Trivia Definition-
var donaldDuckName = new Trivia("What is Donald Duck's middle name?", 2,['Fauntleroy',true],[['Lavender',false],['Huey',false],['Howard',false]]);

var aladdinTiger = new Trivia("What is the name of Jasmine's pet tiger",1,['Rajah',true],[['Abu',false],['Iago',false],['Tigger',false]]);
var pacmanScore = new Trivia("What is the maximum achieveable score in one game of 'Pac-Man'?", 3,['3,333,360',true],[['999,999',false],['424,242,420',false],['3,000,000',false]]);

var marioOrigin = new Trivia("What was Mario's name in the original Donkey Kong arcade game?",2,['Jumpman',true],[['Luigi',false],['Toad',false],['He had no name',false]]);

var gameFIFA2001 = new Trivia("What unusual feature did the game 'FIFA 2001' implement?",5,['A Scratch and Sniff CD',true],[['You could use other CD-ROMs to generate players',false],['It had a mode to play as the coaches and referees',false],['It would lock the player out during half-time and encourage them to go outside',false]]);

var xboxBestSelling = new Trivia("What game is the best selling product of the original XBox?",2,['Halo 2',true],[['Halo 3',false],['Call of Duty:Modern Warfare',false],['Blinx the Time Sweeper',false]]);

var  dynastyWarriors= new Trivia("What genre was the original Dynasty Warrior video game on Playstation?",3,['Fighting',true],[['Beat-Em Up',false],['Strategy',false],['Platformer',false]]);

var  nintendoBaseballOwnership= new Trivia("What major league baseball team does Nintendo of America hold a majority share in?",4,['Seattle Mariners',true],[['Miami Marlins',false],['New York Yankees',false],['Colorado Rockies',false]]);

var  capcomName= new Trivia("What is Capcom short for?",3,['Capsule Computers',true],[['Capsule Computating',false],['Capture Command',false],['Capital Computations',false]]);

var ukBestSeller = new Trivia("What game is the best selling game for the Playstation 1 in the UK?",3,['Rayman',true],[['Tomb Raider',false],['Final Fantasy IX',false],['Crash Bandicoot',false]]);

var  gamecubeBestSeller= new Trivia("What is the best selling game of the Nintendo GameCube?",3,['Super Smash Bros. Melee',true],[['Super Mario Sunshine',false],['Metroid Prime 2',false],['The Legend of Zelda: Wind Waker',false]]);

var  forzaTickets= new Trivia("How many speeding tickets did the development team of the video game Forza Motorsport 2 collectively gain?",6,['41',true],[['42',false],['10',false],['100',false]]);

var  freeComicBookDay= new Trivia("What day is 'Free Comic Book Day' traditionally held in the United States?",1,['The first Saturday of May',true],[['May 4th',false],['The last Saturday of May',false],['December 28th, The birthday of Stan "The Man" Lee',false]]);

var  fontComicSans= new Trivia("What comic book is the font Comic Sans derived from?",3,['Watchmen',true],[['The Dark Knight Returns',false],['Crisis of Infinite Earths',false],['Teenage Mutant Ninja Turtles',false]]);

var  marvelMultiverse= new Trivia("According to the Marvel Comic's Multiverse, our reality is designated: ",5,['Earth-1218',true],[['Earth-616',false],['Earth-199999',false],['Earth-1610',false]]);

var  weaponX= new Trivia("The X-men character Wolverine is a product of the infamous 'Weapon _' project. Which of the following heroes is also considered a product of this program?",0,['Captain America',true],[['Spider-Man',false],['The Punisher',false],['Colossus',false]]);

var  muhammedAli= new Trivia("Boxer Muhammad Ali retired with the following record: ",3,['55 wins, 5 losses',true],[['50 wins, 10 losses',false],['42 wins, 3 losses',false],['50 wins, 6 losses',false]]);

var  firstSuperBowl= new Trivia("The first Super Bowl was played in 1967. What two teams played against each other?",4,['Green Bay Packers and Kansas City Chiefs',true],[['New York Giants and New England Patriots',false],['Pittsburgh Steelers and Oakland Raiders',false],['Buffalo Bills and Miami Dolphins',false]]);

var  olympics2012= new Trivia("What city did the 2012 Summer Olympics take place in?",2,['London',true],[['Toronto',false],['Sochi',false],['Dublin',false]]);

var  tigerWoodsAge= new Trivia("How old was golfer Tiger Woods the first time that he won the Masters?",3,['21',true],[['22',false],['18',false],['25',false]]);

var  olympicSeparation= new Trivia("What year were the Winter and Summer Olympics separated and started to be held on alternating 2 year cycles?",6,['1994',true],[['1990',false],['1978',false],['1986',false]]);

var  nameAvengers= new Trivia("In the comic books, which character came up with the name 'Avengers'",2,['Wasp',true],[['Captain America',false],['The Hulk',false],['Loki',false]]);

var  cameoFrozen= new Trivia("What Disney couple made a cameo appearance in the movie Frozen?",4,['Rapunzel and Flynn',true],[['Ariel and Eric',false],['Snow White and Prince Charming',false],['Pocahontas and John Smith',false]]);

var  genieActor= new Trivia("What famous actor provided the voice of Genie in Disney's 'Aladdin'?",1,['Robin Williams',true],[['Sean Connery',false],['Chris Hemsworth',false],['Danny DeVito',false]]);

var  disneyLastFilm= new Trivia("What was the last movie personally overseen by Walt Disney?",5,['The Jungle Book',true],[['Sleeping Beauty',false],['Toy Story',false],['The Sword in the Stone',false]]);

var  disneyDalmations= new Trivia("How many dalmation puppies are there?",1,['101',true],[['103',false],['1',false],['None any more, Cruella De Vil got all of them',false]]);
// var  = new Trivia("",0,['',true],[['',false],['',false],['',false]]);
// var  = new Trivia("",0,['',true],[['',false],['',false],['',false]]);
// var  = new Trivia("",0,['',true],[['',false],['',false],['',false]]);
// var  = new Trivia("",0,['',true],[['',false],['',false],['',false]]);
// var  = new Trivia("",0,['',true],[['',false],['',false],['',false]]);
// var  = new Trivia("",0,['',true],[['',false],['',false],['',false]]);

// Trivia question sources: GamesRadar, didyouknowcomics.tumblr.com
	// 					-Categories Definition-
var disney = new Category('Disney Trivia',[donaldDuckName,aladdinTiger,disneyDalmations,disneyLastFilm,genieActor,cameoFrozen]);
var videoGames = new Category('Video Game Odd Facts',[pacmanScore,marioOrigin,gameFIFA2001, forzaTickets, gamecubeBestSeller, ukBestSeller, xboxBestSelling, dynastyWarriors, capcomName, nintendoBaseballOwnership]);
var comicbooks = new Category('Comic Books',[nameAvengers,weaponX,marvelMultiverse,freeComicBookDay,fontComicSans]);	
var sports = new Category('Sports',[olympics2012,nintendoBaseballOwnership,muhammedAli,gameFIFA2001,firstSuperBowl,tigerWoodsAge]);

	// 					-Monster Ranks-
var mook = new Rank('Mook');
var elite = new Rank('Elite');
var boss = new Rank('Boss');
	// 					-Monster Definition-

var goblin = new Monsters('Goblin',[disney],2,mook,1);
var troll = new Monsters('Troll',[disney,videoGames],5,elite,3);
var ogre = new Monsters('Ogre',[disney,videoGames,comicbooks,sports],7,boss,5)



	// 					-Monster Pool-
	var firstLevel = [goblin,troll, ogre];