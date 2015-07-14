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
  }
});