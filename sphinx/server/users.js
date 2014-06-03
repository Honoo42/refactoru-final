Meteor.publish("user-info", function(id) {
  return Meteor.users.find({_id: id}, {fields: {username: 1}});
});
Meteor.publish(null, function() {
    
    //returns undefined if not logged in so check if logged in first
    if(this.userId) {
        var user = Meteor.users.findOne(this.userId);
        //var user is the same info as would be given in Meteor.user();
    }
});
// allows users to see eachother's profiles
Meteor.publish('singleUser', function(userId) {
       return Meteor.users.find(userId);
    });
// On account creation, checks to see if another account with the same email exists
// If it does, it merges the two accounts together
Accounts.onCreateUser (function(options,user) {
  console.log(options, user);
  user.city = null
  user.networks = []
  user.attending =[]
  user.profile = user.profile || {}
  if (user.services != null){
    service = _.keys(user.services)[0]
  }
  var oldUser;
   email = user.services[service].email
    if (email != null){
      oldUser = Meteor.users.findOne({"emails.address": email}) 
    }
    if (oldUser){
        oldUser.services = oldUser.services || {}
        if (service == "google" || service == "facebook" || service == "github"){
          oldUser.services[service] = user.services[service]
          Meteor.users.remove(oldUser._id)
          user = oldUser
        }
        else{
          if (service == "google" || service == "facebook" || service == "github"){
            if (user.services[service].email != null){
            user.emails = [{address: user.services[service].email, verified: true}]
            }
            else{
            throw new Meteor.Error(500, service + " account has no email attached")
          user.profile.name = user.services[service].name
            }
          }
          

        }
    }
    return user
})