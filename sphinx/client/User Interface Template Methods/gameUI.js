// ---------------------Game Functionality------------
if (Meteor.isClient) {
     Meteor.startup(function(){
     $('.character').hide();
    $('.generate').hide();
    $('.reset-game').hide();
    var placeArea = $('.placement');
   

  })
};
// Template.buttons.helpers({
//   "startGameHide" : function(){
//     $('.character').hide();
//     $('.generate').hide();
//     $('.reset-game').hide();
//   }
// });
var placeArea = $('.placement');
// TriviaCollection = new Meteor.Collection("triviaQuestions");

Template.buttons.events({
  "click .start-game": function(){
      $('.start-game').hide();
      $('.btn-kanir').show();
      $('.btn-devaio').show();
      $('.btn-shadow').show();


      // console.log("This start button was clicked!");
  },
  "click .btn-kanir": function(){
    $('.character').hide();
    $('.generate').show();
    $('.reset-game').show();
    Session.set("character","You are playing as Kanir");

  },
  "click .btn-devaio": function(){
    $('.character').hide();
    $('.generate').show();
    $('.reset-game').show();
    Session.set("character","You are playing as Devaio");
  },
  "click .btn-shadow": function(){
    $('.character').hide();
     $('.generate').show();
    $('.reset-game').show();
    Session.set("character","You are playing as Shadow");
  },
  "click .generate": function(){
    var placeArea = $('.placement');
    // console.log("Hey this is before the encounter")
    // console.log(Meteor.myFunctions.pickAMonster());
    $('.placement').append(Meteor.myFunctions.startEncounter());
    // console.log("Hey this is redonkalous")
  },
  "click .reset-game": function(){
    $('.character-display').empty();
    $('.encounter-string').empty();
    $('.placement').empty();
    $('.generate').hide();
    $('.reset-game').hide();
    $('.start-game').show();
    Session.set("character","");
  },

});

Template.monsters.events({
  "click .game-info": function(){
    console.log("clicked!")
    $('.game-information').hide();
    $('.game-info').hide();
  }
});
Template.locations.events({
  "click .game-info": function(){
    console.log("clicked!")
    $('.game-information').hide();
    $('.game-info').hide();
  }
});
Template.characters.events({
  "click .game-info": function(){
    console.log("clicked!")
    $('.game-information').hide();
    $('.game-info').hide();
  }
});