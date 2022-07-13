import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Todo({ value }) {
  return (
    <div>
      <p>{value}
      <button type='button'> 완료 </button>
      </p>
    </div>
  )
}

function Page({ todos, inputTodoValue, }) {
  
  return (
    <div>
      <h1>To-do</h1>
      <p>할 일이 없어요!</p>
      <Todo value="안녕" />
    </div>
  );
}

function App() {
  const [state, setState] = useState({
    todos: [],
  });
  
  return (
    <Page />
  
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
