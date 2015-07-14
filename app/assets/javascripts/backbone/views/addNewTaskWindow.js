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
  }
});