// NotebookListView is used to list each of the notebooks in the left hand #notebook div, this is used for each line to appear.

var app = app || {};

app.NotebookListView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click': 'showTasks'
  },

  render: function() {
    var model = this.model.toJSON();
    var notebookListTemplate = $('#notebookListTemplate').html();
    var notebookListHTML = _.template(notebookListTemplate);
    var bg = hexToRGB(model['color']);
    var fadedColor = 'rgba(' + bg['r'] + ',' + bg['g'] + ',' + bg['b'] + ',0.4)';
    var fullColor = 'rgba(' + bg['r'] + ',' + bg['g'] + ',' + bg['b'] + ',1)';

    this.$el.css('background-color', fadedColor);
    
    var toAppend = this.$el.html(notebookListHTML(model) );

    this.$el.mouseenter(function() {
      $(this).css("background-color", fullColor)
      .css("-webkit-transition", ".3s")
      .css('transition', '.3s');
    }).mouseleave(function() {
      $(this).css('background-color', fadedColor)
      .css('-webkit-transition', '.3s')
      .css('transition', '.3s');
    });
    $('#notebook').append(toAppend);
  },

  showTasks: function() {
    console.log('notebook id:', this.model.get('id'));
    app.router.navigate('notebooks/' + this.model.get('id') + '/tasks', true);
  }
});

var hexToRGB = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};