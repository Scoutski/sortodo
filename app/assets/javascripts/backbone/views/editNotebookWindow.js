// The EditTaskWindow is used for the popup window that appears when you click on a task in the #content div.

var app = app || {};

app.EditNotebookWindow = Backbone.View.extend({
  el: '.editTask',

  render: function() {
    this.$el.html('');

    var editNotebookWindowTemplate = $('#editNotebookWindow').html();
    var editNotebookWindowHTML = _.template(editNotebookWindowTemplate);
    this.$el.html(editNotebookWindowHTML(this.model.toJSON()));

    $('#closeOverlay').on('click', function() {
      $('.overlay').hide();
      $('.phaseBackground').hide();    
    });
  }
});