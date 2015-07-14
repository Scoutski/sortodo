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
  }
});