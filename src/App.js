import React , {Component} from 'react'
import './App.css';
import './scss/custom.scss';
import Main from './containerComponents/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { reduxStore } from './redux/configureStore';

const store = reduxStore;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
