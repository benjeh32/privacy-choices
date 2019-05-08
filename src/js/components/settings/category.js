// Imports
import React, { Component } from 'react'
import Switch from 'react-switch'

// Local imports
import PrivacyChoicesPreferences from '../../preferences'

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

    // Set up state
    this.state = {
      isChecked: PrivacyChoicesPreferences.isCategoryConsented(this.props.storageKey)
    }

    // Run callbacks
    this.runCallbacks(this.state.isChecked)

    // Bind functions
    this.onChangeChecked = this.onChangeChecked.bind(this)
  }

  // Execute the callbacks for this category depending on if enabled or disabled
  runCallbacks (isChecked) {
    if (isChecked) {
      this.props.onAccept()
    } else {
      this.props.onDecline()
    }
  }

  // Handler for changing the switch checked status
  onChangeChecked (isChecked) {
    PrivacyChoicesPreferences.setCategoryConsent(this.props.storageKey, isChecked)
    this.setState({ isChecked })
    this.runCallbacks(isChecked)
  }

  // Render
  render () {
    return (
      <div id={this.props.storageKey} className={className}>
        <div className={headerClassName}>
          <h4>{this.props.title}</h4>
          <Switch onChange={this.onChangeChecked} checked={this.state.isChecked} />
        </div>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

// Export component
export default PrivacyChoicesCategory
