/**
 * Cookie storage.
 */
class CookiesHelper {
  /**
     * Set cookie.
     *
     * @param {string} cookieName
     * @param {string} cookieValue
     * @param {int} expiryDays
     */
  static setCookie (cookieName, cookieValue, expiryDays) {
    var cookieExpires
    if (expiryDays) {
      var date = new Date()
      date.setTime(date.getTime() + (expiryDays * 24 * 60 * 60 * 1000))
      cookieExpires = '; expires=' + date.toGMTString()
    } else {
      cookieExpires = ''
    }
    document.cookie = cookieName + '=' + cookieValue + cookieExpires + '; path=/'
  };

  static getCookie (cookieName) {
    if (document.cookie.length > 0) {
      var cStart = document.cookie.indexOf(cookieName + '=')
      if (cStart !== -1) {
        cStart = cStart + cookieName.length + 1
        var cEnd = document.cookie.indexOf(';', cStart)
        if (cEnd === -1) {
          cEnd = document.cookie.length
        }
        return unescape(document.cookie.substring(cStart, cEnd))
      }
    }
    return null
  };
}

export default CookiesHelper
