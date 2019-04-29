// Local imports
import { SUBMIT_TASK_FORM } from '../../actions/newTaskActions'
import { TOGGLE_TASK } from '../../actions/taskListActions'

/**
 * Reducer for tasks.
 */
const tasksReducer = (state = [], action) => {

    switch (action.type) {

        // Submission of new task form adds a new task
        case SUBMIT_TASK_FORM:
            return [
                ...state,
                {
                    ...action.payload
                }
            ];

        // Toggling a task marks it as complete
        case TOGGLE_TASK:
            return [
                ...state,
                {
                    ...action.payload
                }
            ];

        default:
            return state;
    }
};

// Export
export default tasksReducer;