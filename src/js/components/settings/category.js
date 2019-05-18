// Imports
import React, { Component } from 'react'
import Switch from 'react-switch'

// Styling constants
const className = 'privacy-choices-category'
const headerClassName = 'privacy-choices-category-header'

/**
 * Component for a category on the settings menu.
 */
class PrivacyChoicesCategory extends Component {
  // Constructor
  constructor (props) {
    super(props)

    // Bind functions
    this.handleChange = this.handleChange.bind(this)
  }

  // Handler for changing the switch
  handleChange (isChecked) {
    this.props.saveChange(this.props.storageKey, isChecked)
  }

  // Render
  render () {
    // A required category is always checked
    let isChecked = this.props.isRequired || this.props.isConsented

    return (
      <div className={className}>
        <div className={headerClassName}>
          <h4>{this.props.title}</h4>
          <Switch onChange={this.handleChange} checked={isChecked} disabled={this.props.isRequired} />
        </div>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

// Export component
export default PrivacyChoicesCategory
