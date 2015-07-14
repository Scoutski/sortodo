var app = app || {};

app.NotebookTasksView = Backbone.View.extend({
  el: '#content',

  render: function() {
    this.$el.html('');
    
    var notebookTasksTemplate = $('#notebookTasksTemplate').html();
    var notebookTasksHTML = _.template(notebookTasksTemplate);
    
    this.$el.html(notebookTasksHTML(this.model.toJSON()));

    this.tasks = new app.Tasks({notebook_id: this.model.get('id')});
    this.tasks.fetch();
  }
});