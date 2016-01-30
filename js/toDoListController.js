toDoList.controller('ToDoListController', [function(){
    var self = this;

    this.taskList = [];

    this.addTask = function(task){
      this.taskList.push(task);
      this.task =  null;
    };
}]);
