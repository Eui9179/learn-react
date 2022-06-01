import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Div } from './styles';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoListHandler = (todo) => {
    setTodoList((prev) => [todo, ...prev]);
  };

  const deleteTodoHandler = (index) => {
    setTodoList((prev) => {
      const prevTodoList = [...prev];
      if (index !== -1) {
        prevTodoList.splice(index, 1);
      }
      return [...prevTodoList];
    });
  };

  return (
    <div>
      <Div>
        <TodoForm onAddTodo={addTodoListHandler} />
        <TodoList todoList={todoList} onDeleteTodo={deleteTodoHandler} />
      </Div>
    </div>
  );
}

export default App;
