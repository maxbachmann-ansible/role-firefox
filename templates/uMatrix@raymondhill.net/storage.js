{
    "selectedHostsFiles": ["malware-0", "malware-1", "dpollock-0", "hphosts", "mvps-0", "plowe-0"],
    "selectedRecipeFiles": ["recipes_en-0"],
    "liveHostsFiles": [
        ["malware-0", {
            "content": "filters",
            "title": "Malware Domain List",
            "contentURL": ["https://www.malwaredomainlist.com/hostslist/hosts.txt", "assets/thirdparties/www.malwaredomainlist.com/hostslist/hosts.txt"],
            "type": "filters",
            "hasLocalURL": true,
            "hasRemoteURL": true,
            "updateAfter": 13,
            "cached": true,
            "writeTime": 1545856470982,
            "obsolete": false,
            "remoteURL": "https://www.malwaredomainlist.com/hostslist/hosts.txt",
            "entryCount": 1109,
            "entryUsedCount": 1109,
            "selected": true
        }],
        ["malware-1", {
            "content": "filters",
            "title": "Malware domains",
            "contentURL": ["https://mirror.cedia.org.ec/malwaredomains/justdomains", "https://mirror1.malwaredomains.com/files/justdomains", "assets/thirdparties/mirror1.malwaredomains.com/files/justdomains", "assets/thirdparties/mirror1.malwaredomains.com/files/justdomains.txt"],
            "supportURL": "http://www.malwaredomains.com/",
            "type": "filters",
            "hasLocalURL": true,
            "hasRemoteURL": true,
            "updateAfter": 13,
            "cached": true,
            "writeTime": 1545856593901,
            "obsolete": false,
            "remoteURL": "https://mirror.cedia.org.ec/malwaredomains/justdomains",
            "entryCount": 26856,
            "entryUsedCount": 26841,
            "selected": true
        }],
        ["dpollock-0", {
            "content": "filters",
            "updateAfter": 11,
            "title": "Dan Pollock’s hosts file",
            "contentURL": ["https://someonewhocares.org/hosts/hosts", "assets/thirdparties/someonewhocares.org/hosts/hosts.txt"],
            "supportURL": "https://someonewhocares.org/hosts/",
            "type": "filters",
            "hasLocalURL": true,
            "hasRemoteURL": true,
            "cached": true,
            "writeTime": 1545856716553,
            "obsolete": false,
            "remoteURL": "https://someonewhocares.org/hosts/hosts",
            "entryCount": 13851,
            "entryUsedCount": 13834,
            "selected": true
        }],
        ["hphosts", {
            "content": "filters",
            "updateAfter": 11,
            "title": "hpHosts’ Ad and tracking servers",
            "contentURL": ["https://hosts-file.net/.%5Cad_servers.txt", "assets/thirdparties/hosts-file.net/ad_servers.txt"],
            "supportURL": "https://hosts-file.net/",
            "type": "filters",
            "hasLocalURL": true,
            "hasRemoteURL": true,
            "cached": true,
            "writeTime": 1545857860376,
            "obsolete": false,
            "remoteURL": "https://hosts-file.net/.%5Cad_servers.txt",
            "entryCount": 45743,
            "entryUsedCount": 43079,
            "selected": true
        }],
        ["mvps-0", {
            "content": "filters",
            "updateAfter": 11,
            "title": "MVPS HOSTS",
            "contentURL": ["http://winhelp2002.mvps.org/hosts.txt", "assets/thirdparties/winhelp2002.mvps.org/hosts.txt"],
            "supportURL": "http://winhelp2002.mvps.org/",
            "type": "filters",
            "hasLocalURL": true,
            "hasRemoteURL": true,
            "cached": true,
            "writeTime": 1545857982421,
            "obsolete": false,
            "remoteURL": "http://winhelp2002.mvps.org/hosts.txt",
            "entryCount": 12449,
            "entryUsedCount": 8523,
            "selected": true
        }],
        ["plowe-0", {
            "content": "filters",
            "updateAfter": 13,
            "title": "Peter Lowe’s Ad and tracking server list",
            "contentURL": ["https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&showintro=1&mimetype=plaintext", "assets/thirdparties/pgl.yoyo.org/as/serverlist", "assets/thirdparties/pgl.yoyo.org/as/serverlist.txt"],
            "supportURL": "https://pgl.yoyo.org/adservers/",
            "type": "filters",
            "hasLocalURL": true,
            "hasRemoteURL": true,
            "cached": true,
            "writeTime": 1545858102587,
            "obsolete": false,
            "remoteURL": "https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&showintro=1&mimetype=plaintext",
            "entryCount": 2946,
            "entryUsedCount": 1578,
            "selected": true
        }]
    ],
    "userMatrix": [
{% for rule in umatrix.userMatrix %}
        "{{ rule }}"{{ ',' if not loop.last else '' }}
{% endfor %}
{% if search_engines is defined %}
{% for selected_searchengine in search_engines %}
{% if selected_searchengine == 'google' %}
        , "google.com www.google.com script allow"
{% endif %}
{% endfor %}
{% endif %}
    ],
    "alwaysDetachLogger": false,
    "autoUpdate": true,
    "clearBrowserCache": {{ umatrix.clearBrowserCache | to_json }},
    "clearBrowserCacheAfter": {{ umatrix.clearBrowserCacheAfter }},
    "cloudStorageEnabled": {{ umatrix.cloudStorageEnabled | to_json }},
    "collapseBlacklisted": {{ umatrix.collapseBlacklisted | to_json }},
    "collapseBlocked": {{ umatrix.collapseBlocked | to_json }},
    "colorBlindFriendly": {{ umatrix.colorBlindFriendly | to_json }},
    "deleteCookies": {{ umatrix.deleteCookies | to_json }},
    "deleteUnusedSessionCookies": {{ umatrix.deleteUnusedSessionCookies | to_json }},
    "deleteUnusedSessionCookiesAfter": {{ umatrix.deleteUnusedSessionCookiesAfter }},
    "deleteLocalStorage": {{ umatrix.deleteLocalStorage | to_json }},
    "displayTextSize": "{{ umatrix.displayTextSize }}",
    "externalHostsFiles": [],
    "externalRecipeFiles": [],
    "iconBadgeEnabled": {{ umatrix.iconBadgeEnabled | to_json }},
    "maxLoggedRequests": 1000,
    "noTooltips": {{ umatrix.noTooltips | to_json }},
    "popupCollapseAllDomains": false,
    "popupCollapseBlacklistedDomains": false,
    "popupScopeLevel": "{{ umatrix.popupScopeLevel }}",
    "processHyperlinkAuditing": {{ umatrix.processHyperlinkAuditing | to_json }},
    "processReferer": false,
    "userHosts": {
        "enabled": false,
        "content": ""
    },
    "userRecipes": {
        "enabled": false,
        "content": ""
    }
}
