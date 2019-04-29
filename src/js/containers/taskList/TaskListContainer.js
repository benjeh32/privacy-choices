// Imports
import { connect } from 'react-redux';

// Local imports
import TaskList from '../../components/taskList/TaskList';
import { toggleTask } from '../../actions/taskListActions'

// Map state to properties
const mapStateToProps = state => {
    return {
        tasks: state.taskList.tasks
    };
};

// Map action dispatch to properties
const mapDispatchToProps = dispatch => {
    return {
        onTaskClick: (id) => dispatch(toggleTask(id))
    };
};

/**
 * Container for task list component.
 */
const TaskListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);

// Export
export default TaskListContainer;