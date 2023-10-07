import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css';
import { BrowserRouter } from 'react-router-dom';
import reactLogo from './images/react.svg';
import TodoApp from './components/TodoApp';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {/* <Navbar />
    <TodoApp />
    <Modal /> */}
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>
  </React.StrictMode>,
);
