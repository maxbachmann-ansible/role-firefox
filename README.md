# Ansible Role: ansible-firefox

[![Build Status](https://travis-ci.com/maxbachmann/role-firefox.svg?branch=master)](https://travis-ci.com/maxbachmann/role-firefox)

An Ansible Role that installs Firefox, the firefox addons mentioned in [Firefox Kompendium](https://www.kuketz-blog.de/firefox-ein-browser-fuer-datenschutzbewusste-firefox-kompendium-teil1/), the user.js from [Ghacks](https://github.com/ghacksuserjs/ghacks-user.js), some offline fonts so remote fonts are not required and some search keywords for the Url-Bar. The role is compatible with RHEL/CentOS, Fedora, Debian and Ubuntu.

## Requirements
None.

## Role Variables
Avaible variables are listed below, along with default values (see `defaults/main.yml`):

```yaml
  firefox_path: "/home/{{ ansible_user_id }}/.mozilla/firefox"
  profile_name: "ansibleProfile.default"
  profile_path: "{{ firefox_path }}/{{ profile_name }}"
```
The locations to place all the files needed for firefox.

```yaml
  addon_download: "https://addons.mozilla.org/firefox/downloads/file"
```
The firefox downloads website for addons.

```yaml
  search_engine_list:
    - startpage:
      NAME: startpage websearch
      HREF: https://www.startpage.com/do/search/?q=%s
      ICON_URI: https://www.startpage.com/assets/images/logo-180x180.png?v=48842639
      ICON: "{{lookup('file', 'searchmachines/startpage_icon')}}"
      SHORTCUTURL: "s:"
      POST_DATA: "{{lookup('file', 'searchmachines/startpage_postdata')}}"
```
A list of search engine dicts, that include all possible parameters for keywords.

```yaml
  search_engines:
    - startpage
```
A list of the search engines that get added to the browser during the installation. They can later be called using the `SHORTCUTURL` in the Url-Bar. Check [search engines](#search-engines) for more informations on the avaible search engines.

## Search Engines
The script gives the possibility to choose between the following search engines.

| keyword | searchengine                              |
|---------|-------------------------------------------|
| g:      | https://www.google.com/search?q=%s        |
| ddg:    | https://duckduckgo.com/?q=%s              |
| s:      | https://www.startpage.com/do/search/?q=%s |
| sx:     | https://suche.honigdachse.de/?q=%s        |
| q:      | https://lite.qwant.com/?q=%s              |
| yt:     | https://invidio.us/search?q=%s            |

1) Google is includes but definetly not recommended for privacy reasons.
2) DuckDuckgo is not optimal either since it´s located in the US and uses Amazon AWS.
3) Startpage anonymously serves google results.
4) suche.honigdachse is a instance of searx. Searx is a search engine, that can be self hosted to serve results from multiple search engines.
5) Quant is a french search engine with a own search index.
6) Invidious anonymously serves youtube results.

## Dependencies
None.

## Example Playbook
```yaml
  search_engines:
    - startpage
```

## License
GNU General Public License v3.0



## Author Information
This role was created by maxbachmann
