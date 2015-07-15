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

    $('#addNotebook').on('click', function() {
      // Set's up the task data to save.
      var newNotebook = new app.Notebook({
        'name': $('.name').val(),
        'color': $('.color').val()
      });

      newNotebook.save().done(function(data) {
        $('.overlay').hide();
        $('.phaseBackground').hide();
        console.log(data);
        var route = Backbone.history.fragment;
        app.router.navigate(route, true);
      });
    });
  }
});