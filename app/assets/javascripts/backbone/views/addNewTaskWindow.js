var app = app || {};

app.AddNewTaskWindow = Backbone.View.extend({
  el: '.editTask',

  render: function() {
    this.$el.html('');

    var addNewTaskWindowTemplate = $('#addNewTaskWindowTemplate').html();
    var addNewTaskWindowHTML = _.template(addNewTaskWindowTemplate);
    this.$el.html(addNewTaskWindowHTML());

    $('#closeOverlay').on('click', function() {
      $('.overlay').hide();
      $('.phaseBackground').hide();
    });

    $('#addTask').on('click', function() {
      // Set's up the task data to save.
      var newTask = new app.Task({
        'name': $('.name').val(),
        'due': $('.due').val(),
        'location': $('.location').val(),
        'priority': $('.priority').val(),
        'notebook_id': app.currentNotebook
      });

      newTask.save().done(function(data) {
        $('.overlay').hide();
        $('.phaseBackground').hide();
        
        var notebook = app.notebooks.get(app.currentNotebook);
        console.log('addNewTaskWindow.js - getting this notebook', notebook);
        var notebookTasksView = new app.NotebookTasksView({model: notebook});
        notebookTasksView.render();
        var notebookTasksSetupView = new app.NotebookTasksSetupView({model: notebook});
        notebookTasksSetupView.render();
      });
    });
  }
});
