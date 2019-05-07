// Imports
import React, { Component } from 'react'

// Local imports
import PrivacyChoicesCategory from './category'
import PrivacyChoicesButton from '../shared/button'

// Constants
const settingsTitle = 'Your privacy choices'
const closeButtonText = 'Close'
const id = 'privacy-choices-settings'
const headerId = 'privacy-choices-settings-header'

const userConfig = window.privacychoices || {}
const userServices = userConfig.services || []

const styles = {
  sidebarDescription: {
    display: 'block',
    color: '#fff',
    fontSize: '1em',
    lineHeight: '1.5em',
    fontWeight: '400'

  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#fff'

  },
  content: {
    minHeight: '88vh',
    backgroundColor: '#0077a7'
  }
}

/**
 *
 */
class PrivacyChoicesSettings extends Component {
  // Render
  render () {
    const consentCategories = []

    for (let i = 0; i < userServices.length; i++) {
      consentCategories.push(
        <div style={styles.divider} />
      )

      consentCategories.push(
        <PrivacyChoicesCategory {...userServices[i]} />
      )
    }

    return (
      <div>

        <div id={id}>
          <div id={headerId}>
            <h4>{settingsTitle}</h4>
            <PrivacyChoicesButton buttonText={closeButtonText} onClick={this.props.onClose} />
          </div>
          <div style={styles.content}>
            <p style={styles.sidebarDescription}>
                This site uses cookies. Some of these cookies are essential to core site functionality, while others help us to improve your experience by providing insights into how the site is being used.
            </p>
            <p style={styles.sidebarDescription}>
                You can set your privacy choices below. Changes will take effect immediately.
            </p>
            <div style={styles.sidebarDescription}>
              <button style={{ float: 'left' }}>Accept all</button>
              <button style={{ float: 'right' }}>Reject all</button>
            </div>
            {consentCategories}
          </div>

        </div></div>

    )
  }
}

// Export component
export default PrivacyChoicesSettings
