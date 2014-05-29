Accounts.ui.config({
	requestPermissions:{
		facebook:['user_likes'],
		github: ['user','repo'],
		twitter: ['user']

	},
  passwordSignupFields: "USERNAME_AND_EMAIL"
});
getUsername = function(id) {
  Meteor.subscribe('user-info', id);
  Deps.autorun(function() {
    var user = Meteor.users.findOne(id);
    if(user) {
      Session.set('user-' + id, user.username);
    }
  });
}
