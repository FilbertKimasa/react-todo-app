import React from 'react';
import Header from './header';
import TodosLogic from './TodosLogic';

function TodoApp() {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
}

export default TodoApp;
