// Imports
import React, { Component } from 'react'
import Sidebar from 'react-sidebar'

// Local imports
import PrivacyChoicesBanner from './banner'
import PrivacyChoicesPreferences from '../preferences'
import PrivacyChoicesSettings from './settings'

// Constants
const isSettingsOpenDefault = false

/**
 * Privacy choices component.
 */
class PrivacyChoices extends Component {
  // Constructor
  constructor (props) {
    super(props)

    // Set up state
    this.state = {
      isSettingsOpen: isSettingsOpenDefault,
      isPromptShown: !PrivacyChoicesPreferences.isPreferencesStored()
    }

    // Bind functions
    this.toggleSettings = this.toggleSettings.bind(this)
    this.promptAcceptDefault = this.promptAcceptDefault.bind(this)
    this.promptOpenSettings = this.promptOpenSettings.bind(this)
    this.bulkAcceptAll = this.bulkAcceptAll.bind(this)
    this.bulkRejectAll = this.bulkRejectAll.bind(this)
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
    this.setPromptShown(false)
    PrivacyChoicesPreferences.writePreferences({}) // TODO: this needs to call out to accept all the default consent items
  };

  // Handle user choosing settings
  promptOpenSettings () {
    this.setPromptShown(false)
    this.setSettingsOpen(true)
  };

  // Bulk accept all handler
  bulkAcceptAll () {
    this.setSettingsOpen(!this.state.isSettingsOpen) // TODO
    this.setSettingsOpen(false)
  };

  // Bulk reject all handler
  bulkRejectAll () {
    this.setSettingsOpen(!this.state.isSettingsOpen) // TODO
    this.setSettingsOpen(false)
  };

  // Render
  render () {
    // Sidebar content
    const sidebarContent = <PrivacyChoicesSettings onClose={this.toggleSettings} onAcceptAll={this.bulkAcceptAll} onRejectAll={this.bulkRejectAll} />

    return (
    // react-sidebar needs to wrap the other content, in this case the banner is a child
      <Sidebar sidebar={sidebarContent} open={this.state.isSettingsOpen}>
        <PrivacyChoicesBanner onToggleSettings={this.toggleSettings} isPromptShown={this.state.isPromptShown} onPromptAccept={this.promptAcceptDefault} onPromptSettings={this.promptOpenSettings} />
      </Sidebar>
    )
  };
};

// Export component
export default PrivacyChoices
