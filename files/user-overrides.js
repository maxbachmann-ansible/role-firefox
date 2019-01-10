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

/* 1403: disable icon fonts (glyphs) and local fallback rendering
 * [1] https://bugzilla.mozilla.org/789788
 * [2] https://trac.torproject.org/projects/tor/ticket/8455 ***/
 user_pref("gfx.downloadable_fonts.enabled", false); // [FF41+]
 user_pref("gfx.downloadable_fonts.fallback_delay", -1);
 /* 0102: set START page (0=blank, 1=home, 2=last visited page, 3=resume previous session)
 * [NOTE] Session Restore is not used in PB mode (0110) and is cleared with history (2803, 2804)
 * [SETTING] General>Startup>Restore previous session ***/
user_pref("browser.startup.page", 1);
/* 0103: set HOME+NEWWINDOW page
 * about:home=Activity Stream (default, see 0105), custom URL, about:blank
 * [SETTING] Home>New Windows and Tabs>Homepage and new windows ***/
user_pref("browser.startup.homepage", "about:home");

//deactivate parts stuff on about:home
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.newtabinit", false);

//remove search bar from toolbar
user_pref("browser.search.widget.inNavBar", false);

//replace google by keyword in search field
user_pref("browser.urlbar.placeholderName", "keyword");

user_pref("browser.newtabpage.activity-stream.default.sites", "");
