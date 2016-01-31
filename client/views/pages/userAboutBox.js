Template.userAboutBox.events({
  'mouseenter #update-picture-icon': function() {
    $('.update-picture a').fadeIn();
  },
  'mouseleave .update-picture': function() {
    $('.update-picture a').fadeOut();
  }
});