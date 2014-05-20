/* Use ajax prefilter for outside hosted website.
/*
$.ajaxPrefilter( function( options, originalOptions, jqXHR) {
  options.url = http://test.herokuapp.com' + options.url;
});
*/

var Todos = Backbone.Collection.extend({
    url: '/todos'
});

var TodoList = Backbone.View.extend({
  el: '.page',
  render: function() {
    var that = this;
    var todos = new Todos();
    todos.fetch({
      success: function(todos) {
        var template = _.template($("#todo-list-template").html(), {todos: todos.models});
        that.$el.html(template);
      }
    })
  }
});

var Router = Backbone.Router.extend({
  routes: {
    '': 'home'
  }
});

var todoList = new TodoList();
var router = new Router();
router.on('route:home', function() {
  todoList.render();
});

Backbone.history.start();