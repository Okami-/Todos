/* Use ajax prefilter for outside hosted website.
/*
$.ajaxPrefilter( function( options, originalOptions, jqXHR) {
  options.url = http://test.herokuapp.com' + options.url;
});
*/

var Todo = Backbone.Model.extend({
  url: '/todos'
});

var TodoList = Backbone.View.extend({
  el: '.page',
  render: function() {
    var todo = new Todo();
    todo.fetch({
      success: function() {
        this.$el.html('meow');
      }
    })
  }
});

var Router = Backbone.Router.extend({
  routes: {
    '': 'home'
  }
})

var todoList = new TodoList();

var router = new Router();
router.on('route:home', function() {
  todoList.render();
});

Backbone.history.start();
