// Imports
import deepmerge from 'deepmerge'

// Constants
const defaultCallback = function () {
  console.warn('Privacy Choices: An undefined callback was fired for a category. Proper usage of this library requires configuration to be set up to manage your storage use. Refer to the readme at https://github.com/benjeh32/privacy-choices for more.')
}

const defaultConfiguration = {
  necessary: {
    title: 'Necessary Storage',
    description: 'Necessary storage enables core site functionality. This site cannot function properly without it, and it can only be disabled by changing your browser preferences.',
    handle: defaultCallback
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
  },
  style: {
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
