// Local imports
import PrivacyChoicesConfiguration from './configuration'
import CookiesHelper from './cookies'

// Constants
const defaultPreferences = {
  'hasUserInteracted': false,
  'choices': { }
}

class PrivacyChoicesPreferences {
  /**
   * Store user preferences.
   */
  static writePreferences (preferences) {
    let updatePreferences = defaultPreferences

    if (preferences) {
      updatePreferences = preferences
    }

    CookiesHelper.setCookie(PrivacyChoicesConfiguration.storage.key, JSON.stringify(updatePreferences), PrivacyChoicesConfiguration.storage.expiryDays)
  }

  /**
   * Recall user preferences.
   */
  static readPreferences () {
    let currentCookie = CookiesHelper.getCookie(PrivacyChoicesConfiguration.storage.key)

    let preferences

    if (currentCookie) {
      preferences = JSON.parse(currentCookie)
    }

    return preferences
  }

  /**
   * Recall consent choices.
   */
  static readConsentChoices () {
    let preferences = this.readPreferences()

    let choices

    if (preferences && preferences.choices) {
      choices = preferences.choices
    }

    return choices
  }

  /**
   * Initialise a user's preferences if not already set.
   */
  static initPreferences () {
    let preferences = this.readPreferences()

    if (!preferences) {
      this.writePreferences(defaultPreferences)
    }

    return preferences
  }

  /**
   * Sets a category's consent.
   *
   * Returns the new choices being saved.
   */
  static setCategoryConsent (categoryKey, isConsented) {
    let preferences = this.readPreferences()

    if (preferences) {
      preferences.choices[categoryKey] = isConsented
      this.writePreferences(preferences)
    }

    return preferences.choices
  }

  /**
   * Returns whether a category has accepted consent.
   */
  static isCategoryConsented (categoryKey) {
    let isCategoryConsented = false

    let preferences = this.readPreferences()

    if (preferences && preferences.choices[categoryKey]) {
      isCategoryConsented = preferences.choices[categoryKey]
    }

    return isCategoryConsented
  }

  /**
   * Returns whether a user has interacted.
   */
  static getHasUserInteracted () {
    let hasUserInteracted = false

    let preferences = this.readPreferences()

    if (preferences) {
      hasUserInteracted = preferences.hasUserInteracted
    }

    return hasUserInteracted
  }

  /**
   * Sets whether a user has interacted.
   */
  static setUserHasInteracted (hasUserInteracted) {
    let preferences = this.readPreferences()

    if (preferences) {
      preferences.hasUserInteracted = hasUserInteracted
    }

    this.writePreferences(preferences)
  }
}

export default PrivacyChoicesPreferences
