var app = app || {};

app.Task = Backbone.Model.extend({
  defaults: {
    name: 'Unspecified Task',
    due: 'nil',
    location: 'Unspecified Location',
    file: 'nil',
    filename: 'nil',
    priority: '4',
    complete: 'false'
  }
});