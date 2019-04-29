// Next task ID
let nextTaskId = 0;

/**
 * Submit task form action.
 */
export const SUBMIT_TASK_FORM = 'SUBMIT_TASK_FORM';
export const submitTaskForm = payload => ({
    type: SUBMIT_TASK_FORM,
    payload: {
        id: nextTaskId++,
        ...payload
    }
});