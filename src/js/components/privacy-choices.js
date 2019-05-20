// Imports
import React, { Component } from 'react'
import Sidebar from 'react-sidebar'

// Local imports
import PrivacyChoicesBanner from './banner'
import PrivacyChoicesConfiguration from '../configuration'
import PrivacyChoicesPreferences from '../preferences'
import PrivacyChoicesSettings from './settings'

/**
 * Privacy choices component.
 */
class PrivacyChoices extends Component {
  // Constructor
  constructor (props) {
    super(props)

    // Initialise
    PrivacyChoicesPreferences.initPreferences()
    this.runNecessaryCallback()
    this.runAllCategoryCallbacks()

    // Set up state
    this.state = {
      isSettingsOpen: false,
      isPromptShown: !PrivacyChoicesPreferences.getHasUserInteracted(),
      categoryChoices: PrivacyChoicesPreferences.readConsentChoices()
    }

    // Bind functions
    this.handleToggleSettings = this.handleToggleSettings.bind(this)
    this.handleAcceptDefault = this.handleAcceptDefault.bind(this)

    this.bulkAcceptAll = this.bulkAcceptAll.bind(this)
    this.bulkRejectAll = this.bulkRejectAll.bind(this)
    this.saveCategoryChange = this.saveCategoryChange.bind(this)
    this.runCategoryCallbacks = this.runCategoryCallbacks.bind(this)
    this.runAllCategoryCallbacks = this.runAllCategoryCallbacks.bind(this)
    this.runNecessaryCallback = this.runNecessaryCallback.bind(this)
  }

  /**
   * Update state of isSettingsOpen.
   * @param {boolean} state New state of isSettingsOpen.
   */
  setSettingsOpen (state) {
    this.setState({
      isSettingsOpen: state
    })
  }

  /**
   * Update state of isPromptShown.
   * @param {boolean} state New state of isPromptShown.
   */
  setPromptShown (state) {
    this.setState({
      isPromptShown: state
    })
  }

  /**
   * Reloads choices from preferences.
   */
  reloadChoices () {
    this.setState({
      categoryChoices: PrivacyChoicesPreferences.readConsentChoices()
    })
  }

  /**
   * Handle toggling the settings menu.
   */
  handleToggleSettings () {
    // Toggle the state
    this.setSettingsOpen(!this.state.isSettingsOpen)

    // Reshow the prompt if closing settings without making a choice
    this.setPromptShown(!PrivacyChoicesPreferences.getHasUserInteracted() && this.state.isSettingsOpen) // New isSettingsOpen state isn't available yet, hence non-negated usage.
  }

  /**
   * Handle accepting the default consent choices.
   */
  handleAcceptDefault () {
    // For all default categories
    PrivacyChoicesConfiguration.categories.forEach((category) => {
      if (category.default) {
        // Store acceptance preference
        PrivacyChoicesPreferences.setCategoryConsent(category.storageKey, true)
        // Run the callback for this category
        this.runCategoryCallbacks(category.storageKey, true)
      }
    })

    // Reload choices
    this.reloadChoices()

    // Record interaction
    PrivacyChoicesPreferences.setUserHasInteracted(true)
    this.setPromptShown(false)
  }

  // Bulk accept all handler
  bulkAcceptAll () {
    PrivacyChoicesPreferences.acceptAllCategories()
    this.reloadChoices()
    PrivacyChoicesPreferences.setUserHasInteracted(true)
    this.runAllCategoryCallbacks()
    this.handleToggleSettings()
  };

  // Bulk reject all handler
  bulkRejectAll () {
    PrivacyChoicesPreferences.declineAllCategories()
    this.reloadChoices()
    PrivacyChoicesPreferences.setUserHasInteracted(true)
    this.runAllCategoryCallbacks()
    this.handleToggleSettings()
  };

  // Change a category's consent
  saveCategoryChange (categoryKey, isConsented) {
    PrivacyChoicesPreferences.setCategoryConsent(categoryKey, isConsented)
    this.reloadChoices()
    PrivacyChoicesPreferences.setUserHasInteracted(true)

    this.runCategoryCallbacks(categoryKey, isConsented)
  }

  // Execute the callbacks for this category depending on if it has been checked or unchecked
  runCategoryCallbacks (categoryKey, isConsented) {
    let category = PrivacyChoicesConfiguration.categories.find((element) => {
      if (element.storageKey === categoryKey) {
        return element
      }
    })

    if (category && isConsented) {
      typeof category.handleEnabled === 'function' && category.handleEnabled()
    }

    if (category && !isConsented) {
      typeof category.handleDisabled === 'function' && category.handleDisabled()
    }
  }

  // Execute necessary callback
  runNecessaryCallback () {
    typeof PrivacyChoicesConfiguration.necessary.handleEnabled === 'function' && PrivacyChoicesConfiguration.necessary.handleEnabled()
  }

  // Execute all category callbacks
  runAllCategoryCallbacks () {
    PrivacyChoicesConfiguration.categories.forEach(element => {
      this.runCategoryCallbacks(element.storageKey, PrivacyChoicesPreferences.isCategoryConsented(element.storageKey))
    })
  }

  // Render
  render () {
    // Styles to fix overlays in react-sidebar from https://github.com/balloob/react-sidebar/issues/86
    const sidebarStyles = {
      root: {
        // Position above overlays or other high z-index elements your app might use
        zIndex: 1000,
        // Detach from right and bottom screen edges as it blocks underlying content
        // This also has the effect of shrinking the component to a width and height of 0
        right: 'auto',
        bottom: 'auto',
        // Allow child sidebar elements to render now that element has collapsed
        overflow: 'visible'
      },
      content: {
        // Detach from right and bottom screen edges as it blocks underlying content (collapses element)
        left: 'auto',
        bottom: 'auto',
        // The dragHandle is inside content element for some reason.
        // Allow it to render now that the parent is collapsed.
        overflow: 'visible'
      },
      sidebar: {
        // Make sidebar fixed, like dragHandle is by default
        position: 'fixed'
      },
      overlay: {
        // Enable/disable overlay interactivity based on open/closed state
        // pointer-events browser support: IE11+
        pointerEvents: this.state.isSidebarOpen ? 'auto' : 'none'
      }
    }

    // Sidebar content
    const sidebarContent = <PrivacyChoicesSettings categoryChoices={this.state.categoryChoices} onClose={this.handleToggleSettings} onAcceptAll={this.bulkAcceptAll} onRejectAll={this.bulkRejectAll} saveCategoryChange={this.saveCategoryChange} />

    return (
    // react-sidebar needs to wrap the other content, in this case the banner is a child
      <Sidebar sidebar={sidebarContent} open={this.state.isSettingsOpen} styles={sidebarStyles}>
        <PrivacyChoicesBanner isPromptVisible={this.state.isPromptShown} onAccept={this.handleAcceptDefault} onSettings={this.handleToggleSettings} />
      </Sidebar>
    )
  };
};

// Export component
export default PrivacyChoices
