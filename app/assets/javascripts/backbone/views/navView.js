// navView represents the links that permanently appear at the top of the page.

var app = app || {};

app.NavView = Backbone.View.extend({
  el: '#nav',

  render: function() {
    var navTemplate = $('#navView').html();
    var navHTML = _.template(navTemplate);
    var toAppend = this.$el.html(navHTML());
    this.$el.append(toAppend);
  }
})