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