import React from 'react'
import ReactDOM from 'react-dom'
import styles from './style.scss';

import { Provider } from "./Context";
import Main from "./main";

export default () => {

  return (
    <Provider>
      <Main></Main>
    </Provider>
  );
};
