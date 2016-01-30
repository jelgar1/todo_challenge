toDoList.controller('ToDoListController', [function(){
    var self = this;

    this.taskList = [];

    this.addTask = function(taskname){
      this.taskList.push({taskname:taskname, completed:false});
      this.taskname =  null;
    };
}]);
