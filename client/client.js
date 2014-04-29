/**
* Templates
*/
Template.messages.messages = function () {
  return Messages.find({}, { sort: { time: -1 }});
}


Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      if (Meteor.user())
        var name = Meteor.user().profile.name;

      if (message.value != '') {
        Messages.insert({
          name: name,
          message: message.value,
          time: Date.now(),
        });

        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
}

Template._loginButtonsLoggedInDropdown.events({
  'click #login-buttons-edit-profile': function(event) {
    event.stopPropagation();
    Template._loginButtons.toggleDropdown();
    Router.go('profileEdit');
  }
});

Accounts.ui.config({ passwordSignupFields: 'USERNAME_ONLY' });