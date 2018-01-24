import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './components/Main.jsx';
import {Tasks} from './components/Tasks.jsx';
import {Template} from './Template.jsx';
import moment from 'moment';
import { Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';

class NotFound extends React.Component {
    render() {
        return <h1>404,
            Nothing is here</h1>;
    }
}


class App extends React.Component {
    render() {
        return <Router history={hashHistory}>
            <Route path='/' component={Template}>
                {/*<IndexRoute component={Main} startDate={moment()}/>       */}
                <IndexRoute component={Main} startDate={moment()} />)}/>
                <Route path='/tasks' component={Tasks} />
                <Route path='*' component={NotFound} />
            </Route>
        </Router>;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

{/*<Route*/}
    {/*path="/my/path"*/}
    {/*render={(routeProps) => (*/}
        {/*<MyComponent {...routeProps} {...props} />*/}
    {/*)}*/}

{/*/>*/}

{/*render={(props) => (<Component {...props} title="asdf" />)}*/}