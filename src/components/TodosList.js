/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

const TodosList = ({ todosProps, handleChange, delTodo, setUpdate }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

export default TodosList;
