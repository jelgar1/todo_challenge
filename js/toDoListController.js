toDoList.controller('ToDoListController', [function(){
    var self = this;

    this.taskList = [];

    this.addTask = function(taskname){
      this.taskList.push({taskname:taskname, completed:false});
      this.taskname =  null;
    };

    this.taskCompleted = function(index){
      this.taskList[index].completed = !this.taskList[index].completed;
    };

    this.taskCount = function(){
      return this.taskList.length;
    };

    this.deleteTask = function(index){
      this.taskList.splice(index,1)
    };

}]);
