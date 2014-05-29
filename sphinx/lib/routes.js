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
	// creates the page for the admin to view all users
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
    // creates a route to a form to submit new trivia questions to the database
    // that is only accessible by being logged in with an admin account
    // this.route('trivia', {
    // 	path:'/submit_trivia',
    // 	template: 'submitTrivia',
    // 	onBeforeAction: function() {
    //         if (Meteor.loggingIn()) {
    //             this.render(this.loadingTemplate);
    //         } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
    //             console.log('redirecting');
    //             this.redirect('/');
    //         }
    //     }
    // });

});

// adds route to user profile

