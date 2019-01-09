/* 0850a: disable location bar autocomplete and suggestion types
 * If you enforce any of the suggestion types, you MUST enforce 'autocomplete'
 *   - If *ALL* of the suggestion types are false, 'autocomplete' must also be false
 *   - If *ANY* of the suggestion types are true, 'autocomplete' must also be true
 * [SETUP-CHROME] If all three suggestion types are false, search engine keywords are disabled
 * [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest
 * Required to use keywords for searchmachines ***/
user_pref("browser.urlbar.autocomplete.enabled", true);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.openpage", false);
