// Imports
import React, { Component } from 'react'
import Sidebar from 'react-sidebar'

// Local imports
import PrivacyChoicesBanner from './banner'
import PrivacyChoicesPreferences from '../preferences'
import PrivacyChoicesSettings from './settings'
import PrivacyChoicesConfiguration from '../configuration'

// Constants
const isSettingsOpenDefault = false

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
      isSettingsOpen: isSettingsOpenDefault,
      isPromptShown: !PrivacyChoicesPreferences.getHasUserInteracted(),
      categoryChoices: PrivacyChoicesPreferences.readPreferences().choices
    }

    // Bind functions
    this.toggleSettings = this.toggleSettings.bind(this)
    this.promptAcceptDefault = this.promptAcceptDefault.bind(this)
    this.promptOpenSettings = this.promptOpenSettings.bind(this)
    this.bulkAcceptAll = this.bulkAcceptAll.bind(this)
    this.bulkRejectAll = this.bulkRejectAll.bind(this)
    this.saveCategoryChange = this.saveCategoryChange.bind(this)
    this.runCategoryCallbacks = this.runCategoryCallbacks.bind(this)
    this.runAllCategoryCallbacks = this.runAllCategoryCallbacks.bind(this)
    this.runNecessaryCallback = this.runNecessaryCallback.bind(this)
  };

  // Set settings open state
  setSettingsOpen (state) {
    this.setState({
      isSettingsOpen: state
    })
  };

  // Set prompt shown state
  setPromptShown (state) {
    this.setState({
      isPromptShown: state
    })
  };

  // Toggle for settings
  toggleSettings () {
    this.setSettingsOpen(!this.state.isSettingsOpen)

    // Reshow the prompt if closing settings without making a choice
    this.setPromptShown(!PrivacyChoicesPreferences.getHasUserInteracted() && this.state.isSettingsOpen) // New isSettingsOpen state isn't available yet, hence non-negated usage.
  };

  // Handle user accepting the default consent
  promptAcceptDefault () {
    this.setState({
      categoryChoices: PrivacyChoicesPreferences.acceptDefaultCategories()
    })
    PrivacyChoicesPreferences.setUserHasInteracted(true)
    this.runAllCategoryCallbacks()
    this.setPromptShown(false)
  };

  // Handle user choosing settings
  promptOpenSettings () {
    this.setSettingsOpen(true)
    this.setPromptShown(false)
  };

  // Bulk accept all handler
  bulkAcceptAll () {
    this.setState({
      categoryChoices: PrivacyChoicesPreferences.acceptAllCategories()
    })
    PrivacyChoicesPreferences.setUserHasInteracted(true)
    this.runAllCategoryCallbacks()
    this.toggleSettings()
  };

  // Bulk reject all handler
  bulkRejectAll () {
    this.setState({
      categoryChoices: PrivacyChoicesPreferences.declineAllCategories()
    })
    PrivacyChoicesPreferences.setUserHasInteracted(true)
    this.runAllCategoryCallbacks()
    this.toggleSettings()
  };

  // Change a category's consent
  saveCategoryChange (categoryKey, isConsented) {
    this.setState({
      categoryChoices: PrivacyChoicesPreferences.setCategoryConsent(categoryKey, isConsented)
    })
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
    const sidebarContent = <PrivacyChoicesSettings categoryChoices={this.state.categoryChoices} onClose={this.toggleSettings} onAcceptAll={this.bulkAcceptAll} onRejectAll={this.bulkRejectAll} saveCategoryChange={this.saveCategoryChange} />

    return (
    // react-sidebar needs to wrap the other content, in this case the banner is a child
      <Sidebar sidebar={sidebarContent} open={this.state.isSettingsOpen} styles={sidebarStyles}>
        <PrivacyChoicesBanner onClickOpen={this.toggleSettings} isPromptVisible={this.state.isPromptShown} onPromptAccept={this.promptAcceptDefault} onPromptSettings={this.promptOpenSettings} />
      </Sidebar>
    )
  };
};

// Export component
export default PrivacyChoices
