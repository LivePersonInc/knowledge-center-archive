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

## Enhancements

### Amazon Lex Connector (early adopters only)

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

As part of the Bot Connector Platform we are enhancing our offering to also include a connector for Amazon Lex Bots. Now clients can simply onboard their Lex Bot into LiveEngage and have it instantly take part in consumer conversations.

The Lex connector joins the existing DialogFlow and Watson Connectors.

This offering allows clients to onboard these 3rd Party bots with ease and speed avoiding the need to leverage our APIs to connect the Bot provider with our client’s LiveEngage account.

**How to enable**

The Bot Connector’s are part of the Automation Tab and is currently in an Early adopters program. To join the early adopters program please contact your account manager.

After joining the program the relevant account needs to be enabled by the RnD team. (This will be skipped once GA).

To onboard a Lex Bot, simply follow the steps to Add a new Bot and choose Lex as the Bot Provider. You will then need to provide the authentication credentials for your clients Lex Bot.

Further information and detailed steps can be found in the Bot Connectors space in the Developers community

**Dependencies**

The bot needs to have a user type ‘Bot’ in LiveEngage.

**Limitations**

* Basic messaging functionality is supported.
* Rich messaging is not yet fully supported. Please review [developers community](https://developers.liveperson.com/bot-connectors-getting-started.html) documentation for further details