var app = app || {};

app.NotebookTasksView = Backbone.View.extend({
  el: '#content',

  render: function() {
    this.$el.html('');
    
    // These 3 lines just put the notebook name at the top of the view.
    var notebookTasksTemplate = $('#notebookTasksTemplate').html();
    var notebookTasksHTML = _.template(notebookTasksTemplate);
    this.$el.html(notebookTasksHTML(this.model.toJSON()));

    this.tasks = new app.Tasks({notebook_id: this.model.get('id')});
    this.tasks.fetch().done(function() {
      // These 2 lines put the Add New Task link at the bottom of the list.
      var addNewTaskView = new app.AddNewTaskView();
      addNewTaskView.render();
    });
  }
});