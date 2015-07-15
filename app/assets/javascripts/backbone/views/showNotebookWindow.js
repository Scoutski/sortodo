// The ShowTaskWindow is used for the popup window that appears when you click on a task in the #content div.

var app = app || {};

app.ShowNotebookWindow = Backbone.View.extend({
 el: '.editTask',

 render: function() { 
    var model = this.model;

    this.$el.html('');

    var showNotebookWindowTemplate = $('#showNotebookWindow').html();
    var showNotebookWindowHTML = _.template(showNotebookWindowTemplate);
    this.$el.html(showNotebookWindowHTML(this.model.toJSON()));

    $('#closeOverlay').on('click', function() {
      $('.overlay').hide();
      $('.phaseBackground').hide();    
    });

    $('#editNotebookButton').on('click', function() {
      var notebook = new app.EditNotebookWindow({
        model: model
      });
      Notebook.render();
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