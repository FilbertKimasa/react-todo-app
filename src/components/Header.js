import React from 'react';
import '../styles/Header.module.css';

function header() {
  return (
    <header>
      <h1>todos</h1>
      <p>Items will persist in the browser local storage</p>
    </header>
  );
}

export default header;
