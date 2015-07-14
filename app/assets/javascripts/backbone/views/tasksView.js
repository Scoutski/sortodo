var app = app || {};

app.TasksView = Backbone.View.extend({
  el: '#content',

  render: function() {
    this.$el.html('');
    this.tasks = new app.Tasks();
    this.tasks.fetch();
  }
});