// Imports
import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';

/**
 * Combined root reducer for state.taskList.
 */
const taskListRootReducer = combineReducers({
    tasks: tasksReducer
    // currentFilter: filterReducer
    // lastUpdated: lastUpdatedReducer
    // etc.
});

// Export
export default taskListRootReducer; 