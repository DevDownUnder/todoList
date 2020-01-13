
//OBJECT - TODOLIST
//Create todoList Object
let todoList = {

  //POPULATED LIST
  //Create array (list) variable within object for possible items
  //todos: ["item 1", "item 2", "item 3"],

  //EMPTY LIST
  todos: [],

  //METHODS (FUNCTION WITHIN AN OBJECT)

  //DISPLAY LIST
  //Create method (function within an object) to display the list items
  displayTodo: function () {
    //this. refers to the object (todoList) and todos is the property
    console.log('My Todos:', this.todos);
    //For Loop to count list length (.length) and display text (.todoText)
    for(var i=0; i < this.todos.length; i++){
      console.log(this.todos[i].todoText);
    }
  },

  //ADD TO LIST
  //SINGLE ITEM
  addTodo: function (item) {
    this.todos.push(item)
    console.log('My Todos:', this.todos)
  },

  //ADD OBJECT (list item) AND BOOLEAN (Option to complete - see Toggle)
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
    console.log('My Todos:', this.todos)
  },


  //CHANGE A LIST ITEM
  changeTodo: function (position, newValue) {
    this.todos[position] = newValue
    console.log('My Todos:', this.todos)
  },


  //CHANGE OBJECT (See Add Object for reference)
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText
  },

  //TOGGLE LIST ITEM (Item Completed)
  toggleTodo: function (position) {
    //Variable is created for reference in the next line 
    var todo = this.todos[position];
    //Toggle using ! bang operator
    todo.completed = !todo.completed;
    this.displayTodo()
  },

  //DELETE A LIST ITEM
  deleteTodo: function (position) {
    this.todos.splice(position)
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
//todoList.addTodo("New Todo")


//CHANGE A LIST ITEM METHOD
//SINGULAR
//todoList.changeTodo(3, "item 5")

//CHANGE OBJECT AND BOOLEAN
//todoList.changeTodo(0, "Newer Todo")

//TOGGLE COMPLETION OF AN ITEM
//todoList.toggleTodo(0)

//DELETE A LIST ITEM METHOD
//todoList.deleteTodo(3)
