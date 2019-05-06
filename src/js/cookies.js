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
    static setCookie(cookieName, cookieValue, expiryDays) {
        var cookieExpires;
        if (expiryDays) {
            var date = new Date();
            date.setTime(date.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
            cookieExpires = "; expires=" + date.toGMTString();
        }
        else {
            cookieExpires = "";
        }
        document.cookie = cookieName + "=" + cookieValue + cookieExpires + "; path=/";
    };

    static getCookie(cookieName) {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(cookieName + "=");
            if (c_start != -1) {
                c_start = c_start + cookieName.length + 1;
                var c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return null;
    };
}

export default CookiesHelper;