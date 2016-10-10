/*
	layout主页面
*/
import React from 'react';

import Header from './Common/header';
import Footer from './Common/footer';

export default class Index extends React.Component{
    render() {
      return (
          <div className="main-frm">
            <Header />
            <div className="frame-wrap-bg">
              <div className="frame-wrap">
                {/* 主内容区 */}
                {this.props.children}
              </div>
            </div>
            <Footer />
          </div>
      );
  }
}
