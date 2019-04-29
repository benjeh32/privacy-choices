// Imports
import { combineReducers } from 'redux';

// Local imports
import taskListRootReducer from './taskList/taskListRootReducer';

/**
 * Combined root reducer for the application.
 */
const rootReducer = combineReducers({
    taskList: taskListRootReducer
    // userInformation: userInformationRootReducer
    // etc.
});

// Export
export default rootReducer;