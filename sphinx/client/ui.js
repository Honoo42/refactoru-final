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
Template.buttons.helpers({
  "startGameHide" : function(){
    $('.character').hide();
    $('.generate').hide();
    $('.reset-game').hide();
  }
});
Template.buttons.events({
  "click .start-game": function(){
      $('.start-game').hide();
      $('.btn-kanir').removeClass('hidden');
      $('.btn-devaio').removeClass('hidden');
      $('.btn-shadow').removeClass('hidden');

      console.log("This start button was clicked!");
  },
  "click .btn-kanir": function(){
    $('.character').hide();
    $('.generate').removeClass('hidden');
    $('.reset-game').removeClass('hidden');

  },
  "click .btn-devaio": function(){
    $('.character').hide();
    $('.generate').removeClass('hidden');
    $('.reset-game').removeClass('hidden');

  },
  "click .btn-shadow": function(){
    $('.character').hide();
    $('.generate').removeClass('hidden');
    $('.reset-game').removeClass('hidden');

  }
});