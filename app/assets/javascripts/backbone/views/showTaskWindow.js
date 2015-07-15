// The ShowTaskWindow is used for the popup window that appears when you click on a task in the #content div.

var app = app || {};

app.ShowTaskWindow = Backbone.View.extend({
 el: '.editTask',

 render: function() { 
    var model = this.model;

    this.$el.html('');

    var showTaskWindowTemplate = $('#showTaskWindow').html();
    var showTaskWindowHTML = _.template(showTaskWindowTemplate);
    this.$el.html(showTaskWindowHTML(this.model.toJSON()));

    $('#closeOverlay').on('click', function() {
      $('.overlay').hide();
      $('.phaseBackground').hide();    
    });

    $('#editTaskButton').on('click', function() {
      var task = new app.EditTaskWindow({
        model: model
      });
      task.render();
    });

    $('#deleteTaskButton').on('click', function() {
      $('.overlay').hide();
      $('.phaseBackground').hide();  

      model.destroy().done(function() {
        console.log('task deleted.');
        var notebook = app.notebooks.get(app.currentNotebook);
        var notebookTasksView = new app.NotebookTasksView({model: notebook});
        notebookTasksView.render();
      });
    })


  }
});