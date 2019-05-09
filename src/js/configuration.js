// Constants
const defaultConfiguration = {
  necessary: {
    title: 'Necessary Storage',
    description: 'Necessary storage enables core functionality by using, for example, cookies. The website cannot function properly without this, and it can only be disabled by changing your browser preferences.',
    handleEnabled: function () {
      console.log('Privacy Choices: handling \'necessary\' category.')
    }
  },
  categories: [ ],
  language: {
    settings: {
      openButton: 'Privacy Choices',
      closeButton: 'Close',
      heading: 'Your privacy choices',
      description: 'This site uses cookies. You can set your privacy choices below. Changes will take effect immediately.',
      acceptAllButton: 'Accept all',
      declineAllButton: 'Decline all'
    },
    prompt: {
      heading: 'Your privacy choices for this site',
      description: 'This site uses cookies and other storage technologies.',
      acceptButton: 'Accept and continue',
      settingsButton: 'Manage choices'
    }
  },
  consentCookie: {
    name: 'privacy-choices',
    expiryDays: 365
  }
}

/**
 * Configuration singleton.
 */
class PrivacyChoicesConfiguration {
  // Constructor
  constructor () {
    // Read custom config
    var customConfiguration = window.privacyChoicesConfiguration || { }

    // Merge custom into default, preferring custom values
    this.configuration = Object.assign(defaultConfiguration, customConfiguration)

    return this.configuration
  }
}

// Export class as singleton
const singleton = new PrivacyChoicesConfiguration()
Object.freeze(singleton)
export default singleton
