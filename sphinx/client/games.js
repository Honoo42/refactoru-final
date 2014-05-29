//Making games collection available for clients
Games = new Meteor.Collection('games');

Meteor.subscribe("games");
Meteor.subscribe("directory");

//Function getting the user email so we can get the gravatar later
function userEmail(userId) {   
  user=Meteor.users.findOne(userId);
  if(user!=null){
    if (user.emails && user.emails.length)
      return user.emails[0].address;   
    if (user.services && user.services.github && user.services.github.email)          
      return user.services.github.email;    
    return null;
  }
  else{
    return null;
  }            
}

//Function checking the game status so it can be judged if both players already set a move, it runs in an interval for the owner every time he plays
function checkGame(){
  if(Session.get('current_game')){
    Meteor.call('judgeGame',Session.get('current_game'),function(error,result){
      if(result){
        deleteInterval()        
        Meteor.setTimeout(function(){
          Meteor.call('resetGame',Session.get('current_game'));
        },3000);        
      }      
    });
  }
}

//Function clearing intervals if the user has any running
function deleteInterval(){
  if(Session.get('current_interval')){
     Meteor.clearInterval(Session.get('current_interval'));
     Session.set('current_interval', null);
  }
}

//Helper getting the gravatar image url for users
Handlebars.registerHelper('user_image', function(userid) {         
  email=userEmail(userid);
  image='';
  if(email!=null){
    image=Gravatar.imageUrl(email); 
  }    
  return image;
});


//Events for the home template
Template.home.events({
  //Defining click for the button creating a new game
 'click #create_game': function () {
    Meteor.call('createGame',function(error,result){
      if(!error){
        Session.set('current_game', result);         
        Meteor.call('setCurrentGame',result);
        Router.go(Router.path('game', {_id: result}));
      }
    });
  },
  //Defining click for the back to current game button
  'click #back_game': function(){
    deleteInterval();
    Session.set('current_interval', Meteor.setInterval(checkGame,4000));
    Router.go(Router.path('game', {_id: Session.get('current_game')}));
  },
  //Defining click for the join game button
  'click .join': function(){
    gameId=this._id;
    Meteor.call('joinGame',this._id,function(error,result){
      if(result){
        Meteor.call('setCurrentGame',gameId);
        Session.set('current_game', gameId);
        Router.go(Router.path('game', {_id: gameId}));
      }
    });       
  },
  //Defining click for the delete game button
  'click .delete': function(){
    Meteor.call('deleteGame',this._id,function(error,result){
      if(result){
        Meteor.call('setCurrentGame',null);
        Session.set('current_game', null);
      }
    });    
  },
  //Defining click for the watch game button
  'click .watch': function(){
    Router.go(Router.path('game', {_id: this._id}));
  },  
});

//Events for the game template
Template.game.events({
  //Defining click for move buttons
  'click .gamebutton': function(e){
    Meteor.call('setMove',this._id,e.currentTarget.id);
    deleteInterval();  
    Session.set('current_interval', Meteor.setInterval(checkGame,4000));          
  },
  //Defining click for end game button
  'click #end_game': function(){
    deleteInterval();
    Meteor.call('setCurrentGame',null);
    Session.set('current_game', null);
    Meteor.call('endGame',this._id);
    Router.go('/');
  },
  //Defining click for back home button
  'click #back_home': function(){
    deleteInterval();
    Meteor.call('setCurrentGame',null);
    Session.set('current_game', null);    
    Router.go('/');
  }
});