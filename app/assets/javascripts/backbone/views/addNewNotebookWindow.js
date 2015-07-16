var app = app || {};

app.AddNewNotebookWindow = Backbone.View.extend({
  el: '.editTask',

  render: function() { 
    this.$el.html('');
    var addNewNotebookWindowTemplate = $('#addNewNotebookWindowTemplate').html();
    var addNewTaskWindowHTML = _.template(addNewNotebookWindowTemplate);
    this.$el.html(addNewTaskWindowHTML());

    $('#closeOverlay').on('click', function() {
      $('.overlay').hide();
      $('.phaseBackground').hide();    
    });

    $('.phaseBackground').on('click', function() {
      $('.overlay').hide();
      $('.phaseBackground').hide();    
    });

    $('#addNotebook').on('click', function() {
      var name = $('.name').val();
      // Set's up the task data to save.
      var newNotebook = new app.Notebook({
        'name': name,
        'color': $('.color').val()
      });

      newNotebook.save().done(function() {
        $('.overlay').hide();
        $('.phaseBackground').hide();
        $('#status').html('<p>New Notebook: "' + name + '" successfully created.</p>');
        var notebookView = new app.NotebookView();
        notebookView.render();
      });
    });
  }
});