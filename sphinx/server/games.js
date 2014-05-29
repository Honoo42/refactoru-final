Games = new Meteor.Collection('games');



// Publishing the collection for clients, not completely secure yet 

Meteor.publish('games', function (id) {
	return Games.find({});
});
// publishes the data of available players
Meteor.publish("directory",function(){
	return Meteor.users.find({},{fields:{emails: 1, services: 1, profile: 1, username: 1, current_game: 1}});

});

//  Define the methods to be called from the client that control all game operations
Meteor.methods({
	// create a game
	createGame: function() {
		if (this.userId) {
			cgame=Games.findOne({owner: this.userId, ended:false});
			if (cgame != null) {
				Games.update({_id:cgame._id}, {$set:{ended:true}});
			}
			gid=Games.insert({owner: this.userId, owner_username: getUserName(), guest: null, guest_username: null,started: false, ended: false,total_games: 0,ties: 0, owner_wins: 0,owner_play: null, guest_wins: 0, guest_play: null, game_status: 'waiting', game_log: 'Game started'})
			return gid;
		}
	},
	// method for a guest joining the game
	joinGame: function(gameId){
		cgame= Games.findOne({_id: gameId});
		if (!cgame.started && cgame.guest === null) {
			Games.update({_id: gameId}, {$set: {guest: this.userId, guest_username: getUserName(), started: true, game_log: 'Game started'}})
			return true;
		}
		return false;
	},
	// Set the current game for a user
	setCurrentGame: function(gameId){
		Meteor.users.update({_id: this.userId},{$set:{current_game:gameID}})
	},

// ACTUAL GAME PLAY NEEDED

	//Resetting the game after judge it
	resetGame: function(gameId){
		Games.update({_id: gameId}, {$set: {owner_play: null, guest_play: null, game_status: 'waiting'}});
	},
	//Ending the game
	endGame: function(gameId){
		cgame= Games.findOne({_id: gameId});
		Games.update({_id: gameId}, {$set: {ended: true, game_log: 'Game ended by '+getUserName()+'<br/>'+cgame.game_log}});
	},
	//Deleting the game
	deleteGame: function(gameId){
		cgame= Games.findOne({_id: gameId});
		if(cgame && this.userId == cgame.owner){
			Games.remove({_id: gameId});
			return true;
		}
		return false;
	}
})

//setting an easy way to get the username
function getUserName() {
  user=Meteor.user();  
  if (user.profile && user.profile.name){
    return user.profile.name;
  }  
  return user.username;
};