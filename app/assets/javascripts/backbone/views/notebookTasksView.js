var app = app || {};

app.NotebookTasksView = Backbone.View.extend({
  p: 'div',

  events: {
    'click': 'showNotebookWindow'
  },

  render: function() {
    $('#content').html('');
    
    // These 3 lines just put the notebook name at the top of the view.
    var notebookTasksTemplate = $('#notebookTasksTemplate').html();
    var notebookTasksHTML = _.template(notebookTasksTemplate);
    var toAppend = this.$el.html(notebookTasksHTML(this.model.toJSON()));
    $('#content').append(toAppend);
  },

  showNotebookWindow: function() {
    // Show the popup window first.
    $(".editTask").parentsUntil("body").show();
    $(".phaseBackground").show();

    // Render the new window with this model.
    var task = new app.ShowNotebookWindow({
      model: this.model
    });
    task.render();
  }
});