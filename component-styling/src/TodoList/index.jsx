import React from 'react';
import TodoItem from '../TodoItem';
import { StyledUl, DeleteButton, DivRow } from './styles';

const TodoList = (props) => {
  const deleteTodoHandler = (event) => {
    props.onDeleteTodo(event.target.value);
  };

  return (
    <StyledUl>
      {props.todoList.map((item, index) => (
        <li key={index}>
          <DivRow>
            <TodoItem index={index} item={item} />
            <DeleteButton
              type='button'
              onClick={deleteTodoHandler}
              value={index}
            >
              Delete
            </DeleteButton>
          </DivRow>

          <hr />
        </li>
      ))}
    </StyledUl>
  );
};

export default TodoList;
