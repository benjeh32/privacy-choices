// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

/**
 * Task component.
 */
const Task = ({ id, taskType, priority, description }) => (
    <ListGroupItem>
        <ListGroupItemHeading>
            {taskType} - Priority {priority}
        </ListGroupItemHeading>
        <ListGroupItemText>
            {description}
        </ListGroupItemText>
    </ListGroupItem>
);

// Property types
Task.propTypes = {
    id: PropTypes.number.isRequired,
    taskType: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

// Export
export default Task;