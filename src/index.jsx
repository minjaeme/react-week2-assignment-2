import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Todo({ value }) {
  console.log("todo", value);
  return (
    <p>{value}
      <button type='button'> 완료 </button>
    </p>
  )
}

function Input( {value, handleClick} ) {
  console.log("ee", handleClick)
  return(
    <form onSubmit={handleClick}>
        <label>
          <input type="text" />
        </label>
        <input type="submit" value="추가" />
      </form>
  )
}

function Page({ todoList, onSubmit, }) {
  console.log("list", todoList, onSubmit );
  return (
    <div>
      <h1>To-do</h1>
      <Input 
        value={"tes"}
        handleClick={onSubmit}
      />
      { todoList.length > 0 ?
        <p>
          {todoList.map((todo, index) => 
            <Todo value={(index+1) + ". " + todo} />
          )}
        </p>
        : 
        <p>
          할 일이 없어요!
        </p>
      }
    </div>
  );
}

function App() {
  const [state, setState] = useState({
    todoList: [],
  });

  const {todoList, } = state;

  function handleClick(e) {

    console.log('You clicked submit.');
    e.preventDefault();
    setState((todoList) => ({
      todoList: [...todoList, todo]
    }))
  }

  return (
    <div>
      <Page 
        todoList={todoList}
        onSubmit={(todo) => handleClick(todo)}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
