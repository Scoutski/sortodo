// AddNewNotebookView controls the link to add a new task in the content panel.

var app = app || {};

app.AddNewNotebookView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click': 'addNewNotebookWindow'
  },

  render: function() {
    var addNewNotebookTemplate = $('#addNewNotebookTemplate').html();
    var addNewNotebookHTML = _.template(addNewNotebookTemplate);
    var toAppend = this.$el.html(addNewNotebookHTML());
    
    $('#notebook').append(toAppend);

    
  },

  addNewNotebookWindow: function() {
    $(".editTask").parentsUntil("body").show();
    $(".phaseBackground").show();

    // Render the new window with this model.
    var notebook = new app.AddNewNotebookWindow({});
    notebook.render();
  }
});