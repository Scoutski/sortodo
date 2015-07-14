var app = app || {};

app.Notebook = Backbone.Model.extend({
  defaults: {
    name: 'Unnamed Notebook',
    color: '#0000FF'
  }
});