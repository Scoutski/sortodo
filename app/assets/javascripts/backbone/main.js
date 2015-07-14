var app = app || {} ;

_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

$(document).ready(function() {
  // Hides all the overlays by default
  $('.overlay').hide();
  $('.phaseBackground').hide();

  app.notebooks = new app.Notebooks();

  app.notebooks.fetch().done(function() {
    app.router = new app.AppRouter();
    Backbone.history.start();
  });

  $('#closeOverlay').on('click', function() {
    $('.overlay').hide();
    $('.phaseBackground').hide();    
  });
});