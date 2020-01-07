//Create object for Todo List
let todoList = {
  //INITIAL LIST
  //Create array (list) variable within object for possible items
  todos: ["item 1", "item 2", "item 3"],

  //DISPLAY LIST
  //Create method (function within an object) to display the list items
  displayTodo: function () {
    //this. refers to the object (todoList) and todos is the property
    console.log(this.todos)
  },

  //ADD TO LIST
  //Create method (function within an object) to add to the list items
  addTodo: function (item) {
    this.todos.push(item)
    //this. refers to the object (todoList) and todos is the property
    console.log(this.todos)
  }
};

//RUN METHODS (FUNCTIONS)

//DISPLAY METHOD
todoList.displayTodo()


//ADD TO LIST METHOD
todoList.addTodo("item 4")
