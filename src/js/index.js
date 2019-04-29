// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';

// Imports
import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Local imports
import rootReducer from './reducers/rootReducer';
import NavigationBar from './components/NavigationBar';
import HomeView from './views/HomeView';
import NewTaskView from './views/NewTaskView';
import TaskListView from './views/TaskListView';

// Redux state store
const store = createStore(rootReducer);

/**
 * React Archetype application.
 */
class ReactArchetypeApp extends React.Component {
    render() {
        return (
            <div id="react-archetype-app">
                <Provider store={store}>
                    <BrowserRouter>
                        <div>
                            <NavigationBar />
                            <Container id="react-archetype-main">
                                <Route exact path='/' component={HomeView} />
                                <Route path='/newTask' component={NewTaskView} />
                                <Route path='/taskList' component={TaskListView} />
                            </Container>
                        </div>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    };
};

// Main render
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <ReactArchetypeApp />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));