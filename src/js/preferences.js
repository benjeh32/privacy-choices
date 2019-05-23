// Local imports
import PrivacyChoicesConfiguration from './configuration'
import CookiesHelper from './cookies'

// Constants
const defaultPreferences = {
  'hasUserInteracted': false,
  'categoryAcceptance': { },
  'consentRefreshedDate': null,
  'consentExpiryDate': null
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

    if (preferences && preferences.categoryAcceptance) {
      choices = preferences.categoryAcceptance
    }

    return choices
  }

  /**
   * Initialise a user's preferences if needed.
   */
  static initPreferences () {
    let preferences = this.readPreferences()
    let needInitialisation = false

    // Need to initialise if no preferences found
    if (!preferences) {
      needInitialisation = true
    }

    // If preferences were found, reset them to cause re-consent if sufficient configuration has changed since last consent
    if (preferences) {
      // Exactly all optional categories should be present
      let userKeys = Object.keys(preferences.categoryAcceptance)
      let configKeys = []
      PrivacyChoicesConfiguration.categories.forEach((category) => {
        configKeys.push(category.storageKey)
      })
      let difference = configKeys
        .filter(configKey => !userKeys.includes(configKey))
        .concat(userKeys.filter(userKey => !configKeys.includes(userKey)))
      if (difference.length !== 0) {
        needInitialisation = true
      }
    }

    // Initialise preferences from default if needed
    if (needInitialisation) {
      // Start with default preference set
      preferences = defaultPreferences

      // Initialise all categories with non-acceptance
      PrivacyChoicesConfiguration.categories.forEach((category) => {
        preferences.categoryAcceptance[category.storageKey] = false
      })

      // Store
      this.writePreferences(preferences)
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
      preferences.categoryAcceptance[categoryKey] = isConsented
      this.writePreferences(preferences)
    }

    return preferences.categoryAcceptance
  }

  /**
   * Returns whether a category has accepted consent.
   */
  static isCategoryConsented (categoryKey) {
    let isCategoryConsented = false

    let preferences = this.readPreferences()

    if (preferences && preferences.categoryAcceptance[categoryKey]) {
      isCategoryConsented = preferences.categoryAcceptance[categoryKey]
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
   * Refresh the consent expiry date.
   */
  static refreshConsent () {
    let preferences = this.readPreferences()

    if (preferences) {
      // Record that there is interaction
      preferences.hasUserInteracted = true

      // Record the date of consent
      preferences.consentRefreshedDate = new Date().getTime()

      // Record consent expiry date
      preferences.consentExpiryDate = preferences.consentRefreshedDate + (PrivacyChoicesConfiguration.storage.expiryDays * 24 * 60 * 60 * 1000)
    }

    this.writePreferences(preferences)
  }
}

export default PrivacyChoicesPreferences
