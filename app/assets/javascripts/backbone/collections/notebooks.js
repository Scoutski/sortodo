var app = app || {};

app.Notebooks = Backbone.Collection.extend({
  url: '/notebooks',
  model: app.Notebook,

  initialize: function() {
    console.log('notebooks.js - getting all the notebooks');
    this.on('add', function (notebook) {
      var notebook = new app.NotebookListView({model: notebook});
      notebook.render();
    });
  }
});