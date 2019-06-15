// Imports
import React, { Component } from 'react'

// Local imports
import PrivacyChoicesConfiguration from '../../configuration'
import PrivacyChoicesCategory from './category'
import PrivacyChoicesButton from '../shared/button'

// Styling constants
const id = 'privacy-choices-settings'
const headerId = 'privacy-choices-settings-header'
const bulkChangeId = 'privacy-choices-settings-bulk'
const dividerClassName = 'privacy-choices-settings-divider'

// Custom styling
const dividerStyle = {
  background: PrivacyChoicesConfiguration.style.settingsDividerColour
}
const linkStyle = {
  color: PrivacyChoicesConfiguration.style.settingsTextColour
}

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
      <div className={dividerClassName} key='necessary-divider' style={dividerStyle} />
    )
    categoriesElements.push(
      <PrivacyChoicesCategory key='necessary' isRequired title={PrivacyChoicesConfiguration.necessary.title} description={PrivacyChoicesConfiguration.necessary.description} />
    )

    // Other categories
    PrivacyChoicesConfiguration.categories.forEach((category) => {
      categoriesElements.push(
        <div key={category.storageKey + '-divider'} className={dividerClassName} style={dividerStyle} />
      )
      categoriesElements.push(
        <PrivacyChoicesCategory key={category.storageKey} {...category} isConsented={this.props.categoryChoices[category.storageKey] || false} saveChange={this.props.saveCategoryChange} />
      )
    })

    // Policy section
    let policyElement
    if (PrivacyChoicesConfiguration.policy.display) {
      policyElement = <p>
        {PrivacyChoicesConfiguration.language.policy.text} <a href={PrivacyChoicesConfiguration.policy.uri} style={linkStyle}>{PrivacyChoicesConfiguration.language.policy.linkText}</a>
      </p>
    }

    // Bulk buttons
    let bulkElement
    if (PrivacyChoicesConfiguration.categories && PrivacyChoicesConfiguration.categories.length) {
      bulkElement = <div id={bulkChangeId}>
        <PrivacyChoicesButton text={PrivacyChoicesConfiguration.language.settings.acceptAllButton} onClick={this.props.onAcceptAll} />
        <PrivacyChoicesButton text={PrivacyChoicesConfiguration.language.settings.declineAllButton} onClick={this.props.onDeclineAll} />
      </div>
    }

    return (
      <div id={id}>
        <div id={headerId}>
          <h3>{PrivacyChoicesConfiguration.language.settings.heading}</h3>
          <PrivacyChoicesButton text={PrivacyChoicesConfiguration.language.settings.closeButton} onClick={this.props.onClose} />
        </div>
        <p>{PrivacyChoicesConfiguration.language.settings.description}</p>
        {policyElement}
        {bulkElement}
        {categoriesElements}
      </div>
    )
  }

  /**
   * Get ID.
   */
  static getId () {
    return id
  }
}

// Export component
export default PrivacyChoicesSettings
