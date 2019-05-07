// Imports
import React, { Component } from 'react'

/**
 * Component for a button.
 */
class PrivacyChoicesButton extends Component {
  // Render
  render () {
    return (
      <button onClick={this.props.onClick}>
        {this.props.buttonText}
      </button>
    )
  };
};

// Export component
export default PrivacyChoicesButton
