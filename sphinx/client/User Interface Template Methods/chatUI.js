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