// Imports
import React, { Component } from 'react'

// Local imports
import PrivacyChoicesCategory from './category'

// Constants
const userConfig = window.privacychoices || {}
const userServices = userConfig.services || []

const styles = {
  sidebar: {
    height: '100%',
    background: '#0077a7',
    padding: '20px',
    width: '500px',
    fontFamily:
            '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif'
  },
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
  },
  header: {
    color: '#fff',
    fontSize: '1.2em',
    lineHeight: '1.5em',
    fontWeight: '700'
  }
}

class PrivacyChoicesSettings extends Component {
  render () {
    const style = this.props.style
      ? { ...styles.sidebar, ...this.props.style }
      : styles.sidebar

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
      <div style={style}>
        <div style={styles.header}>
                    Your privacy choices
          <button className='privacy-choices-close-sidebar'>X</button>
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

      </div>
    )
  };
};

// Export component
export default PrivacyChoicesSettings
