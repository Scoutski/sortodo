var app = app || {} ;

_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

$(document).ready(function() {
  app.notebooks = new app.Notebooks();
  app.tasks = new app.Tasks();

  app.notebooks.fetch().done(function() {
    app.tasks.fetch().done(function() {
      app.router = new app.AppRouter();
      Backbone.history.start();
    });
  });
});