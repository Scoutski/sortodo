var app = app || {};

app.NotebookTasksView = Backbone.View.extend({
  el: '#content',

  render: function() {
    this.$el.html('');

    for (var i = 0; i < app.tasks.models.length; i++) {
      var task = new app.TaskIndividualView({
        model: app.tasks.models[i]
      });
      task.render();
    }
  }
});