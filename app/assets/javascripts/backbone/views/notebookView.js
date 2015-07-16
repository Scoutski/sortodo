var app = app || {};

app.NotebookView = Backbone.View.extend({
  el: "#notebook",

  render: function(id) {

    id = id || 0;

    var allTasksView = new app.AllTasksView();
    allTasksView.render();

    var previousNotebooks = app.notebooks

    app.notebooks = new app.Notebooks();
    app.notebooks.fetch().done(function() {
      if (previousNotebooks !== app.notebooks) {
        var addNewNotebookView = new app.AddNewNotebookView();
        addNewNotebookView.render();

        if (id > 0) {
          var notebook = app.notebooks.get(id);

          var notebookTasksView = new app.NotebookTasksView({
            model: notebook
          });
          notebookTasksView.render();

          var notebookTasksSetupView = new app.NotebookTasksSetupView({
            model: notebook
          });
          notebookTasksSetupView.render();
        }
      }

    });

    // for (var i = 0; i < app.notebooks.models.length; i++) {
    //   var notebook = new app.NotebookListView({
    //     model: app.notebooks.models[i]
    //   });
    //   notebook.render();
    // };
  },
});

// var notebookTasksSetupTemplate = $('#notebookTasksSetupTemplate').html();
// var notebookTasksSetupHTML = _.template(notebookTasksSetupTemplate);
// this.$el.append(notebookTasksSetupHTML());

// this.tasks = new app.Tasks({notebook_id: this.model.get('id')});
// this.tasks.fetch().done(function() {
//   app.tasks = this.tasks;
//   // These 2 lines put the Add New Task link at the bottom of the list.
//   var addNewTaskView = new app.AddNewTaskView();
//   addNewTaskView.render();
// });
