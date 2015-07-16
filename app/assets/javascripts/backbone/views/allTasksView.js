var app = app || {};

app.AllTasksView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click': 'allTasks'
  },

  render: function() {
    $('#notebook').html('');

    var allTasksViewTemplate = $('#allTasksView').html();
    var allTasksViewHTML = _.template(allTasksViewTemplate);
    var toAppend = this.$el.html(allTasksViewHTML());
    $('#notebook').append( toAppend );
  },

    // TODO: Have this function only appear on the #notebookView that is rendered, not the additional NotebookListView items.
  allTasks: function() {
    app.router.navigate('tasks/', true);
  }
});