var app = app || {};

app.NotebookView = Backbone.View.extend({
  el: "#notebook",

  render: function() {
    var notebookTemplate = $('#notebookView').html();
    var notebookHTML = _.template(notebookTemplate);
    var toAppend = this.$el.html(notebookHTML());
    this.$el.append(toAppend);
  },
});