var app = app || {};

app.NotebookTasksSetupView = Backbone.View.extend({
  el: '#content',

  render: function() {
    var notebookTasksSetupTemplate = $('#notebookTasksSetupTemplate').html();
    var notebookTasksSetupHTML = _.template(notebookTasksSetupTemplate);
    this.$el.append(notebookTasksSetupHTML());

    this.tasks = new app.Tasks({notebook_id: this.model.get('id')});
    this.tasks.fetch().done(function() {
      app.tasks = this.tasks;
      // These 2 lines put the Add New Task link at the bottom of the list.
      var addNewTaskView = new app.AddNewTaskView();
      addNewTaskView.render();
    });
  }
});