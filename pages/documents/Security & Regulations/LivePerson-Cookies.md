---
categoryName: Security & regulations
indicator: both
pagename: LivePerson Cookies
subtitle: LivePerson uses information stored in cookies to maintain session data and
  to identify returning visitors
permalink: Security-regulations-LivePerson-cookies.html
date: 2019-03-12 13:24:55 +0200
published: false

---
A cookie is a small piece of data sent from a website and stored in the visitors' web browser. It helps the website to remember information about a visit; so when a visitor browses the same website in the future, the data stored in the cookie is sent back to the website by the browser.

LivePerson uses information stored in cookies to maintain session data and to identify returning visitors by saving LivePerson-specific data such as visitor ID and last chat date. It is important to note that the cookies do not contain any private customer data, or any data that can be accessible or useful outside of LivePerson.

**Cookie Solution Types**

By default, LivePerson uses the third-party cookie solution type for visitors. However if this is not your preferred option, please contact your Success Manager.

The following table lists the cookie solution types offered by LivePerson:

**Cookie Type Description Items to Note **

**Third-party**

(Default)

All browsing and chatting cookies will be set with the LivePerson domain. Some will be set as session cookies and others as persistent cookies in order to identify repeat visitors.

\- If the browser does not support third- party cookies, it will fall back to the **first- party persistent cookie**.

\- If the browser does not support third- party cookies, it will fall back to the **first- party persistent cookie**.

\- If the browser does not support third- party cookies, it will fall back to the **first- party persistent cookie**.

\- As a result of the fall back to **first-party persistent cookies**, additional visitors may be monitored.

\- This is the default cookie setting.

**Third-party session** All browsing and chatting cookies will be

session cookies set with the LivePerson domain. With this option the ability to identify repeat visitors will be disabled.

\- If the browser does not support the third-party session cookie it will fall back to the **first- party session cookie.**

\- As a result of the fall back to **first-party persistent cookies**, additional visitors may be monitored.

**First-party persistent cookies with third-party session**

Browsing cookies under your website domain will be set by LivePerson as persistent cookies, so that browsing history is available. However duplicates are set as session cookies from the LivePerson domain to allow for monitoring of multiple domains using a single LivePerson site ID.

Secure cookies with **first-party cookie** solution types are not supported.

Secure cookies with **first-party cookie** solution types are not supported. 

**2 Data Sheet LivePerson Cookies**

**Cookie Type Description Items to Note **

**First-party persistent**

Browsing cookies under your website domain will be set by LivePerson as persistent cookies, so that browsing history is available. If a visitor chats, the LivePerson chat window will set a persistent first party cookie.

Secure cookies with **first-party cookie** solution types are not supported.

Secure cookies with **first-party cookie** solution types are not supported.

**First-party session** Cookies are session cookies and will therefore

be deleted when the visitor closes their browser. As a result, with this setting you will not see browsing history for returning visitors.

Secure cookies with **first-party cookie** solution types are not supported.

**Considerations **

The following issues should be considered when working with LivePerson Cookies.

**Note:** _For any further clarification on instructions with any of the issues discussed below, please contact_

_LivePerson Technical Support._

**Secure Cookies**

LivePerson supports secure cookies, but require the Monitor Tag to be deployed using HTTPS.

**HttpOnly Attribute**

LivePerson is unable to support the HttpOnly attribute because it does not operate through JavaScript, which facilitates the Monitor Tag to collect cookies.

**Third Party Cookies - Default**

By default, LivePerson uses third-party session and visitor cookies in order to save visitor's tracking information. This is due to the fact that while visitors are browsing your site, the LivePerson cookies are set by the LivePerson domain and not by your website domain.

**Chat Button Tags**

If you decide to use a first-party cookie solution, you must ensure that all the static button tags on your account are first-party cookie compatible.

**3 Data Sheet LivePerson Cookies**

**LivePerson Cookies - Content**

The table below lists all specific cookie configuration types used by LivePerson.

**Cookie Name Description Cookie Type**

**Monitor Related Cookies **

LivePersonID__*__ Used in conjunction with the HumanClickKEY cookie to gather

usage data related to a visitor's visit to a LivePerson customer's website. The information gathered is essential for determining whether LivePerson's hosted services should launch on the visitor's browser. This cookie is set when LivePerson's services initiate monitoring.

Disabling or blocking this cookie may limit or prevent the visitor from receiving assistance or offers from the customer's website via LivePerson's services.

**Structure:**

The browser creates the cookie name, path and domain:

"/".liveperson.net It includes the following information:

_-_ LivePerson VisitorID

_-_ Creation time

Persistent

(Expires after 1 year)

LivePersonID*** Structure:**

The browser creates the cookie name, path and domain:

"/hc/{SITEID}" for example: sales.liveperson.net

It includes the following information:

_-_ LivePerson VisitorID

\- Last visit time

\- Last chat time

Persistent

(Expires after 1 year) 

**4 Data Sheet LivePerson Cookies**

**Cookie Name Description Cookie Type**

HumanClickKEY The session key of a visit.

Used for usage data related to the visitor's visit on the customer's website. For example: to identify a visitor's session on a customer's website, to monitor the pages viewed by the visitor on the customer's website, and the time spent by the visitor on pages of the customer's website.

Disabling or blocking this cookie may limit or prevent the visitor from receiving assistance or offers from the customer's website via LivePerson's services.

**Structure:**

The browser creates the cookie name, path and domain:

"/hc/{SITEID}" for example: sales.liveperson.net

Session

HumanClickACTIVE Acceptance test cookie.

Used to determine whether a cookie can be set on a browser. This cookie is set when LivePerson's services initiate monitoring.

Disabling or blocking this cookie may limit or prevent the visitor from receiving assistance or offers on the customer's website via LivePerson's services.

**Structure:**

The browser creates the cookie name, path and domain:

"/hc/{SITEID}" for example: sales.liveperson.net

Persistent

(Expires after 1 day)

HumanClickSiteContainer ID_<SITEID> Used to allow LivePerson to distribute usage of its services across a

cluster of servers (for load balancing purposes). This cookie is set when LivePerson's services initiate monitoring on the applicable customer's website.

It is used for sites on the Federation server; and details which element (container/session) in the Federation server is assigned to the visitor.

Disabling or blocking this cookie may limit or prevent the visitor from receiving assistance or offers from the customer's website via LivePerson's services.

**Structure:**

The browser creates the cookie name, path and domain:

"/hc/{SITEID}" for example: sales.liveperson.net

**Note:** This can only be viewed in the federation server.

Session

**5 Data Sheet LivePerson Cookies**

**Cookie Name Description Cookie Type **

lpCloseInvite Added in order to prevent the rare situation of repeat invitations

occurring. The cookie is dropped to avoid an invitation being displayed twice.

Session

OpenX This cookie is used in conjunction with LivePerson's LP Marketer

service. This cookie manages and optimizes the delivery of offers and other content via the websites of customers who have implemented LP Marketer. It is set when a visitor visits the website of a customer who has implemented LP Marketer provided that the anonymous usage data related to such visitor matches a current marketing campaign run by the customer.

**Note:** Disabling or blocking this cookie will prevent the visitor from receiving offers from the customer via LP Marketer but does not impact LivePerson's other services.

Persistent

(Expires after 7 days)

__Chat Related Cookies**__

HumanClickCHATKEY Creates a unique key to identify each chat session.

Used for security purposes to identify each LivePerson chat and voice communication session. This cookie is set when the visitor to the customer's website requests an engagement within a chat or voice session with the customer.

Disabling or blocking this cookie may limit or prevent the visitor from receiving assistance on the customer's website via LivePerson's chat or voice services.

Session

LPit Used by LivePerson to allow the system to optimize its service. It is

set when the visitor to the customer's website requests to engage in a chat session with the customer.

Disabling or blocking this cookie does not prevent chat from working.

Session

__*__ LivePersonID cookie is set twice with different content.

The cookie name is not the sole unique identifier. __**__ LivePerson chat does not require cookies in order to operate. 

**6 Data Sheet LivePerson Cookies**

This document, materials or presentation, whether offered online or presented in hard copy ("LivePerson Informational Tools") is for informational purposes only. LIVEPERSON, INC. PROVIDES THESE LIVEPERSON INFORMATIONAL TOOLS "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

The LivePerson Informational Tools contain LivePerson proprietary and confidential materials. No part of the LivePerson Informational Tools may be modified, altered, reproduced, stored in or introduced into a retrieval system, or transmitted in any form or by any means (electronic, mechanical, photocopying, recording, or otherwise), without the prior written permission of LivePerson, Inc., except as otherwise permitted by law. Prior to publication, reasonable effort was made to validate this information. The LivePerson Information Tools may include technical inaccuracies or typographical errors. Actual savings or results achieved may be different from those outlined in the LivePerson Informational Tools. The recipient shall not alter or remove any part of this statement.

Trademarks or service marks of LivePerson may not be used in any manner without LivePerson's express written consent. All other company and product names mentioned are used only for identification purposes and may be trademarks or registered trademarks of their respective companies. LivePerson shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use or the inability to use the LivePerson Information Tools, including any information contained herein.

© 2013 LivePerson, Inc. All rights reserved.

**7 Data Sheet LivePerson Cookies**