// Imports
import React, { Component } from 'react'
import Sidebar from 'react-sidebar'

// Local imports
import PrivacyChoicesBanner from './banner'
import PrivacyChoicesConfiguration from '../configuration'
import PrivacyChoicesPreferences from '../preferences'
import PrivacyChoicesSettings from './settings'

/**
 * Main Privacy Choices component.
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

    // Bind handlers
    this.handleOpenSettings = this.handleOpenSettings.bind(this)
    this.handleCloseSettings = this.handleCloseSettings.bind(this)
    this.handleAcceptDefault = this.handleAcceptDefault.bind(this)
    this.handleAcceptAll = this.handleAcceptAll.bind(this)
    this.handleDeclineAll = this.handleDeclineAll.bind(this)
    this.handleChangeCategory = this.handleChangeCategory.bind(this)
  }

  /*******************
   * STATE FUNCTIONS *
   *******************/

  /**
   * Update state of isSettingsOpen.
   *
   * @param {boolean} state New state of isSettingsOpen.
   */
  setSettingsOpen (state) {
    this.setState({
      isSettingsOpen: state
    })
  }

  /**
   * Update state of isPromptShown.
   *
   * @param {boolean} state New state of isPromptShown.
   */
  setPromptShown (state) {
    this.setState({
      isPromptShown: state
    })
  }

  /**
   * Update state of a consent category's choice.
   *
   * @param {*} categoryKey
   * @param {*} isConsented
   */
  setCategoryChoice (categoryKey, isConsented) {
    this.setState((prevState) => ({
      categoryChoices: {
        ...prevState.categoryChoices,
        [categoryKey]: isConsented
      }
    }))
  }

  /*******************
   * LOGIC FUNCTIONS *
   *******************/

  /**
   * Toggle the settings menu.
   *
   * @param {*} doOpenSettings
   */
  openSettings (doOpenSettings) {
    // Update state
    this.setSettingsOpen(doOpenSettings)

    // If closing settings without interaction bring up the prompt, otherwise ensure closed
    this.setPromptShown(!doOpenSettings && !PrivacyChoicesPreferences.getHasUserInteracted())
  }

  /**
   * Accept the default consent categories.
   */
  acceptDefault () {
    // Set preference for default categories
    PrivacyChoicesConfiguration.categories.forEach((category) => {
      if (category.default) {
        this.changeCategory(category.storageKey, true)
      }
    })

    // This is an interaction
    this.recordInteraction()
  }

  /**
   * Accept all consent categories.
   */
  acceptAll () {
    // Set preference for all categories
    PrivacyChoicesConfiguration.categories.forEach((category) => {
      this.changeCategory(category.storageKey, true)
    })

    // This is an interaction
    this.recordInteraction()

    // Close settings
    this.openSettings(false)
  }

  /**
   * Decline all consent categories.
   */
  declineAll () {
    // Set preference for all categories
    PrivacyChoicesConfiguration.categories.forEach((category) => {
      this.changeCategory(category.storageKey, false)
    })

    // This is an interaction
    this.recordInteraction()

    // Close settings
    this.openSettings(false)
  }

  /**
   * Change choice for a consent category.
   *
   * @param {*} categoryKey
   * @param {*} isConsented
   */
  changeCategory (categoryKey, isConsented) {
    // Update storage
    PrivacyChoicesPreferences.setCategoryConsent(categoryKey, isConsented)

    // Update state
    this.setCategoryChoice(categoryKey, isConsented)

    // Run callbacks
    this.runCategoryCallbacks(categoryKey, isConsented)

    // This is an interaction
    this.recordInteraction()
  }

  /**
   * Record interaction with choices.
   */
  recordInteraction () {
    // Update storage
    PrivacyChoicesPreferences.setUserHasInteracted(true)

    // Update state
    this.setPromptShown(false)
  }

  /**
   * Execute the callbacks for a category depending on if it has been checked or unchecked.
   */
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

  /**
   * Execute the callback for the necessary category.
   */
  runNecessaryCallback () {
    typeof PrivacyChoicesConfiguration.necessary.handleEnabled === 'function' && PrivacyChoicesConfiguration.necessary.handleEnabled()
  }

  /**
   * Execute the callback for all categories.
   */
  runAllCategoryCallbacks () {
    PrivacyChoicesConfiguration.categories.forEach(element => {
      this.runCategoryCallbacks(element.storageKey, PrivacyChoicesPreferences.isCategoryConsented(element.storageKey))
    })
  }

  /*********************
   * HANDLER FUNCTIONS *
   *********************/

  /**
   * Handle opening settings menu.
   */
  handleOpenSettings () {
    this.openSettings(true)
  }

  /**
   * Handle closing settings menu.
   */
  handleCloseSettings () {
    this.openSettings(false)
  }

  /**
   * Handle accepting the default consent categories.
   */
  handleAcceptDefault () {
    this.acceptDefault()
  }

  /**
   * Handle accepting all consent categories.
   */
  handleAcceptAll () {
    this.acceptAll()
  }

  /**
   * Handle declining all consent categories.
   */
  handleDeclineAll () {
    this.declineAll()
  }

  /**
   * Handle changing a consent category's choice.
   *
   * @param {*} categoryKey
   * @param {*} isConsented
   */
  handleChangeCategory (categoryKey, isConsented) {
    this.changeCategory(categoryKey, isConsented)
  }

  /*******************
   * RENDER FUNCTION *
   *******************/
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
    const sidebarContent = <PrivacyChoicesSettings categoryChoices={this.state.categoryChoices} onClose={this.handleCloseSettings} onAcceptAll={this.handleAcceptAll} onDeclineAll={this.handleDeclineAll} saveCategoryChange={this.handleChangeCategory} />

    return (
    // react-sidebar needs to wrap the other content, in this case the banner is a child
      <Sidebar sidebar={sidebarContent} open={this.state.isSettingsOpen} styles={sidebarStyles}>
        <PrivacyChoicesBanner isPromptVisible={this.state.isPromptShown} onAccept={this.handleAcceptDefault} onSettings={this.handleOpenSettings} />
      </Sidebar>
    )
  };
};

// Export component
export default PrivacyChoices
