describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initializes with an empty list', function(){
    expect(ctrl.taskList).toEqual([]);
  });

  it('can add a task to the list', function() {
    ctrl.addTask('Feed the cat');
    expect(ctrl.taskList).toContain('Feed the cat');
  });
});
