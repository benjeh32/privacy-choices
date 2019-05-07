// Imports
import React, { Component } from 'react'
import Switch from 'react-switch'

// Local imports
import PrivacyChoicesPreferences from '../../preferences'

/**
 *
 */
class PrivacyChoicesCategory extends Component {
  constructor (props) {
    super(props)

    this.state = {
      checked: PrivacyChoicesPreferences.isCategoryConsented(this.props.storage_key)
    }

    this.runCallbacks(this.state.checked)

    this.handleChange = this.handleChange.bind(this)
  }

  runCallbacks (isChecked) {
    if (isChecked) {
      this.props.disable()
      return
    }

    this.props.enable()
  }

  handleChange (checked) {
    this.runCallbacks(this.state.checked)

    PrivacyChoicesPreferences.setCategoryConsent([this.props.storage_key], checked)

    this.setState({
      checked
    })
  }

  // Render
  render () {
    return (
      <div id={this.props.key} className='privacy-choices-service'>
        <h4>
          {this.props.title}

          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            className='switch'
          />
        </h4>
        <p className='description'>
          {this.props.description}
        </p>
      </div>
    )
  }
}

// Export component
export default PrivacyChoicesCategory
