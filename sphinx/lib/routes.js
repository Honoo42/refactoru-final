Router.onBeforeAction('loading');
// Router.configure({
// 	layoutTemplate:'layout'
// });

Router.map(function(){
	// this.route('home',{path:'/'});
	this.route('about');
	this.route('characters');
	this.route('monsters');
	this.route('locations');
	this.route('profile', {
	    path:'/profile',
	    data: function() {return Meteor.user();}
	});

	this.route('user_profile', {
		path: '/users/:_id',
		waitOn: function() {
		        return Meteor.subscribe('singleUser', this.params._id);
		},
		data: function() { 
			    var findById = Meteor.users.findOne(this.params._id);
			    if (typeof findById !== "undefined") {
			 Router.go(getProfileUrlById(findById),  {replaceState: true});
			    }
		}
	});
	this.route('admin', {
        path:'/admin',
        template: 'accountsAdmin',
        onBeforeAction: function() {
            if (Meteor.loggingIn()) {
                this.render(this.loadingTemplate);
            } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
                console.log('redirecting');
                this.redirect('/');
            }
        }
    });	

});

// adds route to user profile

