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
  $(".editTask").parentsUntil("body").show();
  $(".phaseBackground").show();
  }
});