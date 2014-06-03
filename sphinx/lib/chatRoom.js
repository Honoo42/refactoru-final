
// chatStream = new Meteor.Stream('chat-stream');
// Chat = new Meteor.Stream('chat');

// if(Meteor.isClient) {
//   chatCollection = new Meteor.Collection(null);
//   Chat.emit('join', 'meteor-talk-room');
//   sendMessage = function(message) {
//     Chat.emit('message', message, 'meteor-talk-room');
//   }
//   Meteor.subscribe("message")
// }

// if(Meteor.isServer) {
//   var subscriptionGroup = {};
//   Chat.on('join', function(group) {
//     var subscriptionId = this.subscriptionId;
//     subscriptionGroup[subscriptionId] = group;

//     this.onDisconnect = function() {
//       delete subscriptionGroup[subscriptionId];
//     };
//   });

//   Chat.permission.write(function() {
//     true;
//   });

//   Chat.permission.read(function(event, message, group) {
//     var myGroup = subscriptionGroup[this.subscriptionId];
//     return event == 'message' && myGroup == group;
//   }, false);
// }

var Messages = new Meteor.Collection("messages");

if(Meteor.isServer) {
    Meteor.publish("messages", function(channel_name) {
        return Messages.find({channel: channel_name});
    });
}

if(Meteor.isClient) {
    Session.set("current_channel", "trivia_lovers_channel");

    Meteor.autorun(function(){
      Meteor.subscribe("messages", Session.get("current_channel"));
    })
      
}