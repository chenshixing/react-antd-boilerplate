/*
	Routes 路由配置
*/
import React from 'react';
import { Router, hashHistory } from 'react-router';

const routes = {
  component: require('PAGES/Layouts').default,
  childRoutes: [{
      // 首页跳转
      path: '/',
      indexRoute: {
        onEnter: (nextState, replace) => replace('', 'home')
      },
    },
    // 首页
    {
      path: 'home',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/home').default)
        })
      }
    },
    // 404
    {
      path: '*',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/404').default);
        });
      }
    }
  ]
};

export default <Router history = {hashHistory} routes = {routes} />;
