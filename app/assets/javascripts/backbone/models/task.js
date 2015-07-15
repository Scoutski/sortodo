var app = app || {};

app.Task = Backbone.Model.extend({
  urlRoot: '/tasks',
  defaults: {
    name: 'Unspecified Task',
    due: 'nil',
    location: 'Unspecified Location',
    file: 'nil',
    priority: '4',
    complete: 'false',
    notebook_id: 'nil'
  }
});