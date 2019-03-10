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
- ArchLinux

So, you'll need one of those operating systems.. :-)
Please sent Pull Requests or suggestions when you want to use this role for other Operating systems.

## Installation

Installing this role is very simple:
```bash
ansible-galaxy install maxbachmann.firefox
```
This will install the firefox role into your roles directory.

## Further Information
further Informations on the role variables and the config decisions can be found in the [wiki](https://github.com/maxbachmann-ansible/role-firefox/wiki)

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
