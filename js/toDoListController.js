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

    this.deleteAllTasks = function(){
      this.taskList = [];
    };

    this.updateTask = function(index, taskname){
      this.taskList.splice(index, 1, {taskname:taskname, completed:false});
    };

    this.toggleEditMode = function(index){
       this.taskList[index].completed ='editing'
    }
    this.isEditing = function(index){
      if(this.taskList[index].completed==='editing') {
        return true;
      } else {
        return false;
      }
    };
}]);
