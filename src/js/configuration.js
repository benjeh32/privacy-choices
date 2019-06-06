// Imports
import deepmerge from 'deepmerge'

// Constants
const defaultCallback = function () {
  console.warn('Privacy Choices: An undefined callback was fired for a category. Proper usage of this library requires configuration to be set up to manage your storage use. Refer to the readme at https://github.com/benjeh32/privacy-choices for more.')
}

const defaultConfiguration = {
  necessary: {
    title: 'Strictly necessary storage',
    description: 'Necessary storage enables core site functionality. This site cannot function without it, so it can only be disabled by changing settings in your browser.',
    handle: defaultCallback
  },
  policy: {
    display: true,
    uri: 'https://example.com/policy'
  },
  categories: [ ],
  language: {
    settings: {
      openButton: 'Privacy',
      closeButton: 'Close',
      heading: 'Privacy information',
      description: 'This site uses cookies and other web storage technologies. You can set your privacy choices below. Changes will take effect immediately.',
      acceptAllButton: 'Accept all',
      declineAllButton: 'Decline all'
    },
    prompt: {
      heading: 'Your privacy choices for this site',
      description: 'This site uses cookies and other web storage technologies to enhance your experience beyond necessary core functionality.',
      acceptButton: 'Accept',
      declineButton: 'Decline',
      settingsButton: 'Manage choices',
      dismissButton: 'Dismiss'
    },
    policy: {
      text: 'For more information on our use of web storage, please refer to our ',
      linkText: 'Privacy Policy'
    }
  },
  storage: {
    key: 'privacy-choices',
    expiryDays: 90
  },
  style: {
    toggleBackgroundColour: '#222222',
    toggleTextColour: '#ffffff',
    buttonBackgroundColour: '#690060',
    buttonTextColour: '#ffffff',
    promptBackgroundColour: '#222222',
    promptTextColour: '#ffffff',
    settingsBackgroundColour: '#222222',
    settingsTextColour: '#ffffff'
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

    // Non-configurable items
    this.configuration.defaultCallback = defaultCallback

    return this.configuration
  }
}

// Export class as singleton
const singleton = new PrivacyChoicesConfiguration()
Object.freeze(singleton)
export default singleton
