// Imports
import React from 'react';
import { Row, Col } from 'reactstrap';

/**
 * Home view.
 */
class HomeView extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h3>Home</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>A basic React application configured with Webpack, Babel, Redux and more.</p>
                    </Col>
                </Row>
            </div>
        )
    };
};

// Property types
HomeView.propTypes = {};

// Export
export default HomeView;