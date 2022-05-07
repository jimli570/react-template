import React from 'react';
import logo from 'assets/img/logo.svg';
import Counter from 'features/counter/Counter';
import 'App.scss';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          You are in
          {' '}
          <code>{process.env.NODE_ENV}</code>
          {' '}
          mode.
        </p>
        <p>
          REACT_APP_BACKEND is set to
          {' '}
          <code>{process.env.REACT_APP_BACKEND}</code>
          {' '}
          in the .env files.
        </p>
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,
          <span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}
