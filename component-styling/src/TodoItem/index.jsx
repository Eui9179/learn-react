import React from 'react';
import { StyledTodoItem } from './styles';

const TodoItem = (props) => {
  return <StyledTodoItem>{props.item}</StyledTodoItem>;
};

export default TodoItem;
