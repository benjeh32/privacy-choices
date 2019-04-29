// Imports
import { connect } from 'react-redux';

// Local imports
import NewTaskForm from '../../components/newTask/NewTaskForm';
import { submitTaskForm } from '../../actions/newTaskActions'

// Map state to properties
const mapStateToProps = state => {
    return {
        // These should probably be stored in state and then updated from an API call each time they were required via an action + reducer
        priorities: [
            { value: "high", text: "High" },
            { value: "normal", text: "Normal" },
            { value: "low", text: "Low" }
        ],
        taskTypes: [
            { value: "personal", text: "Personal" },
            { value: "work", text: "Work" },
            { value: "other", text: "Other" }
        ]
    };
};

// Map action dispatch to properties
const mapDispatchToProps = dispatch => {
    return {
        onSubmitTaskForm: (payload) => dispatch(submitTaskForm(payload))
    };
};

/**
 * Container for new task form component.
 */
const NewTaskFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTaskForm);

// Export
export default NewTaskFormContainer;