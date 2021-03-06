import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import React from 'react';

//import components
import Home from './components/Home';
import ImageWrapper from './components/ImageWrapper';
import Navigation from './components/Navigation';
import PathNotFound from './components/PathNotFound';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };
  }

  render() {
    return (
        <BrowserRouter>
          <div className='App'>
            <Navigation />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/search/:query' component={ImageWrapper} />
              <Route path='*' component={PathNotFound} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
