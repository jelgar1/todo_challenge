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
  it('has a title', function() {
    expect(browser.getTitle()).toEqual("Jon's ToDo List");
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
      var taskCompletedBtn = element(by.className('checkbox'));
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
      var deleteTaskBtn = element(by.className('cross'))
      beforeEach(function() {
        deleteTaskBtn.click();
      });
      it('allows users to delete a task', function() {
        expect(element(by.className('completed-false')).isPresent()).toBeFalsy();
      });
    });

    it('counts the number of tasks on the list', function() {
      expect(element(by.binding('ctrl.taskCount()')).getText()).toEqual('You currently have 1 things to do.');
    });

    it('allows users to clear all tasks', function() {
      newTaskBox.sendKeys('Learn Angular');
      addTaskBtn.click();
      clearAllBtn.click();
      expect(element(by.className('completed-false')).isPresent()).toBeFalsy();
    });

    it('allows users to edit a task', function(){
      editBtn.click();
      editTextBox.sendKeys(' EDITED');
      submitChangesButton.click();
      expect(element(by.className('completed-false')).getText()).
        toEqual('Feed the cat EDITED');
    });
  });
});
