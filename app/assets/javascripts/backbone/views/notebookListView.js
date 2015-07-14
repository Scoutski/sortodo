var app = app || {};

app.NotebookListView = Backbone.View.extend({
  tagName: 'p',

  render: function() {
    var notebookListTemplate = $('#notebookListTemplate').html();
    var notebookListHTML = _.template(notebookListTemplate);
    var toAppend = this.$el.html(notebookListHTML(this.model.toJSON()) );
    $('#notebook').append( toAppend );
  }
});