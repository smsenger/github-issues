import React, { useState } from 'react';   // import useState to use hooks
import IssueList from './components/IssueList';
import IssueDetail from './components/IssueDetail';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  const [ count, setCount] = useState(0);
  // const [state, setState ] = use State ({       as an object
  //   count: 0,
  // });

  return (
    <>
    <div>  {/* this div holds a hook. this has state w/i a functional component */}
      You clicked { count } times.
      <button onClick={() => { setCount(count + 1)}}>Click</button>
      {/* <button onClick ={() => { SVGElementInstanceList({ click: state.click + 1})}}  code for hook object. must use copy of state. */}
    </div>
    <BrowserRouter>

      <div>
        <div className="App">
          <Switch>
            <Route exact path="/" component={IssueList} />
            <Route path="/issue/:issueNumber" component={IssueDetail} />
            <Route>
              <h1>Error! 404 - Not Found</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
