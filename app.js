
//OBJECT
//Create object for Todo List
let todoList = {
  //INITIAL LIST
  //Create array (list) variable within object for possible items
  todos: ["item 1", "item 2", "item 3"],

  //DISPLAY LIST
  //Create method (function within an object) to display the list items
  displayTodo: function () {
    //this. refers to the object (todoList) and todos is the property
    console.log('My Todos:', this.todos)
  },

  //ADD TO LIST
  //SINGLE ADDITION
  //Create method (function within an object) to add to the list items
  addTodo: function (item) {
    this.todos.push(item)
    //this. refers to the object (todoList) and todos is the property
    console.log('My Todos:', this.todos)
  },

  //ADD OBJECT AND BOOLEAN
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
    console.log('My Todos:', this.todos)
  },



  //CHANGE A LIST ITEM
  //Create method (function within an object) to change list items
  changeTodo: function (position, newValue) {
    this.todos[position] = newValue
    //this. refers to the object (todoList) and todos is the property
    console.log('My Todos:', this.todos)
  },

  //DELETE A LIST ITEM
  //Create method (function within an object) to delete list items
  deleteTodo: function (position) {
    this.todos.splice(position)
    //this. refers to the object (todoList) and todos is the property
    console.log('My Todos:', this.todos)
  }
};

//RUN METHODS (FUNCTIONS)

//DISPLAY METHOD
//todoList.displayTodo()

//ADD TO LIST METHOD
//SINGULAR
//todoList.addTodo("item 4")

//ADD OBJECT AND BOOLEAN
todoList.addTodo("hello")

//CHANGE A LIST ITEM METHOD
//todoList.changeTodo(3, "item 5")

//DELETE A LIST ITEM METHOD
//todoList.deleteTodo(3)
