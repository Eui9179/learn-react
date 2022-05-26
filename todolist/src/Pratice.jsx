import React, { useState } from 'react';

const Pratice = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === '') {
      return;
    }
    setTodos((prev) => [todo, ...prev]);
    setTodo('');
  };

  // console.log(todo);
  // console.log(todos);

  return (
    <div>
      <h1>My To Do List</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type='text'
          placeholder='Write here'
        />
        <button>Add To Do</button>
      </form>
      <hr />

      <div>
        <ul className='listView'>
          {todos.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Pratice;
