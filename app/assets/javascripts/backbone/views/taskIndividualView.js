var app = app || {};

app.TaskIndividualView = Backbone.View.extend({
  tagName: 'p',

  events: {
    'click': 'popupEdit'
  },

  render: function() {
    var taskListTemplate = $('#taskListTemplate').html();
    var taskListHTML = _.template(taskListTemplate);
    this.$el.html(taskListHTML(this.model.toJSON()));
    this.$el.appendTo('#content');
  },

  popupEdit: function() {
    // Show the popup window first.
    $(".editTask").parentsUntil("body").show();
    $(".phaseBackground").show();

    // Render the new window with this model.
    var task = new app.EditTaskWindow({
      model: this.model
    });
    task.render();
  }
});