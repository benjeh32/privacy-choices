// Imports
import React from 'react';
import { Row, Col } from 'reactstrap';

// Local imports
import TaskListContainer from '../containers/taskList/TaskListContainer';

/**
 * Task list view.
 */
class TaskListView extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h3>Task List</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TaskListContainer />
                    </Col>
                </Row>
            </div>
        );
    };
};

// Property types
TaskListView.propTypes = {};

// Export
export default TaskListView;