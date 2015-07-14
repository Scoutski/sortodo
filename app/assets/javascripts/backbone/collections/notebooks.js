var app = app || {};

app.Notebooks = Backbone.Collection.extend({
  url: '/notebooks',
  model: app.Notebook
});