var app = app || {};

app.NotebookView = Backbone.View.extend({
  el: "#notebook",

  render: function() {
    for (var i = 0; i < app.notebooks.models.length; i++) {
      console.log('there are ' + app.notebooks.models.length + ' notebooks.');
      var notebook = new app.NotebookListView({
        model: app.notebooks.models[i]
      });
      notebook.render();
    }
  }
  // },
});