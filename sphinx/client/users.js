Accounts.ui.config({
	requestPermissions:{
		facebook:['user_likes'],
		github: ['user','repo'],
    google:['user']

	},
  passwordSignupFields: "USERNAME_AND_EMAIL"
});
// Finding other profiles, implement later
// getUsername = function(id) {
//   Meteor.subscribe('user-info', id);
//   Deps.autorun(function() {
//     var user = Meteor.users.findOne(id);
//     if(user) {
//       Session.set('user-' + id, user.username);
//     }
//   });
// }
Deps.autorun(function(){
  Meteor.subscribe('user-info');
})