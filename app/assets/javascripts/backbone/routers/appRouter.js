var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'notebooks/:id': 'notebookTasks'
  },

  home: function() {
    var navView = new app.NavView();
    navView.render();

    var notebookView = new app.NotebookView();
    notebookView.render();

    var contentView = new app.ContentView();
    contentView.render();
  },

  notebookTasks: function() {
    var navView = new app.NavView();
    navView.render();

    var notebookView = new app.NotebookView();
    notebookView.render();
    
    var notebookTasksView = new app.NotebookTasksView();
    notebookTasksView.render();
  }
});