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
    $('#notebook').append( toAppend );
  },

  showTasks: function() {
    app.currentNotebook = this.model.get('id');
    console.log('notebook id:', app.currentNotebook);

    app.router.navigate('notebooks/' + app.currentNotebook, true);
  }
});