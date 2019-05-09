// Imports
import React, { Component } from 'react'

// Local imports
import PrivacyChoicesConfiguration from '../../configuration'
import PrivacyChoicesCategory from './category'
import PrivacyChoicesButton from '../shared/button'

// Styling constants
const id = 'privacy-choices-settings'
const headerId = 'privacy-choices-settings-header'
const contentId = 'privacy-choices-settings-content'
const bulkChangeId = 'privacy-choices-settings-bulk'
const dividerClassName = 'privacy-choices-settings-divider'

/**
 * Component for the settings panel that sits inside the sidebar.
 */
class PrivacyChoicesSettings extends Component {
  // Render
  render () {
    // Build categories
    const categoriesElements = []

    // Necessary category
    categoriesElements.push(
      <div className={dividerClassName} key='necessary-divider' />
    )
    categoriesElements.push(
      <PrivacyChoicesCategory key='necessary' isRequired title={PrivacyChoicesConfiguration.necessary.title} description={PrivacyChoicesConfiguration.necessary.description} handleEnabled={PrivacyChoicesConfiguration.necessary.handleEnabled} />
    )

    // Other categories
    PrivacyChoicesConfiguration.categories.forEach((category) => {
      categoriesElements.push(
        <div key={category.key + '-divider'} className={dividerClassName} />
      )
      categoriesElements.push(
        <PrivacyChoicesCategory key={category.key} {...category} isConsented={this.props.categoryChoices[category.key] || false} saveChange={this.props.saveCategoryChange} />
      )
    })

    return (
      <div id={id}>
        <div id={headerId}>
          <h3>{PrivacyChoicesConfiguration.language.settings.heading}</h3>
          <PrivacyChoicesButton buttonText={PrivacyChoicesConfiguration.language.settings.closeButton} onClick={this.props.onClose} />
        </div>
        <div id={contentId}>
          <p>{PrivacyChoicesConfiguration.language.settings.description}</p>
          <div id={bulkChangeId}>
            <PrivacyChoicesButton buttonText={PrivacyChoicesConfiguration.language.settings.acceptAllButton} onClick={this.props.onAcceptAll} />
            <PrivacyChoicesButton buttonText={PrivacyChoicesConfiguration.language.settings.declineAllButton} onClick={this.props.onRejectAll} />
          </div>
          {categoriesElements}
        </div>
      </div>
    )
  }
}

// Export component
export default PrivacyChoicesSettings
