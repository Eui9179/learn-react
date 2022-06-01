import React, { useEffect, useRef, useState } from 'react';
import { FormDivInner, Input, Button } from './styles';

const TodoForm = (props) => {
  const [todo, setTodo] = useState('');
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const todoChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const updateTodo = (event) => {
    event.preventDefault();
    if (todo === '') return;
    props.onAddTodo(todo);
    setTodo('');
  };

  return (
    <form onSubmit={updateTodo}>
      <h2 style={{ color: 'white' }}>Course Goal</h2>
      <FormDivInner>
        <Input
          type='text'
          placeholder='Learn React!'
          onChange={todoChangeHandler}
          value={todo}
          ref={ref}
        />
        <Button type='submit'>Add Goal</Button>
      </FormDivInner>
    </form>
  );
};

export default TodoForm;
