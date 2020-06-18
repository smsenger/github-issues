import React from 'react';
import IssueList from './components/IssueList';
import IssueDetail from './components/IssueDetail';
import UserDetail from './components/UserDetail';
import Users from './components/Users';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import './App.css';

function App() {

  return (

    <div>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={IssueList} />
            <Route path="/issue/:issueNumber" component={IssueDetail} />
            <Route path="/users" component={Users} />
            <Route path='/user/:login' component={UserDetail} />
            <Route> <h1>Error! 404 - Not Found</h1> </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
