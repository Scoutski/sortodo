// The EditTaskWindow is used for the popup window that appears when you click on a task in the #content div.

var app = app || {};

app.EditTaskWindow = Backbone.View.extend({
  el: '.editTask',

  render: function() {
    this.$el.html('');

    var editTaskWindowTemplate = $('#editTaskWindow').html();
    var editTaskWindowHTML = _.template(editTaskWindowTemplate);
    this.$el.html(editTaskWindowHTML(this.model.toJSON()));

    $('#closeOverlay').on('click', function() {
      $('.overlay').hide();
      $('.phaseBackground').hide();    
    });
  }
});