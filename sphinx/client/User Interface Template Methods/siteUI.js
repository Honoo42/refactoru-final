Meteor.startup(function(){
     $('.character').hide();
    $('.generate').hide();
    $('.reset-game').hide();
    var placeArea = $('.placement');

  Template.profile.helpers({
  username: function() {
    Session.set('user', Meteor.user().username);
    return Session.get('user')
  },
  character: function(){
    return Session.get('character')
  },
  email: function(){
    Session.set('email',Meteor.user().emails[0].address)
    return Session.get('email')
  },
  monsters: function(){
    return Meteor.user().monstersDefeated
  }
  // badges: function(){
  //   return Meteor.user().badges
  // }
});

   

})

// Template.leaderboard.event({

// })

if (Meteor.isClient) {
    Template.submitItem.events = {
        "click .open-modal" : function(e,t) {
        e.preventDefault();
        $("#submitModal").modal("show");
        }
    };
    Template.charactersItem.events = {
        "click .open-modal" : function(e,t) {
        e.preventDefault();
        $("#charactersModal").modal("show");
        }
    };
   
    Template.aboutItem.events = {
        "click .open-modal" : function(e,t) {
        e.preventDefault();
        $("#aboutModal").modal("show");
        }
    };
    Template.profileItem.events = {
        "click .open-modal" : function(e,t) {
        e.preventDefault();
        $("#profileModal").modal("show");
        }
    };
    Template.adminItem.events = {
        "click .open-modal" : function(e,t) {
        e.preventDefault();
        $("#adminModal").modal("show");
        }
    };
    Template.monstersItem.events = {
        "click .open-modal" : function(e,t) {
        e.preventDefault();
        $("#monstersModal").modal("show");
        }
    };
    Template.navbar.events = {
        "click .charModal" : function(e,t) {
        e.preventDefault();
        $("#charactersModal").modal("show");
        },
        "click .monModal" : function(e,t) {
        e.preventDefault();
        $("#monstersModal").modal("show");
        },
         "click .proModal" : function(e,t) {
        e.preventDefault();
        $("#profileModal").modal("show");
        },
        "click .adModal" : function(e,t) {
        e.preventDefault();
        $("#adminModal").modal("show");
        },
        "click .subModal" : function(e,t) {
        e.preventDefault();
        $("#submitModal").modal("show");
        },
    //     // "click .locModal" : function(e,t) {
    //     // e.preventDefault();
    //     // $("#locationModal").modal("show");
    //     // },
        "click .aboModal" : function(e,t) {
        e.preventDefault();
        $("#aboutModal").modal("show");
        }
    }
};


Template.user_profile.helpers({
  username: function() {return Meteor.user().username},
  character: function(){
    return currentCharacter.name
    }
});

Template.item.helpers({
   profileUrl: function() {
       var user = Meteor.users.findOne(this.userId, {reactive:false});
       if(user)
           return getProfileUrlById(user);
   }
});

getProfileUrlById = function(id) {

    return Meteor.absoluteUrl()+'users/' + id;

}
Template.submitTrivia.events({
  'click .add': function(){
    var new_question = $(".new_question").val();
    var new_difficulty = $(".difficulty").val();
    var new_correct = $(".correct").val();
    var new_wrong1 = $(".wrong1").val();
    var new_wrong2 = $(".wrong2").val();
    var new_wrong3 = $(".wrong3").val();
    var new_title = $(".new_title").val();


    TriviaCollection.insert(
        // {$push:
          {
          "title": new_title,
          "question": new_question, 
          "difficulty": new_difficulty,
          "correct": [new_correct,true],
          "wrong": [[new_wrong1,false],[new_wrong2,false],[new_wrong3,false]]
          }
        // }

    )
     console.log("You've added a question!");
  },
  'click .test-btn': function(){
    var test = $('.test_val').val().toString().toUpperCase();
    console.log(test)
  }


});
  Template.profile.helpers({
  username: function() {
    return Session.get('user')
  },
  character: function(){
    return Session.get('character')
  },
  email: function(){
    return Session.get('email')
  },
  monsters: function(){
    return Session.get('monstersDefeated')
  }
  // badges: function(){
  //   return Meteor.user().badges
  // }
});
