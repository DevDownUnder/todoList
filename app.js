//Create object for Todo List
let todoList = {
  //Create array (list) variable within object for possible items
  todos: ["item 1", "item 2", "item 3"],
  //Create method (function within an object) to display the list items
  displayTodo: function () {
    //this. refers to the object (todoList) and todos is the property
    console.log(this.todos)
  }
};

//Run the method (function) to display the list items in the console
todoList.displayTodo()