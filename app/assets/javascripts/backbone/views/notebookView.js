var app = app || {};

app.NotebookView = Backbone.View.extend({
  el: "#notebook",

  render: function() {
    this.$el.html('');

    for (var i = 0; i < app.notebooks.models.length; i++) {
      var notebook = new app.NotebookListView({
        model: app.notebooks.models[i]
      });
      notebook.render();
    }
  }
});