// Imports
import React from "react";
import PropTypes from "prop-types";
import { Form, Button, ButtonGroup } from 'reactstrap';

// Local imports
import Input from "./Input";
import InputOption from "./InputOption";

/**
 * New task form component.
 */
class NewTaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formPayload: {
                task_type: null,
                priority: null,
                description: null,
            }
        };
    }

    render() {

        let priorityOptions = this.props.priorities.map(priority => {
            return (
                <InputOption key={priority.value} value={priority.value} text={priority.text} />
            );
        });

        let taskTypeOptions = this.props.taskTypes.map(taskType => {
            return (
                <InputOption key={taskType.value} value={taskType.value} text={taskType.text} />
            );
        });

        return (
            <Form id="task-form" onSubmit={event => { event.preventDefault(); this.props.onSubmitTaskForm(this.state.formPayload); event.target.reset(); }}>
                <Input
                    label="Task type"
                    type="select"
                    id="task_type"
                    onChange={event => this.setState({ formPayload: { ...this.state.formPayload, taskType: event.target.value } })}
                    isRequired={true}
                    options={taskTypeOptions}
                />
                <Input
                    label="Priority"
                    type="select"
                    id="priority"
                    onChange={event => this.setState({ formPayload: { ...this.state.formPayload, priority: event.target.value } })}
                    isRequired={true}
                    guidanceText="The priority of the task."
                    options={priorityOptions}
                />
                <Input
                    label="Description"
                    type="textarea"
                    id="description"
                    onChange={event => this.setState({ formPayload: { ...this.state.formPayload, description: event.target.value } })}
                    isRequired={true}
                    guidanceText="Details of the task."
                />
                <ButtonGroup>
                    <Button type="submit" color="primary">Create</Button>
                    <Button type="reset" color="secondary">Reset</Button>
                </ButtonGroup>
            </Form>
        )
    }
};

// Property types
NewTaskForm.propTypes = {
    priorities:
        PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired).isRequired,
    taskTypes:
        PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired).isRequired,
    onSubmitTaskForm: PropTypes.func.isRequired
};

// Export
export default NewTaskForm;