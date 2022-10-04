import React, { useEffect, useState } from "react";
import ToDoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import Grid from "@mui/material/Grid";

function ToDo() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Review DOM", isCompleted: true },
    { id: 2, name: "Belajar Nge-React", isCompleted: false },
    { id: 3, name: "Belajar Component React", isCompleted: false },
  ]);

  const addItemTodo = (item) => {
    const lastId = todos[todos.length - 1].id;
    const newItem = { id: lastId + 1, name: item, isCompleted: false };
    const newTodos = [...todos, newItem];
    setTodos(newTodos);
  };

  const removeItemTodo = (idToRemove) => {
    const updatedTodos = todos.filter((i) => i.id != idToRemove);
    setTodos(updatedTodos);
  };

  const checked = (id, name, isCompleted) => {
    const updatedTodos = todos.map((item) =>
      item.id == id ? { id: id, name: name, isCompleted: isCompleted } : item
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        //direction="column"
        justifyContent="space-around"
        alignItems="center"
        width="auto"
      >
        <Grid item xs={4}>
          <ToDoForm addTodo={addItemTodo} />
          <TodoList
            todos={todos}
            removeItemTodo={removeItemTodo}
            checkedItem={checked}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ToDo;
