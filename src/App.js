import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ListTable from "./components/ListTable"
import Profiles from "./components/Profiles"
import ViewProfile from "./components/ViewProfile"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <ListTable /> */}
        <Switch>
          <Route exact path='/' component={ListTable} />
          <Route exact path='/profiles' component={Profiles} />
          <Route path='/profiles/view' component={ViewProfile} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App