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

  /**
   * Accepts and stores the default consent choices for the user.
   *
   * Any of the consent categories marked as 'default' will have their consent marked as accepted.
   *
   * Returns the new choices being saved.
   */
  static acceptDefaultCategories () {
    let preferences = this.readPreferences()
    if (preferences) {
      PrivacyChoicesConfiguration.categories.forEach((category) => {
        if (category.default) {
          preferences.choices[category.key] = true
        }
      })
      this.writePreferences(preferences)
    }

    return preferences.choices
  }

  /**
   * Accepts and stores all consent categories for the user.
   *
   * All consent categories will have their consent choice marked as accepted.
   *
   * Returns the new choices being saved.
   */
  static acceptAllCategories () {
    let preferences = this.readPreferences()

    if (preferences) {
      PrivacyChoicesConfiguration.categories.forEach((category) => {
        preferences.choices[category.key] = true
      })
      this.writePreferences(preferences)
    }

    return preferences.choices
  }

  /**
   * Declines and stores all consent categories for the user.
   *
   * All consent categories will have their consent choice marked as declined.
   *
   * Returns the new choices being saved.
   */
  static declineAllCategories () {
    let preferences = this.readPreferences()

    if (preferences) {
      PrivacyChoicesConfiguration.categories.forEach(category => {
        preferences.choices[category.key] = false
      })
      this.writePreferences(preferences)
    }

    return preferences.choices
  }
}

export default PrivacyChoicesPreferences
