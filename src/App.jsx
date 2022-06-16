import { useEffect, useState } from 'react';

import useInput from './hooks/useInput';

import nothingContents from './utils/nothingContents';

import Todo from './pages/Todo';

export default function App() {
  const [todo, todoHandler, setTodo] = useInput('');
  const [disabled, setDisabled] = useState(false);

  const { inputValue: inputTodo, contents: todos } = todo;

  useEffect(() => {
    if (inputTodo === '') {
      setDisabled(true);
    }
    if (inputTodo !== '') {
      setDisabled(false);
    }
  }, [inputTodo, setDisabled]);

  const createTodo = (entered) => {
    const newTodo = {
      id: window.crypto.getRandomValues(new Uint32Array(1))[0],
      todo: entered,
    };

    setTodo({
      ...todos,
      contents: [...todos, newTodo],
      inputValue: '',
    });
  };

  const compelteTodo = (id) => {
    const targetTodo = todos.filter((target) => target.id !== id);

    setTodo({ ...todo, contents: targetTodo });
  };

  const emptyTodo = () => {
    if (nothingContents(todos)) {
      return <p>할 일이 없어요!</p>;
    }

    return false;
  };

  return (
    <Todo
      inputTodo={inputTodo}
      todoHandler={todoHandler}
      createTodo={createTodo}
      compelteTodo={compelteTodo}
      todos={todos}
      emptyTodo={emptyTodo}
      disabled={disabled}
    />
  );
}
