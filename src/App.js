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
import Authenticate from './layouts/Authenticate';
import PrivateRoute from './util/PrivateRoute';
import Footer from './components/Footer/Footer';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className="container--flex">
          <Switch>

          </Switch>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <PrivateRoute exact path="/login" component={Authenticate} />
            <PrivateRoute exact path="/write-post/:edit?" component={CreatePost} />
            <Route exact path="/:category/" component={SearchResults} />
            <Route exact path="/:category/:post" component={Post} />
            {/* <Route exact path="/blog/" component={Post} /> */}
          </Switch>

        </main>
        <footer>
          <Footer />
        </footer>
      </div>

    );
  }
}

export default App;
