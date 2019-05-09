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
    this.setPromptShown(false)
    this.setSettingsOpen(!this.state.isSettingsOpen)
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
    this.setSettingsOpen(false)
  };

  // Bulk reject all handler
  bulkRejectAll () {
    this.setState({
      categoryChoices: PrivacyChoicesPreferences.declineAllCategories()
    })
    PrivacyChoicesPreferences.setUserHasInteracted(true)
    this.runAllCategoryCallbacks()
    this.setSettingsOpen(false)
  };

  // Change a category's consent
  saveCategoryChange (categoryKey, isConsented) {
    this.setState({
      categoryChoices: PrivacyChoicesPreferences.setCategoryConsent(categoryKey, isConsented)
    })
    PrivacyChoicesPreferences.setUserHasInteracted(true)

    this.runCategoryCallbacks(categoryKey)
  }

  // Execute the callbacks for this category depending on if it has been checked or unchecked
  runCategoryCallbacks (categoryKey, isConsented) {
    let category = PrivacyChoicesConfiguration.categories.find((element) => {
      if (element.key === categoryKey) {
        return element
      }
    })

    if (category && isConsented) {
      typeof category.handleEnabled === 'function' && category.handleEnabled()
    } else {
      typeof category.handleDisabled === 'function' && category.handleDisabled()
    }
  }

  // Execute all category callbacks
  runAllCategoryCallbacks () {
    typeof PrivacyChoicesConfiguration.necessary.handleEnabled === 'function' && PrivacyChoicesConfiguration.necessary.handleEnabled()

    PrivacyChoicesConfiguration.categories.forEach(element => {
      this.runCategoryCallbacks(element.key, PrivacyChoicesPreferences.isCategoryConsented(element.key))
    })
  }

  // Render
  render () {
    // Sidebar content
    const sidebarContent = <PrivacyChoicesSettings categoryChoices={this.state.categoryChoices} onClose={this.toggleSettings} onAcceptAll={this.bulkAcceptAll} onRejectAll={this.bulkRejectAll} saveCategoryChange={this.saveCategoryChange} />

    return (
    // react-sidebar needs to wrap the other content, in this case the banner is a child
      <Sidebar sidebar={sidebarContent} open={this.state.isSettingsOpen} styles={{ sidebar: { position: 'fixed' } }}>
        <PrivacyChoicesBanner onToggleSettings={this.toggleSettings} isPromptShown={this.state.isPromptShown} onPromptAccept={this.promptAcceptDefault} onPromptSettings={this.promptOpenSettings} />
      </Sidebar>
    )
  };
};

// Export component
export default PrivacyChoices
