//business logic
function Task(toDo, notes) {
  this.toDo = toDo;
  this.notes = notes;
}
Task.prototype.newTask = function(){
  return this.toDo;
}

// user interface logic
$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTasks = $("#new-tasks").val();
    var inputtedNotes = $("#new-notes").val();
console.log(inputtedTasks);
    var newTask = new Task(inputtedTasks, inputtedNotes);

    $("ul#tasks").append("<li><span class='task'>" + newTask.toDo + "</span></li>");

    $(".task").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newTask.toDo);
      $(".Notes").text(newTask.notes);
    });
    $("input#new-task").val("");
    $("input#new-notes").val("");

    });

});
