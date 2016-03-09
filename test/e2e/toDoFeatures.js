describe('ToDo List', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });
  var newTaskBox = element(by.model('ctrl.taskname'));
  var addTaskBtn = element(by.id('todo-submit'))
  var clearAllBtn = element(by.id('clear-all'))
  var editBtn = element(by.id('edit'))
  var editTextBox = element(by.id('edit-text'))
  var submitChangesButton = element(by.id('submit-changes'))
  var taskCompletedBtn = element(by.className('checkbox'));
  var toDoList = element


  it("won't let a user submit an empty task", function(){
    addTaskBtn.click();
    expect(element(by.className('completed-false')).isPresent()).
      toBeFalsy();
  });

  describe('Adds a task to the list', function() {
    beforeEach(function() {
      newTaskBox.sendKeys('Feed the cat');
      addTaskBtn.click();
    });
    it('can add tasks to the list', function() {
    expect(element(by.className('completed-false')).getText()).
      toEqual('Feed the cat');
    });

    describe('Marks task as complete', function() {
      beforeEach(function() {
        taskCompletedBtn.click();
      });
      it('allows users to mark tasks as completed', function() {
        expect(element(by.className('completed-true')).isPresent()).toBe(true);
      });

      it('allows users to mark tasks as incomplete again', function() {
        taskCompletedBtn.click();
        expect(element(by.className('completed-false')).isPresent()).toBe(true);
      });
    });

    describe('Deletes a task', function() {
      var deleteTaskBtn = element(by.id('cross'))
      beforeEach(function() {
        deleteTaskBtn.click();
      });
      it('allows users to delete a task', function() {
        expect(element(by.className('completed-false')).isPresent()).
          toBeFalsy();
      });
    });

    it('counts the number of tasks on the list', function() {
      expect(element(by.binding('ctrl.taskCount()')).getText()).
        toEqual('1');
    });

    it('allows users to edit a task', function(){
      editBtn.click();
      editTextBox.sendKeys(' EDITED');
      submitChangesButton.click();
      expect(element(by.className('completed-false')).getText()).
        toEqual('Feed the cat EDITED');
    });

    describe('Adds a second task', function() {
      var clearCompletedBtn = element(by.id('clear-completed'))
      var firstCheckBox = element.all(by.className('checkbox')).first();

      beforeEach(function() {
        newTaskBox.sendKeys('Clean the kitchen');
        addTaskBtn.click();
      });

      it('allows users to clear all tasks', function() {
        clearAllBtn.click();
        expect(element(by.className('completed-false')).isPresent()).toBeFalsy();
      });

      it('allows users to clear all completed tasks', function(){
        firstCheckBox.click();
        clearCompletedBtn.click();
        expect(element(by.binding('ctrl.taskCount()')).getText()).
          toEqual('1');
      });
      it('counts all tasks', function() {
        expect(element(by.id('count')).getText()).toBe('2');
      });
      it('counts only incomplete tasks', function() {
        firstCheckBox.click();
        expect(element(by.id('incomplete')).getText()).toBe('1');
      });
    });
  });
});
