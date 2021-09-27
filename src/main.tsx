import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import User from './page/User';
import Hello from './page/Hello';
import { ConfigProvider, Space } from 'antd';
import { Provider } from 'react-redux';
import store from './page/store';


const Menu = () => (
  <Space>
    <Link to='/hello'>goto--hello</Link>
    <Link to='/user'>goto--user</Link>
  </Space>
);

const Wrap = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route path="/user" component={User} />
      <Route path="/hello" component={Hello} />
      <Redirect to='/hello' />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider>
        {/* <App /> */}
        <Wrap />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
