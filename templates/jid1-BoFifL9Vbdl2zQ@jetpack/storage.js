{
    "xhrTestDomain":"decentraleyes.org",
    "showIconBadge":"{{ decentraleyes.showIconBadge | to_json }}",
    "blockMissing":"{{ decentraleyes.blockMissing | to_json }}",
    "disablePrefetch":"{{ decentraleyes.disablePrefetch | to_json }}",
    "stripMetadata":"{{ decentraleyes.stripMetadata | to_json }}",
    "whitelistedDomains":{
{% for domain in decentraleyes.whitelistedDomains %}
        {{ domain | to_json }}{{ ',' if not loop.last else '' }}
{% endfor %}
    }
}
