import React, { Component } from 'react';
import Header from './components/Header/Header';

import {
  Route,
  Switch,
} from 'react-router-dom';

import Homepage from './layouts/Homepage';
import Post from './layouts/Post';
import CreatePost from './layouts/CreatePost';
import SearchResults from './layouts/SearchResults';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className="container--flex">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/write-post" component={CreatePost} />
            <Route exact path="/:category/" component={SearchResults} />
            <Route exact path="/:category/:post" component={Post} />
            <Route exact path="/blog/" component={Post} />
          </Switch>
        </main>
      </div>

    );
  }
}

export default App;
