// AddNewTaskView controls the link to add a new task in the content panel.

var app = app || {};

app.AddNewTaskView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click': 'addNewTaskWindow'
  },

  render: function() {
    var addNewTaskTemplate = $('#addNewTaskTemplate').html();
    var addNewTaskHTML = _.template(addNewTaskTemplate);
    var toAppend = this.$el.html(addNewTaskHTML());
    $('#content').append(toAppend);
  },

  addNewTaskWindow: function() {
    $(".editTask").parentsUntil("body").show();
    $(".phaseBackground").show();

    // Render the new window with this model.
    var thistask = new app.AddNewTaskWindow({});
    thistask.render();
  }
});