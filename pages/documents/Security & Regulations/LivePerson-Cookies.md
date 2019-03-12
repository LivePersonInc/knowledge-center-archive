---
categoryName: Security & regulations
indicator: both
pagename: LivePerson Cookies
subtitle: LivePerson uses information stored in cookies to maintain session data and
  to identify returning visitors
permalink: Security-regulations-LivePerson-cookies.html
date: 2019-03-12 13:24:55 +0200
subCategoryName: ''
level3: ''
isTutorial: false
isNew: false

---
A cookie is a small piece of data sent from a website and stored in the visitors' web browser. It helps the website to remember information about a visit; so when a visitor browses the same website in the future, the data stored in the cookie is sent back to the website by the browser.

LivePerson uses information stored in cookies to maintain session data and to identify returning visitors by saving LivePerson-specific data such as visitor ID and last chat date. It is important to note that the cookies do not contain any private customer data, or any data that can be accessible or useful outside of LivePerson.

## Cookie Solution Types

By default, LivePerson uses the third-party cookie solution type for visitors. However if this is not your preferred option, please contact your Success Manager.

The following lists the cookie solution types offered by LivePerson:

### Third-party (Default)

All browsing and chatting cookies will be set with the LivePerson domain. Some will be set as session cookies and others as persistent cookies in order to identify repeat visitors.

\- If the browser does not support third- party cookies, it will fall back to the **first- party persistent cookie**.

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

Browsing cookies under your website domain will be set by LivePerson as persistent cookies, so that browsing history is available. If a visitor chats, the LivePerson chat window will set a persistent first party cookie.

{: .notice}  
Secure cookies with **first-party cookie** solution types are not supported.

### First-party session 

Cookies are session cookies and will therefore be deleted when the visitor closes their browser. As a result, with this setting you will not see browsing history for returning visitors.

{: .notice}  
Secure cookies with **first-party cookie** solution types are not supported.

## Considerations

The following issues should be considered when working with LivePerson Cookies:

{: .notice}**  
**For any further clarification on instructions with any of the issues discussed below, please contact _LivePerson Technical Support._

### Secure Cookies

LivePerson supports secure cookies, but require the Monitor Tag to be deployed using HTTPS.

### HttpOnly Attribute

LivePerson is unable to support the HttpOnly attribute because it does not operate through JavaScript, which facilitates the Monitor Tag to collect cookies.

### Third Party Cookies - Default

By default, LivePerson uses third-party session and visitor cookies in order to save visitor's tracking information. This is due to the fact that while visitors are browsing your site, the LivePerson cookies are set by the LivePerson domain and not by your website domain.

### Chat Button Tags

If you decide to use a first-party cookie solution, you must ensure that all the static button tags on your account are first-party cookie compatible.

## LivePerson Cookies Content

See below all specific cookie configuration types used by LivePerson.

### Monitor Related Cookies

#### **LivePersonID**

{: .notice}  
__*__ LivePersonID cookie is set twice with different content. The cookie name is not the sole unique identifier.

Used in conjunction with the HumanClickKEY cookie to gather usage data related to a visitor's visit to a LivePerson customer's website. The information gathered is essential for determining whether LivePerson's hosted services should launch on the visitor's browser. This cookie is set when LivePerson's services initiate monitoring.

Disabling or blocking this cookie may limit or prevent the visitor from receiving assistance or offers from the customer's website via LivePerson's services.

**Structure:** The browser creates the cookie name, path and domain:

* "/".liveperson.net It includes the following information:
* LivePerson VisitorID
* Creation time

**Cookie Type:** Persistent and expires after 1 year

#### LivePersonID

{: .notice}* LivePersonID cookie is set twice with different content. The cookie name is not the sole unique identifier.

**Structure:**The browser creates the cookie name, path and domain:

"/hc/{SITEID}" for example: sales.liveperson.net

It includes the following information:

* LivePerson VisitorID
* Last visit time
* Last chat time

**Cookie Type:** Persistent and expires after 1 year

#### HumanClickKEY 

The session key of a visit.

Used for usage data related to the visitor's visit on the customer's website. For example: to identify a visitor's session on a customer's website, to monitor the pages viewed by the visitor on the customer's website, and the time spent by the visitor on pages of the customer's website.

Disabling or blocking this cookie may limit or prevent the visitor from receiving assistance or offers from the customer's website via LivePerson's services.

**Structure:**

The browser creates the cookie name, path and domain:

"/hc/{SITEID}" for example: sales.liveperson.net

**Cookie type:** Session

#### **HumanClickACTIVE** 

Acceptance test cookie.

Used to determine whether a cookie can be set on a browser. This cookie is set when LivePerson's services initiate monitoring.

Disabling or blocking this cookie may limit or prevent the visitor from receiving assistance or offers on the customer's website via LivePerson's services.

**Structure:**

The browser creates the cookie name, path and domain:

"/hc/{SITEID}" for example: sales.liveperson.net

**Cookie type:** Persistent (Expires after 1 day)

#### HumanClickSiteContainer ID_<SITEID> 

Used to allow LivePerson to distribute usage of its services across a cluster of servers (for load balancing purposes). This cookie is set when LivePerson's services initiate monitoring on the applicable customer's website.

It is used for sites on the Federation server; and details which element (container/session) in the Federation server is assigned to the visitor.

Disabling or blocking this cookie may limit or prevent the visitor from receiving assistance or offers from the customer's website via LivePerson's services.

**Structure:**

The browser creates the cookie name, path and domain:

"/hc/{SITEID}" for example: sales.liveperson.net

{: .notice}**  
**This can only be viewed in the federation server.

**Cookie type:** Session

#### lpCloseInvite 

Added in order to prevent the rare situation of repeat invitations

occurring. The cookie is dropped to avoid an invitation being displayed twice.

**Cookie type:** Session

#### OpenX 

This cookie is used in conjunction with LivePerson's LP Marketer service. This cookie manages and optimizes the delivery of offers and other content via the websites of customers who have implemented LP Marketer. It is set when a visitor visits the website of a customer who has implemented LP Marketer provided that the anonymous usage data related to such visitor matches a current marketing campaign run by the customer.

**Note:** Disabling or blocking this cookie will prevent the visitor from receiving offers from the customer via LP Marketer but does not impact LivePerson's other services.

**Cookie type:** Persistent (Expires after 7 days)

### Chat Related Cookies

{: .notice}  
LivePerson chat does not require cookies in order to operate.

#### HumanClickCHATKEY 

Creates a unique key to identify each chat session. Used for security purposes to identify each LivePerson chat and voice communication session. This cookie is set when the visitor to the customer's website requests an engagement within a chat or voice session with the customer.

Disabling or blocking this cookie may limit or prevent the visitor from receiving assistance on the customer's website via LivePerson's chat or voice services.

**Cookie type:** Session

LPit Used by LivePerson to allow the system to optimize its service. It is set when the visitor to the customer's website requests to engage in a chat session with the customer.

Disabling or blocking this cookie does not prevent chat from working.

**Cookie type:** Session