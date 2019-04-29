// Imports
import React from 'react';
import { Row, Col } from 'reactstrap';

// Local imports
import NewTaskFormContainer from "../containers/newTask/NewTaskFormContainer";

/**
 * New task view.
 */
class NewTaskView extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h3>New Task</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewTaskFormContainer />
                    </Col>
                </Row>
            </div>
        )
    };
};

// Property types
NewTaskView.propTypes = {};

// Export
export default NewTaskView;