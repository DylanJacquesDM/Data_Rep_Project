//Required Imports
import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Create } from './components/create';
import { Read } from './components/read';
import { Edit } from './components/edit';

//Component Class
class App extends Component {
  render() {
    return (
      
      <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="mr-auto">
            
            <Nav.Link href="/read">Shoe list</Nav.Link>
            <Nav.Link href="/create">Add a shoe</Nav.Link>
          </Nav>
        </Navbar>

        <br />
{/* Switch Statement */}
        <Switch>
          <Route path='/' component={Content} exact/>  
          <Route path='/read' component={Read}/>
          <Route path='/create' component={Create}/>
          <Route path='/edit/:id'component={Edit}/>
        </Switch>

        
      </div>
      </Router>
    );
  }
}

export default App;
