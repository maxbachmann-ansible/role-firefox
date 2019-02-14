# Ansible Role: firefox

[![Build Status](https://travis-ci.com/maxbachmann/role-firefox.svg?branch=master)](https://travis-ci.com/maxbachmann/role-firefox)

An Ansible Role that installs Firefox, the firefox addons mentioned in [Firefox Kompendium](https://www.kuketz-blog.de/firefox-ein-browser-fuer-datenschutzbewusste-firefox-kompendium-teil1/), the user.js from [Ghacks](https://github.com/ghacksuserjs/ghacks-user.js), some offline fonts so remote fonts are not required and some search keywords for the Url-Bar. The role is compatible with RHEL/CentOS, Fedora, Debian and Ubuntu.
Be aware that while this config blocks a lot of tracking, which helps bot with privacy and security it give the user a very unique fingerprint aswell. Thats why it´s still recommended to use the [TOR Browser](https://www.torproject.org/) for normal surfing and this firefox config for functions that websites that require a login (e.g. forums, social media, online banking or online shopping).

The role can be found on [ansible galaxy](https://galaxy.ansible.com/maxbachmann/firefox)

## Requirements
This role will work on the following operating systems:

- Red Hat
- Fedora
- CentOS
- Debian
- Ubuntu
- ArchLinux (untested)

So, you'll need one of those operating systems.. :-)
Please sent Pull Requests or suggestions when you want to use this role for other Operating systems.

## Installation

Installing this role is very simple:
```bash
ansible-galaxy install maxbachmann.firefox
```
This will install the firefox role into your roles directory.

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

| keyword | searchengine                                           |
|---------|--------------------------------------------------------|
| g:      | [google](https://www.google.com/search?q=%s)           |
| ddg:    | [duckduckgo](https://duckduckgo.com/?q=%s)             |
| s:      | [startpage](https://www.startpage.com/do/search/?q=%s) |
| sx:     | [searx](https://suche.honigdachse.de/?q=%s)            |
| q:      | [qwant](https://lite.qwant.com/?q=%s)                  |
| yt:     | [invidious](https://invidio.us/search?q=%s)           |

1) Google is includes but definetly not recommended for privacy reasons.
2) DuckDuckgo is not optimal either since it´s located in the US and uses Amazon AWS.
3) Startpage anonymously serves google results.
4) suche.honigdachse is a instance of searx. Searx is a search engine, that can be self hosted to serve results from multiple search engines.
5) Qwant is a french search engine with a own search index.
6) Invidious anonymously serves youtube results.

The search engines can be used by typing the keyword into the URL-Bar of Firefox
![keywords](https://raw.githubusercontent.com/maxbachmann/role-firefox/master/common/images/keyword.png)

## Dependencies
None.

## Example Playbook
```yaml
- hosts: all
  roles:
    - role: maxbachmann.firefox
      search_engines:
        - startpage
        - invidious
        - searx
        - qwant
```

## Contribution Guidelines
Contributions of all kinds are welcome, not only in the form of code but also with regards bug reports and documentation.
Please keep the following in mind:

**Bug Reports**:  Make sure you're running the latest version. If the issue(s) still persist: please open a clearly documented issue with a clear title.

**Minor Bug Fixes**: Please send a pull request with a clear explanation of the issue or a link to the issue it solves.

**Major Bug Fixes**: please discuss your approach in an issue before you start to alter a big part of the code.

**New Features**: please discuss in a issue before you start to alter a big part of the code. Without discussion upfront, the pull request might not be accepted / merged.

## License
GNU General Public License v3.0

## Author Information
This role was created by maxbachmann
