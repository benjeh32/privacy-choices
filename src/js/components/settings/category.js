// Imports
import React, { Component } from 'react'
import Switch from 'react-switch'

// Styling constants
const className = 'privacy-choices-category'
const headerClassName = 'privacy-choices-category-header'

/**
 * Component for a consent category.
 */
class PrivacyChoicesCategory extends Component {
  // Constructor
  constructor (props) {
    super(props)

    // Bind functions
    this.onChangeChecked = this.onChangeChecked.bind(this)
  }

  // Handler for changing the switch checked status
  onChangeChecked (isChecked) {
    this.props.saveChange(this.props.storageKey, isChecked)
  }

  // Render
  render () {
    return (
      <div id={this.props.storageKey} className={className}>
        <div className={headerClassName}>
          <h4>{this.props.title}</h4>
          <Switch onChange={this.onChangeChecked} checked={this.props.isRequired || this.props.isConsented} disabled={this.props.isRequired} />
        </div>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

// Export component
export default PrivacyChoicesCategory
