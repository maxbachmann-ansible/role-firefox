# ansible-firefox
Ansible Playbook to install firefox, the firefox addons mentioned in [Firefox Kompendium](https://www.kuketz-blog.de/firefox-ein-browser-fuer-datenschutzbewusste-firefox-kompendium-teil1/), the user.js from [Ghacks](https://github.com/ghacksuserjs/ghacks-user.js) and the following search keywords:

| keyword | searchmachine                                   |
|---------|-------------------------------------------------|
| s:      | https://www.startpage.com/do/search             |
| ddg:    | https://duckduckgo.com/html                     |
| sx:     | https://suche.honigdachse.de/                   |
| q:      | https://lite.qwant.com/?l=de&amp;q=%s&amp;t=web |
| yt:     | https://invidio.us/search?q=%s                  |

After running the role the addons are in firefox, but need to be enabled on the first start of firefox 
