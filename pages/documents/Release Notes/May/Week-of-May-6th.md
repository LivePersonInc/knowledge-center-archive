---
pagename: Week of May 6th
categoryName: Release notes
subCategoryName: 2019
indicator: both
subtitle: Release Notes
level3: May
permalink: release-notes-2019-may-week-of-may-6th.html
isTutorial: false
isNew: false

---
## New functionality

### FaaS accessible to customers

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>SMS</th>

<th>Facebook Messenger</th>

<th>ABC</th>

<th>Line</th>

<th>Google RCS</th>

<th>Google My Business</th>

<th>WhatsApp Business</th>

<th>CM</th>

<th>Chat</th>

</tr>

</thead>

<tbody>

<tr>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>N/A</td>

<td>Yes</td>

</tr>

</tbody>

</table>

Function as a Service (FaaS) is a LivePerson feature which enables brands to develop custom behaviors within the LiveEngage platform, to better tailor the system to their specific needs. By offering these capabilities, FaaS enables developers to write a simple function, deploy it to LivePerson's infrastructure and make it available to their LivePerson account in minutes. This allows you to create custom logic inside our conversational platform

FaaS is ready to be accessed via [https://faas.liveperson.com](https://faas.liveperson.com "https://faas.liveperson.com") for all customers.

**How to enable**

Our FaaS UI allows developers to directly develop, deploy and test new functions.

You can either access this UI via [https://faas.liveperson.net](https://faas.liveperson.net "https://faas.liveperson.net") or by using the LivePerson Domain API to retrieve the corresponding domain of service for faasUI

To get access to this page, you'll need to ask your LivePerson account team to enable the correct permissions for your account. Please contact them to do so. Please see the [Developers Community](https://developers.liveperson.com/function-as-a-service-getting-started.html) for more information.

AC Feature FaaS.FaaS needs to be enabled for the account.

**Screenshots**

![](/img/FaaS-external-UI.png)

### FaaS Secret Storage

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>SMS</th>

<th>Facebook Messenger</th>

<th>ABC</th>

<th>Line</th>

<th>Google RCS</th>

<th>Google My Business</th>

<th>WhatsApp Business</th>

<th>CM</th>

<th>Chat</th>

</tr>

</thead>

<tbody>

<tr>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>N/A</td>

<td>Yes</td>

</tr>

</tbody>

</table>

The FaaS Secrets Storage allows you to centrally store, access and distribute secrets across your lambdas. Thereby, lambdas can use available access tokens, certificates and encryption keys to establish a connection to external systems.

**How to enable**
Secrets can be maintained via the **Settings** tab as a key/value storage. Each value can be of type number, string or JSON. For more information, please see the [Developers community. ](https://developers.liveperson.com/function-as-a-service-developing-with-faas-storing-secrets.html)

**Screenshots**

![](/img/FaaS-secret-storage.png)