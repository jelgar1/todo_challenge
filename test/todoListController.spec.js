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

    it('counts the number of total tasks', function() {
      expect(ctrl.taskCount()).toEqual(1);
    });

    it('edits a task', function() {
      ctrl.updateTask(0, 'Feed the cat EDITED');
      expect(ctrl.taskList[0].taskname).toEqual('Feed the cat EDITED');
    });

    it('deletes a task', function(){
      ctrl.deleteTask(0);
      expect(ctrl.taskList[0]).not.toBeDefined();
    });

    describe('A task is marked complete', function() {
      beforeEach(inject(function() {
        ctrl.taskCompleted(0);
      }))
      it('can set a task as completed', function() {
        expect(ctrl.taskList[0].completed).toEqual(true);
      });
      it('counts the number of incomplete tasks', function() {
        ctrl.addTask('Walk the rabbit');
        expect(ctrl.incompleteCount()).toEqual(1);
      });
    });

    describe('A second task is added', function() {
      beforeEach(inject(function() {
        ctrl.addTask('Learn AngularJS');
      }))

      it('clears all tasks', function(){
        ctrl.deleteAllTasks();
        expect(ctrl.taskList[0]).not.toBeDefined();
      });
      it('clears only completed tasks', function(){
        ctrl.taskCompleted(0);
        ctrl.clearCompletedTasks();
        expect(ctrl.taskCount()).toEqual(1);
      });
    });
  });
});
