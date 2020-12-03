import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from '../../redux/store';


//CSS
import './App.css';
//Pages
import Home from '../components/Home';


class App extends PureComponent {
    
    render() {
        return (
            <Provider store={store}>
                    <Router>
                        <div className='container'>
                            <Switch>
                                <Route exact path="/" component={Home} />
                            </Switch>
                        </div>
                    </Router>
                </Provider>
        )
    }
}

export default App;
