//  ---------------Chat Functionality---------------
// assign collection to the `messages` helper in `chatBox` template
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
Template.buttons.events({
  "click .start-game": function(){
      $('.start-game').hide();
      $('.btn-kanir').show();
      $('.btn-devaio').show();
      $('.btn-shadow').show();

      console.log("This start button was clicked!");
  },
  "click .btn-kanir": function(){
    $('.character').hide();
    $('.generate').show();
    $('.reset-game').show();

  },
  "click .btn-devaio": function(){
    $('.character').hide();
    $('.generate').show();
    $('.reset-game').show();

  },
  "click .btn-shadow": function(){
    $('.character').hide();
     $('.generate').show();
    $('.reset-game').show();

  },
  "click .generate": function(){
    var placeArea = $('.placement');
    console.log("Hey this is before the encounter")
    console.log(Meteor.myFunctions.pickAMonster());
    $('.placement').append(Meteor.myFunctions.startEncounter());
    console.log("Hey this is redonkalous")
  },
  "click .reset-game": function(){
    $('.character-display').empty();
    $('.encounter-string').empty();
    $('.placement').empty();
    $('.generate').hide();
    $('.reset-game').hide();
    $('.start-game').show();
  }
});