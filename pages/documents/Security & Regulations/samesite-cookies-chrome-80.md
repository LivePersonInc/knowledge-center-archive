---
categoryName: Security & regulations
indicator: both
pagename: SameSite Cookies Chrome 80
subtitle: Chromes Cookie policy which is due to be enforced in Chrome 80
permalink: security-regulations-samesite-cookies-chrome-80.html
date: '2019-03-12T11:24:55.000+00:00'
subCategoryName: ''
level3: ''
isTutorial: false
isNew: false

---
## Context
Cookies are one of the methods available for adding persistent state to websites. Over the years their capabilities have grown and evolved. Browsers (Specifically Chrome) are changing their behavior to enforce more privacy-preserving defaults and this will be enforced as part of Chrome 80. 

{: .notice}
The Chrome SameSite changes will not affect the functionality of either the monitoring tag, or the secure storage mechanism of the unified window.

## Chrome Settings
There are two incoming features that will be enabled by default in Chrome 80.

1. [Cookies default to SameSite=Lax](https://www.chromestatus.com/feature/5088147346030592)
2. [Reject insecure SameSite=None cookies](https://www.chromestatus.com/feature/5633521622188032)

## Definitions of Cookie settings
To provide safeguards around when cookies are sent across sites so that users are protected, Google plans to add support for an IETF standard called SameSite, which requires web developers to manage cookies with the SameSite attribute component in the Set-Cookie header.
There are three different values that can be passed into the SameSite attribute: Secure, Lax, or None.

### Secure
Cookies with this setting can be accessed only when visiting the domain on which it was initially set. In other words, Strict completely blocks the cookie from being used across sites. This option would be best for applications that require high security, such as banks.

### Lax
Cookies with this setting are sent only on same-site requests or top-level navigation with non-idempotent HTTP requests, like HTTP GET. Therefore, this option would be used if the cookie can be used by third-parties, but with an added security benefit that protects users from being victimized by CSRF attacks.

## Feature Flag Effects
1. **Cookies default to SameSite=Lax**
   When set, all cookies that don’t specify the SameSite attribute will automatically be forced to use SameSite = Lax.

2. **Reject insecure SameSite=None cookies**
When set, cookies without the SameSite attribute or with SameSite = None need to be Secure. Secure in this context means that all browser requests must follow the HTTPS protocol. Cookies that do not adhere to this requirement are rejected. All websites should use HTTPS to meet this requirement.

## Monitoring (SMT)
1. The first feature ensures that Cookies that do not explicitly set the SameSite attribute are given a “Lax” setting by default.

![](img/SameSite_Cookies80_1.png)

As described above, this means that this cookie can only be used for same site requests, or for GET cross site requests.
These cookies are only ever used by SMT and only ever by the LP domain. There are no restrictions on same site usage, hence no issues with functionality.

2. The second feature ensures that Cookies without SameSite attribute sent are only communicated in HTTPS.
![](img/SameSite_Cookies80_2.png)

LivePerson enforces HTTPS on the monitoring APIs, which means that there is no impact with this setting either, as the Cookie is never set over HTTP.

## Unified Window
Unified Window is entirely unaffected by this change due to the implementation of the SecureStorage API in the Unified Window.

In short, the Unified Window implements an iframe to a static LivePerson domain in order to achieve history and state storage. 

This means that in 3 out of 4 cases, cookies are not even used for storage. In the last case the cookies are first party, and set in the scope of the iframe to the LivePerson domain.

![](img/SameSite_Cookies80_1.png)

## Conclusion
The Chrome SameSite changes will not affect the functionality of either the monitoring tag, or the secure storage mechanism of the unified window.

This is because in both cases, LivePerson is only dealing with 1st party cookies. The Chrome functionality’s purpose is to lock down the current usage of insecure 3rd party cookies.

The only remaining consideration is our alignment to the standard that Google is imposing. LivePerson & their Brands are at no increased risk compared to today if LivePerson chooses not to align to this standard. To remove the browser Warnings, the SameSite attribute is expected to be added to relevant services shortly after the Chrome features are rolled out, once the farm freeze has been lifted.


