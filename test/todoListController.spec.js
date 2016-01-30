describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initializes with an empty list', function(){
    expect(ctrl.taskList).toEqual([]);
  });

  describe('A task is added', function() {
    beforeEach(inject(function() {
      ctrl.addTask('Feed the cat');
    }))

    it('can add a task to the list', function() {
      expect(ctrl.taskList[0].taskname).toContain('Feed the cat');
    });

    it('sets a task as not completed by default', function() {
      expect(ctrl.taskList[0].completed).toEqual(false);
    });

    it('can set a task as completed', function() {
      ctrl.taskCompleted(0);
      expect(ctrl.taskList[0].completed).toEqual(true);
    });
  });
});
