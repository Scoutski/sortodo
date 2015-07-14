// NotebookListView is used to list each of the notebooks in the left hand #notebook div, this is used for each line to appear.

var app = app || {};

app.NotebookListView = Backbone.View.extend({
  tagName: 'p',

  events: {
    'click': 'showTasks'
  },

  render: function() {
    var notebookListTemplate = $('#notebookListTemplate').html();
    var notebookListHTML = _.template(notebookListTemplate);
    var toAppend = this.$el.html(notebookListHTML(this.model.toJSON()) );
    $('#notebook').append(toAppend);
  },

  showTasks: function() {
    console.log('notebook id:', this.model.get('id'));
    app.router.navigate('notebooks/' + this.model.get('id') + '/tasks', true);
  }
});