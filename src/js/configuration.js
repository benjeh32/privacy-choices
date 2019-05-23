// Imports
import deepmerge from 'deepmerge'

// Constants
const defaultConfiguration = {
  necessary: {
    title: 'Necessary Storage',
    description: 'Necessary storage enables core site functionality. This site cannot function properly without it, and it can only be disabled by changing your browser preferences.',
    handleEnabled: function () {}
  },
  categories: [ ],
  language: {
    settings: {
      openButton: 'Privacy Choices',
      closeButton: 'Close',
      heading: 'Your privacy choices',
      description: 'This site uses cookies and other web storage technologies. You can set your privacy choices below. Changes will take effect immediately.',
      acceptAllButton: 'Accept all',
      declineAllButton: 'Decline all'
    },
    prompt: {
      heading: 'Your privacy choices for this site',
      description: 'This site uses cookies and other web storage technologies.',
      acceptButton: 'Accept and continue',
      settingsButton: 'Manage choices'
    }
  },
  storage: {
    key: 'privacy-choices',
    expiryDays: 90
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
    this.configuration = deepmerge(defaultConfiguration, customConfiguration)

    return this.configuration
  }
}

// Export class as singleton
const singleton = new PrivacyChoicesConfiguration()
Object.freeze(singleton)
export default singleton
