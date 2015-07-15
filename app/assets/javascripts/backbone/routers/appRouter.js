var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'notebooks/:id/tasks': 'notebookTasks',
    'tasks/': 'allTasks'
  },

  home: function() {
    var navView = new app.NavView();
    navView.render();

    var allTasksView = new app.AllTasksView();
    allTasksView.render();

    var notebookView = new app.NotebookView();
    notebookView.render();

    var contentView = new app.ContentView();
    contentView.render();
  },

  notebookTasks: function(id) {
    console.log('appRouter.js - Loading Notebook ' + app.currentNotebook + ' view.');

    app.currentNotebook = id;

    var navView = new app.NavView();
    navView.render();

    var notebookView = new app.NotebookView();
    notebookView.render();

    var notebook = app.notebooks.get(id);
    console.log('appRouter.js - passing in this notebook', notebook);
    
    var notebookTasksView = new app.NotebookTasksView({model: notebook});
    notebookTasksView.render();

    var notebookTasksSetupView = new app.NotebookTasksSetupView({model: notebook});
    notebookTasksSetupView.render();
  },

  allTasks: function() {
    var navView = new app.NavView();
    navView.render();

    var allTasksView = new app.AllTasksView();
    allTasksView.render();

    var notebookView = new app.NotebookView();
    notebookView.render();

    console.log('appRouter.js - returning every task');
    var TasksView = new app.TasksView();
    TasksView.render();
  }
});