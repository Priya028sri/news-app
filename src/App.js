import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Component/Footer';

export class App extends Component {
  render() {
    
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={() => <News key="general" pageSize={8} category="general" />} />
            <Route exact path="/business" component={() => <News key="business" pageSize={6} category="business" />} />
            <Route exact path="/entertainment" component={() => <News key="entertainment" pageSize={7} category="entertainment" />} />
            <Route exact path="/health" component={() => <News key="health" pageSize={9} category="health" />} />
            <Route exact path="/science" component={() => <News key="science" pageSize={5} category="science" />} />
            <Route exact path="/sports" component={() => <News key="sports" pageSize={8} category="sports" />} />
            <Route exact path="/technology" component={() => <News key="technology" pageSize={10} category="technology" />} />
          </Switch>
          <div style={{paddingTop:`30px`}}><Footer/></div>
        </Router>
      </div>
    );
  }
}

export default App;
