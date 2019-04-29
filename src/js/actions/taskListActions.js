/**
 * Toggle task completed action.
 */
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const toggleTask = payload => ({
    type: TOGGLE_TASK,
    ...payload
});