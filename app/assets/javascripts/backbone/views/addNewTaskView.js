// AddNewTaskView controls the link to add a new task in the content panel.

var app = app || {};

app.AddNewTaskView = Backbone.View.extend({
  el: '#content',

  events: {
    'click': 'addNewTaskWindow'
  },

  render: function() {
    var addNewTaskTemplate = $('#addNewTaskTemplate').html();
    var addNewTaskHTML = _.template(addNewTaskTemplate);
    this.$el.append(addNewTaskHTML());
  },

  addNewTaskWindow: function() {
    $(".editTask").parentsUntil("body").show();
    $(".phaseBackground").show();

    // Render the new window with this model.
    var task = new app.AddNewTaskWindow({});
    task.render();
  }
});