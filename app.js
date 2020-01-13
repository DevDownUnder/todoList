
//OBJECT - TODOLIST
//Create todoList Object
let todoList = {

  //POPULATED LIST (Array)
  //todos: ["item 1", "item 2", "item 3"],

  //EMPTY LIST (to be filled dynamically)
  todos: [],

  //METHODS (FUNCTION WITHIN AN OBJECT)

  //DISPLAY LIST
  displayTodo: function () {
    //if list is empty 
    if (this.todos.length === 0) {
      console.log("This list is empty!")
    }
    //else list is populated 
    else {
      //For Loop to count list length (.length) and display text(.todoText) - see next else condition with ( ) included
      for (var i = 0; i < this.todos.length; i++) {

        //if list is empty add a (x) next to it
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        }
        //else add a ( ) next to item
        else {
          console.log('( )', this.todos[i].todoText);
        }
      }
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


    //CHANGE OBJECT (See Add Object for reference to todoText)
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

//TO EXECUTE METHODS (FUNCTIONS)

//DISPLAY 
//todoList.displayTodo()

//ADD TO LIST 
//todoList.addTodo("New item")

//CHANGE A LIST ITEM 
//todoList.changeTodo(item position, "New item")

//TOGGLE COMPLETION OF AN ITEM
//todoList.toggleTodo(item position)

//DELETE A LIST ITEM 
//todoList.deleteTodo(item position)
