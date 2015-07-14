var app = app || {};

app.Tasks = Backbone.Collection.extend({
  url: function() {
    console.log(this.notebook_id);
    if (this.notebook_id === undefined) { // This works to say that it has to have an ID above 0, a bit hacky but it gets the job done.
      console.log('tasks.js - returning all tasks');
      return '/tasks';
    } else {
      console.log('tasks.js - returning tasks from notebook ' + this.notebook_id);
      return '/notebooks/' + this.notebook_id + '/tasks';
    };
  },

  model: app.Task,

  initialize: function(options) {
    if (options !== undefined) {
      this.notebook_id = options.notebook_id;
    }
    this.on('add', function (task) {
      var taskIndividualView = new app.TaskIndividualView({model: task});
      taskIndividualView.render();
    });
  }
});