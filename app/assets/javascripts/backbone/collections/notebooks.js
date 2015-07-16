var app = app || {};

app.Notebooks = Backbone.Collection.extend({
  url: '/notebooks',
  model: app.Notebook,

  initialize: function() {
    this.on('add', function (notebook) {
      var notebook = new app.NotebookListView({model: notebook});
      notebook.render();
    });
  }
});