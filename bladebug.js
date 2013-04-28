if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to bladebug.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
  Meteor.startup(function () {
    $("body").append(Meteor.render(Template.parent({
      //jsVarToExpose:'I am a variable assigned to the parent.blade Template from the javascript file as an argument.'
    })) );
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
