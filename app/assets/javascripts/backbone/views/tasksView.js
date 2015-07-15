// TasksView lists out all the tasks in the main window if the "all tasks" option is selected.

var app = app || {};

app.TasksView = Backbone.View.extend({
  el: '#content',

  render: function() {
    this.$el.html('');

    var allTasksTemplate = $('#allTasksTemplate').html();
    var allTasksHTML = _.template(allTasksTemplate);
    this.$el.html(allTasksHTML());
    
    this.tasks = new app.Tasks();
    this.tasks.fetch();
  }
});