var app = app || {};

app.TaskIndividualView = Backbone.View.extend({
  tagName: 'p',

  render: function() {
    var taskListTemplate = $('#taskListTemplate').html();
    var taskListHTML = _.template(taskListTemplate);
    var toAppend = this.$el.html(taskListHTML(this.model.toJSON()) );
    $('#content').append( toAppend );
  }
});