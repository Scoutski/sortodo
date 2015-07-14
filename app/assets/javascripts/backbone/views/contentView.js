var app = app || {};

app.ContentView = Backbone.View.extend({
  el: '#content',

  render: function() {
    var contentTemplate = $('#contentView').html();
    var contentHTML = _.template(contentTemplate);
    var toAppend = this.$el.html(contentHTML());
    this.$el.append(toAppend);
  },
});