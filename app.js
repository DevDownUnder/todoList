
//OBJECT
//Create todoList Object
let todoList = {

  //FILLED LIST
  //Create array (list) variable within object for possible items
  //todos: ["item 1", "item 2", "item 3"],

  //BLANK LIST
  todos: [],

  //METHODS

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


  //CHANGE OBJECT AND BOOLEAN
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText
  },

  //TOGGLE COMPLETED LIST ITEM 
  toggleTodo: function (position) {
    var todo = this.todos[position];
    this.todos.completed = !this.todos.completed;
    this.displayTodo()
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
todoList.addTodo("New Todo", "Newest Todo")

//CHANGE A LIST ITEM METHOD
//SINGULAR
//todoList.changeTodo(3, "item 5")

//CHANGE OBJECT AND BOOLEAN
todoList.changeTodo(0, "Newer Todo")
todoList.toggleTodo(1)


//DELETE A LIST ITEM METHOD
//todoList.deleteTodo(3)
