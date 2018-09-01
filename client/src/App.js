import React, { Component } from 'react';
import Books from './components/Books';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import './App.css';
import 'react-bootstrap';
import {BrowserRouter as Router , Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
    <Router>
      <div>
      <Route exact path="/" component={Books}/>
      <Route path="/addBook" component={AddBook}/>
      <Route path="/updateBook/:id" component={UpdateBook}/>
      </div>
      </Router>
    );
  }
}

export default App;
