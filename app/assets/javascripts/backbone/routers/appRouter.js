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
    app.currentNotebook = id;

    var navView = new app.NavView();
    navView.render();

    var notebookView = new app.NotebookView();
    notebookView.render(id);

    // This isn't able to be defined because the fetch inside the previous render isn't done...
  },

  allTasks: function() {
    app.currentNotebook = 0;
    
    var navView = new app.NavView();
    navView.render();

    var allTasksView = new app.AllTasksView();
    allTasksView.render();

    var notebookView = new app.NotebookView();
    notebookView.render();

    var TasksView = new app.TasksView();
    TasksView.render();
  }
});