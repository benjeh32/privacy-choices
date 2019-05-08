// Imports
import ReactDOM from 'react-dom'
import React from 'react'

// Local imports
import PrivacyChoices from './components/privacy-choices'

// Styling imports
import '../css/banner.css'
import '../css/shared.css'
import '../css/settings.css'

// Styling constants
const rootElementId = 'privacy-choices'
const rootElementType = 'div'

// Set up root element to hold everything (if not already present)
if (!document.getElementById(rootElementId)) {
  var rootElement = document.createElement(rootElementType)

  rootElement.id = rootElementId

  document.body.appendChild(rootElement)
};

// Render everything into the root element
ReactDOM.render((
  <PrivacyChoices />
), document.getElementById(rootElementId))
