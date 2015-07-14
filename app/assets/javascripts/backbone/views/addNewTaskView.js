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
    console.log('you tried to add a new task!')
  }
});