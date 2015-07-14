var app = app || {};

app.TaskIndividualView = Backbone.View.extend({
  tagName: 'p',

  render: function() {
    var taskListTemplate = $('#taskListTemplate').html();
    var taskListHTML = _.template(taskListTemplate);
    this.$el.html(taskListHTML(this.model.toJSON()));
    this.$el.appendTo('#content');
  }
});