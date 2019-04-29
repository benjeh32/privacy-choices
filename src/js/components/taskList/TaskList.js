// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';

// Local imports
import Task from './Task'

/**
 * Task list component.
 */
const TaskList = ({ tasks }) => (
    <ListGroup>
        {tasks.map(task => (
            <Task key={task.id} {...task} />
        ))}
    </ListGroup>
);

// Property types
TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            taskType: PropTypes.string.isRequired,
            priority: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        }
    ).isRequired).isRequired
};

// Export
export default TaskList;