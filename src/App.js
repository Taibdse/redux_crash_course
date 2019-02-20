import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <PostForm/>
          <hr/>
          <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;
