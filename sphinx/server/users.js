Meteor.publish("user-info", function(id) {
  return Meteor.users.find({_id: id}, {fields: {username: 1}});
});
Meteor.publish(null, function() {
    console.log("Before the if statement:")
    
    //returns undefined if not logged in so check if logged in first
    if(this.userId) {
        var user = Meteor.users.findOne(this.userId);
       console.log("Inside the if statement:",user)
        //var user is the same info as would be given in Meteor.user();
    }
    console.log("Outside the if statement:",user.username)
});