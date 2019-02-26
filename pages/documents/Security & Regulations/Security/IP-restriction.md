---
pagename: IP restriction
categoryName: Security & regulations
subCategoryName: Security
indicator: both
subtitle: Create an IP whitelist to ensure secure use of app keys
level3: ''
permalink: security-regulations-security-IP-restriction.html
isTutorial: false
isNew: false
date: 2019-01-24 11:51:12 +0000

---
To ensure that App keys cannot be utilized by an unauthorized user outside a brand’s internal network, app keys will only be able to be used via the brand’s valid IP addresses.

When an account administrator creates or modifies an app key, they will be able to assign a list of single IPs or ranges of IPs to a whitelist. If an app key has an IP whitelisting configuration, only requests originating from these IPs will have access to LivePerson servers.

Currently, only the following APIs will be supported:

* [Operational real-time API](https://developers.liveperson.com/essential-resources-getting-started-with-data-apis.html#operational-real-time-api-chat)
* [Engagement history API](https://developers.liveperson.com/essential-resources-getting-started-with-data-apis.html#engagement-history-api-chat)
* [Users API](https://developers.liveperson.com/users-api-overview.html#use-cases-for-users-api)
* [Skills API](https://developers.liveperson.com/skills-api-overview.html#introduction)
* [Agent groups API](https://developers.liveperson.com/agent-groups-api-overview.html#use-cases-for-the-agent-groups-api)
* [Profiles API](https://developers.liveperson.com/profiles-api-overview.html#introduction)
* [LOBs API](https://developers.liveperson.com/lobs-api-overview.html#introduction)
* [Messaging operations API](https://developers.liveperson.com/essential-resources-getting-started-with-data-apis.html#messaging-operations-api)
* [Messaging interactions API](https://developers.liveperson.com/essential-resources-getting-started-with-data-apis.html#messaging-interactions-api-messaging-only)

Additional API support will follow.

{: .notice}  
Due to service layer caching, there could be a slight delay (up to 5 minutes) from the moment an IP-Restriction is activated/updated until actual enforcement.

LivePerson strongly recommends enabling the API IP protection. If you have any questions, please contact LivePerson support.