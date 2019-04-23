var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study JS",
  "eat healthy"
];

//this will list the todos and add an "!"

for (var i=0; i < todos.length; i++) {
  todos[i] = todos[i] + "!";
  console.log(todos[i]);
}

//this is "finish the task list" and erase all todos

var todosLength = todos.length;
for (var i=0; i < todosLength; i++) {
  todos.pop();
}

// while Looping

var counterOne = 0;
while (counterOne < 10) {
  console.log(counterOne);
  counterOne++
}

var counterOne = 10;
while (counterOne > 0) {
  console.log(counterOne);
  counterOne--
}

// do while Looping (runs the loop first then checks the condition)

var counterTwo = 10
do {
  console.log(counterTwo);
  counterTwo--;
} while (counterTwo > 0)

// forEach loop

todos.forEach(function(i) {
  console.log(i);
})
       //OR

function logTodos(todo) {
  console.log(todo);
}
todos.forEach(logTodos);
