import CookiesHelper from './cookies';

const preferencesKey = 'privacy-choices';
const expiryDays = 365;
const defaultPreferences = {};

class PrivacyChoicesPreferences {

    /**
     * Update user preferences with a given set.
     * 
     * @param {Object} preferences The preferences to update to.
     */
    static writePreferences(preferences) {
        let updatePreferences = defaultPreferences;

        if (preferences) {
            updatePreferences = preferences;
        }

        CookiesHelper.setCookie(preferencesKey, JSON.stringify(updatePreferences), expiryDays);
    };

    /**
     * Read the user's current preferences.
     * 
     * @returns The user's preferences if stored, otherwise the default preference set.
     */
    static readPreferences() {

        var currentCookie = CookiesHelper.getCookie(preferencesKey);

        let userPreferences;

        if (currentCookie) {
            userPreferences = JSON.parse(currentCookie);
        }

        return userPreferences;
    };

    static setCategoryConsent(categoryKey, isConsented) {
        let preferences = this.readPreferences();
        if (!preferences) {
            preferences = defaultConsentCookie;
        };
        preferences[categoryKey] = isConsented;
        this.writePreferences(preferences);
    };

    static isCategoryConsented(categoryKey) {
        let isConsented;
        var preferences = this.readPreferences()
        if (preferences && preferences[categoryKey]) {
            isConsented = preferences[categoryKey];
        } else {
            isConsented = false;
        };
        return isConsented;
    };

    /**
     * Returns whether a user's preferences are currently stored or not.
     */
    static isPreferencesStored() {

        let isStored = false;

        if (this.readPreferences()) {
            isStored = true;
        }

        return isStored;
    };

}

export default PrivacyChoicesPreferences;