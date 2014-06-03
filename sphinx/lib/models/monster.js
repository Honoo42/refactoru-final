MonsterGroup = new Meteor.Collection("monsters")

monsterCollection = [
	{	'name':'Goblin',
		'categories':['disney'],
		'difficulty': 2,
		'health': 1,
		'rank': 'mook'
	},
	{	'name':'Troll',
		'categories':['disney','videoGames'],
		'difficulty': 5,
		'health': 3,
		'rank': 'elite'
	},
	{	'name':'Ogre',
		'categories':['disney','videoGames','comicbooks','sports'],
		'difficulty': 7,
		'health': 5,
		'rank': 'elite'
	},
	{	'name':'Dragon',
		'categories':['disney','videoGames','comicbooks','sports','animals'],
		'difficulty': 9,
		'health': 7,
		'rank': 'boss'
	}
		
]

for (var i = 0; i < monsterCollection.length; i++) {
	monsterCollection[i]
	MonsterGroup.insert(monsterCollection[i])
};

// Meteor.publish('monsters',function(){
// 	return MonsterGroup.find();
// })

// MonsterGroup.allow({
//   insert: function(userId,doc){
//   	var admin = 'RR4yMYFGzNpXs5C68'
//     // console.log("Admin:",admin,"Meteor User:",Meteor.userId(),"userId:",userId)
//     return (Meteor.userId() === admin);
//   },
//   update: function(admin,doc,fields,modifier){
//     return Meteor.userId() === admin;
//   }
// })