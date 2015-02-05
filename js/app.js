App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('post');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
