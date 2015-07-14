var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'notebooks/:id/tasks': 'notebookTasks'
  },

  home: function() {
    var navView = new app.NavView();
    navView.render();

    var notebookView = new app.NotebookView();
    notebookView.render();

    var contentView = new app.ContentView();
    contentView.render();
  },

  notebookTasks: function(id) {
    var navView = new app.NavView();
    navView.render();

    var notebookView = new app.NotebookView();
    notebookView.render();

    var notebook = app.notebooks.get(id);
    console.log('appRouter.js - passing in this notebook', notebook);
    var notebookTasksView = new app.NotebookTasksView({model: notebook});
    notebookTasksView.render();
  }
});