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

    $('.phaseBackground').on('click', function() {
      $('.overlay').hide();
      $('.phaseBackground').hide();    
    });

    $('#editNotebookButton').on('click', function() {
      var notebook = new app.EditNotebookWindow({
        model: model
      });
      notebook.render();
    });

    $('#deleteNotebookButton').on('click', function() {
      var name = $('.editTask h3').html();
      $('.overlay').hide();
      $('.phaseBackground').hide();  

      $('#status').html('<p>Notebook: "' + name + '" has been deleted.</p>');

      var modelsToDelete = new app.Tasks({notebook_id: parseInt(app.currentNotebook)});
      modelsToDelete.fetch().done(function(data) {
        var modelToDelete;
        while (modelToDelete = modelsToDelete.first()) {
          modelToDelete.destroy();
        };

        model.destroy().done(function() {
          app.router.navigate('/', true);
          // console.log('task deleted.');
          // var notebook = app.notebooks.get(app.currentNotebook);
          // var notebookTasksView = new app.NotebookTasksView({model: notebook});
          // notebookTasksView.render();
        });
      });


    })


  }
});