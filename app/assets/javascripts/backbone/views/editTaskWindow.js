// The EditTaskWindow is used for the popup window that appears when you click on a task in the #content div.

var app = app || {};

app.EditTaskWindow = Backbone.View.extend({
  el: '.editTask',

  render: function() {
    var model = this.model;
    this.$el.html('');

    var editTaskWindowTemplate = $('#editTaskWindow').html();
    var editTaskWindowHTML = _.template(editTaskWindowTemplate);
    this.$el.html(editTaskWindowHTML(model.toJSON()));

    $('#closeOverlay').on('click', function() {
      $('.overlay').hide();
      $('.phaseBackground').hide();    
    });

    $('#updateTask').on('click', function() {
      var name = $('.name').val();
      // Set's up the task data to save.
      var currentTask = {
        'name': name,
        'location': $('.location').val(),
        'priority': $('.priority').val(),
      };

      console.log('updating task...', currentTask);
      
      model.save(currentTask, {patch: true}).done(function(data) {
        $('.overlay').hide();
        $('.phaseBackground').hide();

        $('#status').html('<p>Task: "' + name + '" successfully udpated.</p>');
        
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