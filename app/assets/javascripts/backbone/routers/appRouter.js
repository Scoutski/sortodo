var app = app || {};

app.AppRouter = Backbone.Router.extend({

  routes: {
    '': 'home'
  },

  home: function() {
    var navView = new app.NavView();
    navView.render();

    var notebookView = new app.NotebookView();
    notebookView.render();

    var contentView = new app.ContentView();
    contentView.render();
  },
});