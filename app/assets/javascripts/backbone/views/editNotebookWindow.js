// The EditTaskWindow is used for the popup window that appears when you click on a task in the #content div.

var app = app || {};

app.EditNotebookWindow = Backbone.View.extend({
  el: '.editTask',

  render: function() {
    var model = this.model;
    this.$el.html('');

    var editNotebookWindowTemplate = $('#editNotebookWindow').html();
    var editNotebookWindowHTML = _.template(editNotebookWindowTemplate);
    this.$el.html(editNotebookWindowHTML(model.toJSON()));

    $('#closeOverlay').on('click', function() {
      $('.overlay').hide();
      $('.phaseBackground').hide();    
    });

    $('#updateNotebook').on('click', function() {
      var name = $('.name').val();
      // Set's up the task data to save.
      var currentNotebook = {
        'name': name,
        'color': $('.color').val(),
      };

      model.save(currentNotebook, {patch: true}).done(function(data) {
        $('.overlay').hide();
        $('.phaseBackground').hide();

        $('#status').html('<p>Notebook: "' + name + '" successfully udpated.</p>');
        
        app.router.navigate('/', true);
      });
    });
  }
});