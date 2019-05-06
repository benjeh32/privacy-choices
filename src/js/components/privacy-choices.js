// Imports
import React, { Component } from 'react';
import Sidebar from 'react-sidebar';

// Local imports
import PrivacyChoicesBanner from './banner';
import PrivacyChoicesPreferences from '../preferences';
import PrivacyChoicesSettings from './settings';

// Constants
const defaultIsSidebarOpen = false;

/**
 * Privacy choices component.
 */
class PrivacyChoices extends Component {

    // Constructor
    constructor(props) {
        super(props);

        // Set up state
        this.state = {
            isSidebarOpen: defaultIsSidebarOpen
        };

        // Bind functions
        this.toggleSidebar = this.toggleSidebar.bind(this);
    };

    // State toggle for sidebar
    toggleSidebar() {
        this.setState({
            isSidebarOpen: !this.state.isSidebarOpen
        });
    };

    // Render
    render() {
        // Sidebar content
        const sidebarContent = <PrivacyChoicesSettings {...this.props} />;

        // Whether consent is already held
        const isConsentHeld = PrivacyChoicesPreferences.isPreferencesStored();

        return (
            // react-sidebar needs to wrap the other content, in this case the banner is a child
            <Sidebar sidebar={sidebarContent} open={this.state.isSidebarOpen}>
                <PrivacyChoicesBanner onToggleSidebar={this.toggleSidebar} isConsentHeld={isConsentHeld} />
            </Sidebar>
        );
    };
};

// Export component
export default PrivacyChoices;