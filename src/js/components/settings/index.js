// Imports
import React, { Component } from 'react'

// Local imports
import PrivacyChoicesCategory from './category'
import PrivacyChoicesButton from '../shared/button'

// Styling constants
const id = 'privacy-choices-settings'
const headerId = 'privacy-choices-settings-header'
const contentId = 'privacy-choices-settings-content'
const bulkChangeId = 'privacy-choices-settings-bulk'
const dividerClassName = 'privacy-choices-settings-divider'

// Language constants
const settingsTitle = 'Your privacy choices'
const closeButtonText = 'Close'
const acceptAllButtonText = 'Accept all'
const declineAllButtonText = 'Decline all'
const guidanceText = 'This site uses cookies. Some of these cookies are essential to core site functionality, while others help us to improve your experience by providing insights into how the site is being used. You can set your privacy choices below.'
const changesGuidanceText = 'Changes will take effect immediately.'

// Configuration constants
const privacyChoicesConfiguration = window.privacyChoicesConfiguration || {}
const categories = privacyChoicesConfiguration.categories || []

/**
 * Component for the settings panel that sits inside the sidebar.
 */
class PrivacyChoicesSettings extends Component {
  // Render
  render () {
    // Build categories
    const categoriesElements = []

    // Necessary category, if enabled
    if (privacyChoicesConfiguration.necessary.displayed) {
      categoriesElements.push(
        <div className={dividerClassName} />
      )
      categoriesElements.push(
        <PrivacyChoicesCategory key='necessary' required title={privacyChoicesConfiguration.necessary.title} description={privacyChoicesConfiguration.necessary.description} handleEnabled={privacyChoicesConfiguration.necessary.handleEnabled} />
      )
    }

    // Other categories
    categories.forEach(function (category, index) {
      categoriesElements.push(
        <div className={dividerClassName} />
      )
      categoriesElements.push(
        <PrivacyChoicesCategory {...category} />
      )
    })

    return (
      <div id={id}>
        <div id={headerId}>
          <h3>{settingsTitle}</h3>
          <PrivacyChoicesButton buttonText={closeButtonText} onClick={this.props.onClose} />
        </div>
        <div id={contentId}>
          <p>{guidanceText}</p>
          <p>{changesGuidanceText}</p>
          <div id={bulkChangeId}>
            <PrivacyChoicesButton buttonText={acceptAllButtonText} onClick={this.props.onAcceptAll} />
            <PrivacyChoicesButton buttonText={declineAllButtonText} onClick={this.props.onRejectAll} />
          </div>
          {categoriesElements}
        </div>
      </div>
    )
  }
}

// Export component
export default PrivacyChoicesSettings
