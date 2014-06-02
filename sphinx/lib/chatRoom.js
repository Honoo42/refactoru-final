// Chat = new Meteor.Stream('chat');

// if(Meteor.isClient) {
//   Chat.emit('join', 'meteor-talk-room');
//   sendMessage = function(message) {
//     Chat.emit('message', message, 'meteor-talk-room');
//   }
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