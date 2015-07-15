var app = app || {};

app.Notebook = Backbone.Model.extend({
  urlRoot: '/notebooks',
  defaults: {
    name: 'Unnamed Notebook',
    color: '#0000FF'
  }
});