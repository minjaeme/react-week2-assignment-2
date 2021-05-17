import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [state, setState] = useState({
    todo: { id: 1, description: '' },
    todos: [],
  });

  const { todo, todos } = state;
  const { id, description } = todo;

  const handleAdd = () => {
    setState({
      todo: { id: id + 1, description: '' },
      todos: [...todos, todo],
    });
  };

  const handleChange = (value) => {
    setState({
      todo: { id, description: value },
      todos,
    });
  };

  const handleDelete = (checkedId) => {
    const deletedTodos = todos.filter((activeTodo) => activeTodo.id !== checkedId);
    setState({
      todo,
      todos: deletedTodos,
    });
  };

  return (
    <Page
      description={description}
      todos={todos}
      onAdd={handleAdd}
      onChange={handleChange}
      onDelete={handleDelete}
    />
  );
}

export default App;
