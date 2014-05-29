
	TriviaCollection = new Meteor.Collection("triviaQuestions");
	
	var collectionData= [
			{	"title":"donaldDuckName", 
				"question":"What is Donald Duck's middle name?", 
				"difficulty":2,
				"correct": ['Fauntleroy',true],
				"wrong":[['Lavender',false],['Huey',false],['Howard',false]]
			},
			{	"title":"aladdinTiger", 
				"question": "What is the name of Jasmine's pet tiger",
				"difficulty":1,
				"correct":['Rajah',true],
				"wrong":[['Abu',false],['Iago',false],['Tigger',false]]
			},
			{	"title":"pacmanScore", 
				"question": "What is the maximum achieveable score in one game of 'Pac-Man'?", 
				"difficulty": 3,
				"correct":['3,333,360',true],
				"wrong": [['999,999',false],['424,242,420',false],['3,000,000',false]]
			},

			{	"title":"marioOrigin", 
				"question": "What was Mario's name in the original Donkey Kong arcade game?",
				"difficulty": 2,
				"correct":['Jumpman',true],
				"wrong": [['Luigi',false],['Toad',false],['He had no name',false]]
			},

			{	"title":"gameFIFA2001", 
				"question": "What unusual feature did the game 'FIFA 2001' implement?",
				"difficulty": 5,
				"correct":['A Scratch and Sniff CD',true],
				"wrong": [['You could use other CD-ROMs to generate players',false],['It had a mode to play as the coaches and referees',false],['It would lock the player out during half-time and encourage them to go outside',false]]
			},

			{	"title":"xboxBestSelling",
				"question": "What game is the best selling product of the original XBox?",
				"difficulty": 2,
				"correct":['Halo 2',true],
				"wrong": [['Halo 3',false],['Call of Duty:Modern Warfare',false],['Blinx the Time Sweeper',false]]
			},

			{	"title": "dynastyWarriors",
				"question": "What genre was the original Dynasty Warrior video game on Playstation?",
				"difficulty": 3,
				"correct":['Fighting',true],
				"wrong": [['Beat-Em Up',false],['Strategy',false],['Platformer',false]]
			},

			{	"title": "nintendoBaseballOwnership",
				"question": "What major league baseball team does Nintendo of America hold a majority share in?",
				"difficulty": 4,
				"correct":['Seattle Mariners',true],
				"wrong": [['Miami Marlins',false],['New York Yankees',false],['Colorado Rockies',false]]
			},

			{	"title": "capcomName",
				"question": "What is Capcom short for?",
				"difficulty": 3,
				"correct":['Capsule Computers',true],
				"wrong": [['Capsule Computating',false],['Capture Command',false],['Capital Computations',false]]
			},

			{	"title": "ukBestSeller",
				"question": "What game is the best selling game for the Playstation 1 in the UK?",
				"difficulty": 3,
				"correct":['Rayman',true],
				"wrong": [['Tomb Raider',false],['Final Fantasy IX',false],['Crash Bandicoot',false]]
			},

			{	"title": "gamecubeBestSeller",
				"question": "What is the best selling game of the Nintendo GameCube?",
				"difficulty": 3,
				"correct":['Super Smash Bros. Melee',true],
				"wrong": [['Super Mario Sunshine',false],['Metroid Prime 2',false],['The Legend of Zelda: Wind Waker',false]]
			},

			{	"title": "forzaTickets",
				"question": "How many speeding tickets did the development team of the video game Forza Motorsport 2 collectively gain?",
				"difficulty": 6,
				"correct":['41',true],
				"wrong": [['42',false],['10',false],['100',false]]
			},

			{	"title": "freeComicBookDay",
				"question": "What day is 'Free Comic Book Day' traditionally held in the United States?",
				"difficulty": 1,
				"correct":['The first Saturday of May',true],
				"wrong": [['May 4th',false],['The last Saturday of May',false],['December 28th, The birthday of Stan "The Man" Lee',false]]
			},

			{	"title": "fontComicSans",
				"question": "What comic book is the font Comic Sans derived from?",
				"difficulty": 3,
				"correct":['Watchmen',true],
				"wrong": [['The Dark Knight Returns',false],['Crisis of Infinite Earths',false],['Teenage Mutant Ninja Turtles',false]]
			},

			{	"title": "marvelMultiverse",
				"question": "According to the Marvel Comic's Multiverse, our reality is designated: ",
				"difficulty": 5,
				"correct":['Earth-1218',true],
				"wrong": [['Earth-616',false],['Earth-199999',false],['Earth-1610',false]]
			},

			{	"title": "weaponX",
				"question": "The X-men character Wolverine is a product of the infamous 'Weapon _' project. Which of the following heroes is also considered a product of this program?",
				"difficulty": 0,
				"correct":['Captain America',true],
				"wrong": [['Spider-Man',false],['The Punisher',false],['Colossus',false]]
			},

			{	"title": "muhammedAli",
				"question": "Boxer Muhammad Ali retired with the following record: ",
				"difficulty": 3,
				"correct":['55 wins, 5 losses',true],
				"wrong": [['50 wins, 10 losses',false],['42 wins, 3 losses',false],['50 wins, 6 losses',false]]
			},

			{	"title": "firstSuperBowl",
				"question": "The first Super Bowl was played in 1967. What two teams played against each other?",
				"difficulty": 4,
				"correct":['Green Bay Packers and Kansas City Chiefs',true],
				"wrong": [['New York Giants and New England Patriots',false],['Pittsburgh Steelers and Oakland Raiders',false],['Buffalo Bills and Miami Dolphins',false]]
			},

			{	"title": "olympics2012",
				"question": "What city did the 2012 Summer Olympics take place in?",
				"difficulty": 2,
				"correct":['London',true],
				"wrong": [['Toronto',false],['Sochi',false],['Dublin',false]]
			},

			{	"title": "tigerWoodsAge",
				"question": "How old was golfer Tiger Woods the first time that he won the Masters?",
				"difficulty": 3,
				"correct":['21',true],
				"wrong": [['22',false],['18',false],['25',false]]
			},

			{	"title": "olympicSeparation",
				"question": "What year were the Winter and Summer Olympics separated and started to be held on alternating 2 year cycles?",
				"difficulty": 6,
				"correct":['1994',true],
				"wrong": [['1990',false],['1978',false],['1986',false]]
			},
			{	"title": "nameAvengers",
				"question": "In the comic books, which character came up with the name 'Avengers'",
				"difficulty": 2,
				"correct":['Wasp',true],
				"wrong": [['Captain America',false],['The Hulk',false],['Loki',false]]
			},

			{	"title": "cameoFrozen",
				"question": "What Disney couple made a cameo appearance in the movie Frozen?",
				"difficulty": 4,
				"correct":['Rapunzel and Flynn',true],
				"wrong": [['Ariel and Eric',false],['Snow White and Prince Charming',false],['Pocahontas and John Smith',false]]
			},

			{	"title": "genieActor",
				"question": "What famous actor provided the voice of Genie in Disney's 'Aladdin'?",
				"difficulty": 1,
				"correct":['Robin Williams',true],
				"wrong": [['Sean Connery',false],['Chris Hemsworth',false],['Danny DeVito',false]]
			},

			{	"title": "disneyLastFilm",
				"question": "What was the last movie personally overseen by Walt Disney?",
				"difficulty": 5,
				"correct":['The Jungle Book',true],
				"wrong": [['Sleeping Beauty',false],['Toy Story',false],['The Sword in the Stone',false]]
			},

			{	"title": "disneyDalmations",
				"question": "How many dalmation puppies are there?",
				"difficulty": 1,
				"correct":['101',true],
				"wrong": [['103',false],['1',false],['None any more, Cruella De Vil got all of them',false]]
			}
		]
		// loop through the collection data so that new insertions are added into the database
		// at the same level as the hardcoded trivia
for (var i = 0; i < collectionData.length; i++) {
	collectionData[i]
	TriviaCollection.insert(collectionData[i])
};

TriviaCollection.allow({
  insert: function(userId,doc){
  	var admin = 'EfgmN3itJNss8B9q8'
    console.log("Admin:",admin,"Meteor User:",Meteor.userId(),"userId:",userId)
    return (Meteor.userId() === admin);
  },
  update: function(admin,doc,fields,modifier){
    return Meteor.userId() === admin;
  }
})
