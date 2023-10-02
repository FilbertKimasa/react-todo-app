import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css';
import reactLogo from './images/react.svg';
import TodoApp from './components/TodoApp';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Navbar />
    <TodoApp />
    <Modal />
  </React.StrictMode>,
);
