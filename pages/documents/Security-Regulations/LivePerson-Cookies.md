---
categoryName: Security & regulations
indicator: both
pagename: LivePerson Cookies
subtitle: LivePerson uses information stored in cookies to maintain session data and
  to identify returning visitors
permalink: security-regulations-liveperson-cookies.html
date: '2019-03-12T11:24:55.000+00:00'
subCategoryName: ''
level3: ''
isTutorial: false
isNew: false

---

{: .notice}
For an in-depth and technical overview of Cookie types and properties, please see [this article](https://developers.liveperson.com/cookies-and-liveengage-overview.html) in the Developer Center.

A cookie is a small piece of data sent from a website and stored in the visitors' web browser. It helps the website to remember information about a visit; so when a visitor browses the same website in the future, the data stored in the cookie is sent back to the website by the browser.

Conversational Cloud uses information stored in cookies to maintain session data and to identify returning visitors by saving Conversational Cloud-specific data such as visitor ID and last chat date. It is important to note that the cookies **do not contain any private customer data**, or any data that can be accessible or useful outside of Conversational Cloud.

## Cookie Solution Types

By default, LivePerson uses the third-party cookie solution type for visitors. However if this is not your preferred option, please contact your Success Manager.

The following lists the cookie solution types offered by LivePerson:

### Third-party (Default)

All browsing and chatting cookies will be set with the LivePerson domain. Some will be set as session cookies and others as persistent cookies in order to identify repeat visitors.

\- If the browser does not support third- party cookies, it will fall back to the **first-party persistent cookie**.

\- As a result of the fall back to **first-party persistent cookies**, additional visitors may be monitored.

\- This is the default cookie setting.

### Third-party session

All browsing and chatting cookies will be session cookies set with the LivePerson domain. With this option the ability to identify repeat visitors will be disabled.

\- If the browser does not support the third-party session cookie it will fall back to the **first- party session cookie.**

\- As a result of the fall back to **first-party persistent cookies**, additional visitors may be monitored.

### First-party persistent cookies with third-party session

Browsing cookies under your website domain will be set by LivePerson as persistent cookies, so that browsing history is available. However duplicates are set as session cookies from the LivePerson domain to allow for monitoring of multiple domains using a single LivePerson site ID.

{: .notice}  
Secure cookies with **first-party cookie** solution types are not supported.

### First-party persistent

Browsing cookies under your website domain will be set by LivePerson as persistent cookies, so that browsing history is available. If a visitor chats, the LivePerson chat window will set a persistent first-party cookie.

{: .notice}  
Secure cookies with **first-party cookie** solution types are not supported.

### First-party session

Cookies are session cookies and will therefore be deleted when the visitor closes their browser. As a result, with this setting you will not see browsing history for returning visitors.

{: .notice}  
Secure cookies with **first-party cookie** solution types are not supported.

## Considerations

The following issues should be considered when working with Conversational Cloud Cookies:

{: .notice}  
For any further clarification on instructions with any of the issues discussed below, please contact _LivePerson Technical Support._

### Secure Cookies

Conversational Cloud supports secure cookies, but require the Monitor Tag to be deployed using HTTPS.

### HttpOnly Attribute

Conversational Cloud is unable to support the HttpOnly attribute because it does not operate through JavaScript, which facilitates the Monitor Tag to collect cookies.

### Third-party Storage - Default

By default, LivePerson uses third-party session and visitor cookies in order to save visitor's tracking information. This is due to the fact that while visitors are browsing your site, the LivePerson cookies are set by the LivePerson domain and not by your website domain.


## LivePerson Cookies Content

See below all specific cookie configuration types used by LivePerson.

### Monitoring Data

* **LPVID**: Visitor ID identified in Conversational Cloud. (1st party persistent)
* **LPSID-SiteID**: Current active (or last) monitoring session. (1st party session cookie)
* **LPSessionID**: Current active (or last) monitoring session. (3rd party HTTPOnly session cookie)
* **LPVisitorID**: Visitor ID identified in Conversational Cloud. (3rd party HTTPOnly persistent)
* **lpLastVisit-**: Last visit timestamp.
* **lpTabId**: Tab identifier to share data between browser tabs.
* **lpPmCalleeDfs**: For cross domain communication logic.

### Conversation Data

* **LPCID-SiteId**: Token for retrieving conversation data in the client only.
* **LPCKEY-SiteId**: Token for retrieving conversation data in the client only.
* **LivePersonID**: LivePerson chat identifier.
* **Storage_expiration-SiteId**: Timestamp for last storage usage.
* **lpStrMap**: Manages storages keys.
* **UIConf**: Stores conversation settings (features, logic etc.).
* **lpMessaging**-: Stores the JWT token and authentication code in messaging scenarios for messaging window recovery on navigation and cross tabs.
* **-lpuw**: Session state.

### Login Cookies

* **idpLastSiteId**: Last site id for Remember me functionality.
* **idpLastDomain**: Last domain used for login for Remember me functionality.
* **session_id**: Conversational Cloud agent session identification.
* **WSHumanClickServer**: Logical name of appserver handling the site.
* **WSHumanClickWebSession**: Appserver web session identifier.
* **WSHumanClickSiteNumber**: Site identifier.
* **agentSessionKey**: Agent session identifier in the appserver.

You may also observe external cookies like **JSESSIONID** and **dtCookie**. **JSESSIONID** is used as a part of session management in J2EE web applications and are generated by servlet containers. **dtCookie** is a session cookie used to identify user sessions.


For more detailed information on Cookies, please visit the [Developer Center](https://developers.liveperson.com/cookies-and-liveengage-overview.html)
