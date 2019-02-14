---
pagename: SSO unified login
categoryName: Security & regulations
subCategoryName: ''
indicator: both
subtitle: " Authenticate once to seamlessly access the LivePerson platform"
level3: ''
permalink: Security-regulations-SSO-unified-login.html
isTutorial: false
isNew: false
date: 2019-01-24 12:23:19 +0000

---
The single sign-on (SSO) unified login feature enables LivePerson agents and site administrators to authenticate once, in their own environment, and then to seamlessly access the LivePerson platform while already authenticated.

This feature allows for frictionless management of LivePerson agents, as well as providing the support required for financial services that are subject to OCC regulation – a regulation which requires multifactor authentication for agents. These customers can leverage the SSO unified login feature to comply with the regulation by implementing an internal multifactor authentication with its selected provider, and leverage that authentication when accessing LiveEngage.

This capability includes an architecture based on the SAML protocol, a standard protocol for implementing and supporting Single Sign-On. This architecture ensures both scalability as well as the highest level of security.

![](/img/sso1.png)

Figure 1: Architecture based on SAML Assertion

Prerequisites for LiveEngage:

* SAML-enabled IdP server
* Valid X.509 certificate

## **Configuration**

Customers wishing to authenticate agents to LiveEngage based on the SSO Unified Login feature need to complete the following:

### **Configuration on LivePerson’s Environment**

The following settings will be handled by LivePerson’s Production department on behalf of the customer:

The customer needs to provide LivePerson with their X.509 certificate that includes the signature algorithm called: SHA256. The certificate is then stored in the customer’s site configuration and is used for validating the SAML assertions. LivePerson will provide the customer with the certificate and assertion consumer URL.

The customer needs to provide LivePerson with the following three parameters:

* **Login page**:  A login page to IdP when trying to access LiveEngage without prior authentication to customer IdP.
* **Logout page**:  A URL that the user will be redirected to when logging out of LiveEngage.
* **Redirect Page Upon Login Error**: A URL that the user will be redirected to when the login to LiveEngage fails.

### **Configuration on the customer’s environment**

* Create a SAML assertion with dynamic variables: siteId and loginName. The SAML assertion must be sent to LiveEngage every time a user (admin or agent) wishes to log in.

  {: .notice}  
  If it is not possible to send the siteId, LivePerson can adapt the configuration.

  If it is not possible to send the loginName, LivePerson can accept the nameId field instead.
* Provision the users in the customer’s User Management System to map to those of LiveEngage. For new users created in the Customer's User Management system, the customer will need to manually create them in LiveEngage (or automate the process via the [Users API](https://developers.liveperson.com/administration-users-overview.html)) and create the linkage in the Customer's User Management system.
* Use this consumer URL for connecting to LiveEngage: https://<LP Domain>/hc/s-xxxxxx/web/m-LP/samlAssertionMembersArea/home.jsp?lpservice=liveEngage&servicepath=a%2F\~\~accountid\~\~%2F%23%2C\~\~ssokey\~\~, where xxxxxx is the LivePerson account number and LP Domain is the account’s core domain.
* Use this consumer URL for connecting to the MCS toolkit: https://<LPDomain>/hc/s-xxxxxx/web/m-LP/samlAssertionMembersArea/home.jsp?lpservice=mcs&servicepath=a%2F\~\~accountid\~\~%2F%23%2C\~\~ssokey\~\~, where xxxxxx is the LivePerson account number and LP Domain is the account’s domain.
* Use this consumer URL for connecting to the Real Time Dashboard: https://<LPDomain>/hc/s-xxxxxx/web/m-LP/samlAssertionMembersArea/home.jsp?lpservice=rtDashboard&servicepath=a%2F\~\~accountid\~\~%2F%23%2C\~\~ssokey\~\~, where xxxxxx is the LivePerson account number and LP Domain is the account’s domain.
* Use this consumer URL for connecting to the Bot Studio: https://<LPDomain>/hc/s-xxxxxx/web/m-LP/samlAssertionMembersArea/home.jsp?lpservice=routingBot&servicepath=a%2F\~\~accountid\~\~%2F%23%2C\~\~ssokey\~\~, where xxxxxx is the LivePerson account number and LP Domain is the account’s domain.
* Use this consumer URL for connecting to the CoBrowse Admin console: https://<LPDomain>/hc/s-xxxxxx/web/m-LP/samlAssertionMembersArea/home.jsp?lpservice=coBrowse&servicepath=a%2F\~\~accountid\~\~%2F%23%2C\~\~ssokey\~\~, where xxxxxx is the LivePerson account number and LP Domain is the account’s domain.

  ## **General notes on using the feature**
* HTTPS must be used for communication with the LivePerson servers.
* Once the SSO Unified Login feature is turned on, users cannot log in using their previous credentials, even if they regenerate the password by clicking the Forgot My Password link.
* Password reset is still possible and will send a new password to the defined email in login policy tab, but the password will no longer be of use.
* It is advised that once Unified Login is turned on, any issues with agent login should first be checked by the various technical teams on the customer’s side in order to rule out 2-factor login, IdP and agent definition issues.
* It is the responsibility of the brand to update LivePerson with the renewed X.509 certificate a month before the current certificate expires.