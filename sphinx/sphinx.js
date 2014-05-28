Scores = new Meteor.Collection('score');

Users = new Meteor.Collection('user');


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
