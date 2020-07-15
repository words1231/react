import React from 'react';
import MyLayout from '@/views/index';
import { HashRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import store from '@/store';

// 无状态组件
export default class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <HashRouter>
        <Provider store={store}>
          <MyLayout></MyLayout>
        </Provider>
      </HashRouter>
    );
  }
}
