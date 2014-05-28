if (Meteor.isServer) {
    Meteor.startup(function () {
        // bootstrap the admin user if they exist -- You'll be replacing the id later
        if (Meteor.users.findOne("d6zcrAMzMa5Cug3mG"))
            Roles.addUsersToRoles("d6zcrAMzMa5Cug3mG", ['admin']);

        // create a couple of roles if they don't already exist (THESE ARE NOT NEEDED -- just for the demo)
        if(!Meteor.roles.findOne({name: "secret"}))
            Roles.createRole("secret");

        if(!Meteor.roles.findOne({name: "double-secret"}))
            Roles.createRole("double-secret");
    });
}

if (Meteor.isClient) {
    Template.admin.helpers({
        // check if user is an admin
        isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        }
    })
}