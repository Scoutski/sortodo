// The TaskIndividualView is used to list out each individual task as part of the main TaskView

var app = app || {};

app.TaskIndividualView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click': 'popupEdit'
  },

  render: function() {
    var thisTask = this.model.toJSON();

    var taskListTemplate = $('#taskListTemplate').html();
    var taskListHTML = _.template(taskListTemplate);
    this.$el.html(taskListHTML(thisTask));
    var $element = this.$el;

    if (app.currentNotebook === 0) {
      var thisNotebook = "no notebook found";
      for (var i = 0; i < app.notebooks.toJSON().length; i++) {
        if (app.notebooks.toJSON()[i].id === thisTask.notebook_id) {
          thisNotebook = app.notebooks.toJSON[i];
        }
      };
      console.log(thisNotebook);
      // var borderString = ('' + app.notebooks.toJSON()[thisTask.notebook_id].color + ' 1px solid');
      // console.log(borderString);
      // $element.css('border', borderString);
    }

    if (thisTask.priority === 1) {
      $element.appendTo('#one');
    } else if (thisTask.priority === 2) {
      $element.appendTo('#two');
    } else if (thisTask.priority === 3) {
      $element.appendTo('#three');
    } else if (thisTask.priority === 4) {
      $element.appendTo('#four');
    }
  },

  popupEdit: function() {
    // Show the popup window first.
    $(".editTask").parentsUntil("body").show();
    $(".phaseBackground").show();

    // Render the new window with this model.
    var task = new app.ShowTaskWindow({
      model: this.model
    });
    task.render();
  }
});