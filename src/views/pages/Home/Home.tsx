import React from 'react';

import logo from 'assets/img/logo.svg';
import styles from 'views/pages/Home/Home.module.scss';

import { Link } from 'react-router-dom';

const Counter = React.memo(React.lazy(() => import('features/counter/Counter')));

export default function Home() {
  // const { env } = process;

  const items = [];

  Object.keys(process.env).forEach((key) => {
    // console.log(key);
    // console.log('export ' + key + '="' + env[key] +'"');
    items.push(
      <code>
        { key }
        + env[ key ]
      </code>,
    );
  });

  return (
    <header className={styles.home}>
      <img src={logo} className={styles['home-logo']} alt="logo" />
      <Counter />

      <p>
        <span>Edit </span>
        <code>src/Home.tsx</code>
        <span> and save to reload.</span>
      </p>

      <ul>
        <span>Varibles from the .env*-files</span>
        <ul>
          <li>
            <code>{`process.env.NODE_ENV = ${process.env.NODE_ENV}`}</code>
          </li>
          <li>
            <code>{`process.env.NODE_ENV = ${process.env.REACT_APP_BACKEND}`}</code>
          </li>
        </ul>
      </ul>
      <p>
        <span>Routes: </span>
        <Link to="/">Home</Link>
        <span> </span>
        <Link to="/other">Empty Route</Link>
      </p>

      <span>
        <span>Learn </span>
        <a
          className={styles['home-link']}
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>

        <a
          className={styles['home-link']}
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>

        <a
          className={styles['home-link']}
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,
        <span> and </span>

        <a
          className={styles['home-link']}
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>React Redux</span>
        </a>
      </span>
    </header>
  );
}
