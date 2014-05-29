//  ---------------Chat Functionality---------------
// assign collection to the `messages` helper in `chatBox` template
if (Meteor.isClient) {
     Meteor.startup(function(){
     $('.chat-container').hide();
     $('.user-reference').hide();
     $('#messages').hide();
     $('#chat-message').hide();
     $('#send').hide();
     $('.reveal-chat').show();
  })
};
Template.chatBox.helpers({
  "messages": function() {
    return chatCollection.find();
  }
});
 
// generate a value for the `user` helper in `chatMessage` template
Template.chatMessage.helpers({
  "user": function() {
    if(this.userId == 'me') {
      return this.userId;
    } else if(this.userId) {
      getUsername(this.userId);
      return Session.get('user-' + this.userId);
    } else {
      return 'anonymous-' + this.subscriptionId;
    }
  }
});
 
Template.revealChat.events({
  "click #reveal-chat": function(){
    $('.chat-container').show();
     $('.user-reference').show();
     $('#messages').show();
     $('#chat-message').show();
     $('#send').show();
     $('#close-chat').show();
     $('#reveal-chat').hide();
  }
 })
// when `Send Chat` clicked, add the typed chat message into the collection
Template.chatBox.events({
  "click #send": function() {
    var message = $('#chat-message').val();
    chatCollection.insert({
      userId: 'me',
      message: message
    });
    $('#chat-message').val('');
    // Adds the message to Meteor Stream
    chatStream.emit('chat',message);
  },
  "click #close-chat": function() {
    $('.chat-container').hide();
     $('.user-reference').hide();
     $('#messages').hide();
     $('#chat-message').hide();
     $('#send').hide();
     $('#close-chat').hide();
     $('#reveal-chat').show();
  }
});

chatStream.on('chat', function(message) {
  chatCollection.insert({
    //this is the userId of the sender
    userId: this.userId, 
    //this is the subscriptionId of the sender
    subscriptionId: this.subscriptionId, 
    message: message
  });
});

// Template.leaderboard.event({

// })
// ---------------------Game Functionality------------
if (Meteor.isClient) {
     Meteor.startup(function(){
     $('.character').hide();
    $('.generate').hide();
    $('.reset-game').hide();
    var placeArea = $('.placement');
   

  })
};
// Template.buttons.helpers({
//   "startGameHide" : function(){
//     $('.character').hide();
//     $('.generate').hide();
//     $('.reset-game').hide();
//   }
// });
var placeArea = $('.placement');
// TriviaCollection = new Meteor.Collection("triviaQuestions");

Template.buttons.events({
  "click .start-game": function(){
      $('.start-game').hide();
      $('.btn-kanir').show();
      $('.btn-devaio').show();
      $('.btn-shadow').show();


      // console.log("This start button was clicked!");
  },
  "click .btn-kanir": function(){
    $('.character').hide();
    $('.generate').show();
    $('.reset-game').show();
    Session.set("character","You are playing as Kanir");

  },
  "click .btn-devaio": function(){
    $('.character').hide();
    $('.generate').show();
    $('.reset-game').show();
    Session.set("character","You are playing as Devaio");
  },
  "click .btn-shadow": function(){
    $('.character').hide();
     $('.generate').show();
    $('.reset-game').show();
    Session.set("character","You are playing as Shadow");
  },
  "click .generate": function(){
    var placeArea = $('.placement');
    // console.log("Hey this is before the encounter")
    // console.log(Meteor.myFunctions.pickAMonster());
    $('.placement').append(Meteor.myFunctions.startEncounter());
    // console.log("Hey this is redonkalous")
  },
  "click .reset-game": function(){
    $('.character-display').empty();
    $('.encounter-string').empty();
    $('.placement').empty();
    $('.generate').hide();
    $('.reset-game').hide();
    $('.start-game').show();
    Session.set("character","");
  },

});

Template.monsters.events({
  "click .game-info": function(){
    console.log("clicked!")
    $('.game-information').hide();
    $('.game-info').hide();
  }
});
Template.locations.events({
  "click .game-info": function(){
    console.log("clicked!")
    $('.game-information').hide();
    $('.game-info').hide();
  }
});
Template.characters.events({
  "click .game-info": function(){
    console.log("clicked!")
    $('.game-information').hide();
    $('.game-info').hide();
  }
});

Template.profile.helpers({
  username: function() {return Meteor.user().username},
  character: function(){
    return Session.get('character')
    }
});



Template.user_profile.helpers({
  username: function() {return Meteor.user().username},
  character: function(){
    return currentCharacter.name
    }
});

Template.item.helpers({
   profileUrl: function() {
       var user = Meteor.users.findOne(this.userId, {reactive:false});
       if(user)
           return getProfileUrlById(user);
   }
});

getProfileUrlById = function(id) {

    return Meteor.absoluteUrl()+'users/' + id;

}
Template.submitTrivia.events({
  'click .add': function(){
    var new_question = $(".new_question").val();
    var new_difficulty = $(".difficulty").val();
    var new_correct = $(".correct").val();
    var new_wrong1 = $(".wrong1").val();
    var new_wrong2 = $(".wrong2").val();
    var new_wrong3 = $(".wrong3").val();
    var new_title = $(".new_title").val();


    TriviaCollection.insert(
        {
          "title": new_title,
          "question": new_question, 
          "difficulty": new_difficulty,
          "correct": [new_correct,true],
          "wrong": [[new_wrong1,false],[new_wrong2,false],[new_wrong3,false]]
        }
    )
     console.log("You've added a question!");
  },
  'click .test-btn': function(){
    var test = $('.test_val').val().toString().toUpperCase();
    console.log(test)
  }


});
