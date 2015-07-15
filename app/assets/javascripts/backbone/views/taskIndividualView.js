// The TaskIndividualView is used to list out each individual task as part of the main TaskView

var app = app || {};

app.TaskIndividualView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click': 'popupEdit'
  },

  render: function() {
    var thisTask = this.model.toJSON();

    var taskListTemplate = $('#taskListTemplate').html();
    var taskListHTML = _.template(taskListTemplate);
    this.$el.html(taskListHTML(thisTask));
    var $element = this.$el;

    console.log("this tasks' priority is", thisTask.priority);
    if (thisTask.priority === 1) {
      console.log('placing');
      $element.appendTo('#one');
    } else if (thisTask.priority === 2) {
      console.log('placing');
      $element.appendTo('#two');
    } else if (thisTask.priority === 3) {
      console.log('placing');
      $element.appendTo('#three');
    } else if (thisTask.priority === 4) {
      console.log('placing');
      $element.appendTo('#four');
    }
  },

  popupEdit: function() {
    // Show the popup window first.
    $(".editTask").parentsUntil("body").show();
    $(".phaseBackground").show();

    // Render the new window with this model.
    var task = new app.ShowTaskWindow({
      model: this.model
    });
    task.render();
  }
});