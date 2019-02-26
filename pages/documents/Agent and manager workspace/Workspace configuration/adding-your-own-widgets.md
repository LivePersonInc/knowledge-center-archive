---
pagename: Adding your own widgets
categoryName: Agent & manager workspace
subCategoryName: Workspace configuration
indicator: both
subtitle: Provide access to external systems by adding customized widgets to the agent
  workspace
level3: ''
permalink: agent-manager-workspace-workspace-configuration-adding-your-own-widgets.html
isTutorial: false
isNew: false
date: 2019-01-23 08:32:26 +0000

---
Agents often need to access external systems while they are working in the agent workspace, and to do so, they need to open additional tabs or browsers. Now, you can integrate external systems right into the agent workspace, allotting them their own widget next to the standard widgets. Widgets can be set to appear alongside chats associated with a particular skill or skills - agents handling chats assigned only to that skill will be able to view the widget.

To ensure your agents are focused on the tools most relevant for them, admins have the option of assigning widgets to one or more skill. The widget will subsequently only appear to agents handling chats associated with that skill. Widgets not assigned to specific skills will still appear to all agents handling any chat.

To add and integrate new widgets, refer to our [adding widgets documentation](https://developers.liveperson.com/guides-agent-workspace-widget.html) in the Developers Community.

## Organize your widgets to boost agent efficiency

Placing widgets in the right order within the agent workspace means you can ensure the most useful widgets are the most easily accessible for agents.

Since every contact center is different, widget reordering allows brands to fully customize the order of the widgets on an account level, for both chat and messaging operations. The account admin can organize widgets through night vision, including hiding core and custom widgets.

### **To reorder widgets:**

1. From the visitors page, click on the Night Vision icon.

   ![](/img/adding-your-own-widgets-6.png)
2. The Edit Widgets configuration screen will appear. All available agent widgets configured to your account will appear here as icons - to see the name of the widget, hover over the icon. You can also stop the widget from appearing in the workspace, by clicking **Hide**.

![](/img/adding-your-own-widgets-1.png)

![](/img/adding-your-own-widgets-2.png)

{:start="3"}

1. To reorder the widgets, click **Organize**.
2. In the Organize widgets configuration screen, you can use the arrows to move the widgets up or down in the order they will appear. There is also an option to move the widget straight to the top.

![](/img/adding-your-own-widgets-3.png)

{:start="5"}

1. Select the desired width of the new widget; single (the same width as the default widgets), double, triple, or quadruple, so your widget is compatible to the external webpage that you want to display.
2. If you would like the widget to appear alongside chats associated with a specific skill or skills, select the relevant option(s) from the Assigned Skills field. If no skill is assigned, the widget will appear to all chats.
3. Enter the URL of the webpage or external application that you wish to display within the widget.

![](/img/adding-your-own-widgets-4.png)

<div class="notice">
<b>Notes:</b>
<ul>
<li>The user interface will only allow a maximum of 5 custom widgets (as today) for performance and stability purposes. The account will still be able to override this limit using the API, though it is not recommended.</li>
<li>For changes to the widget order to appear in the workspace while agents are logged in, they will need to refresh the page.</li>
<li>Any reordering is saved at the account level and is not a site setting.</li>
<li>New widgets will always be placed in a default location determined by LivePerson. They can subsequently be reordered as needed.</li>
</ul>
</div>

## Widget integration framework

The integration of the Engagement Window Widget SDK and Agent Workspace Widget SDK allows rich media to be easily and instantly shared between the consumer and the agent. Using unique session IDs, an external platform facilitates a direct connection between the two SDKs, providing a seamless widget integration framework.

* A more personal service with agent-consumer rich media sharing and video chat
* Faster responses through collaborative conversations between agent and consumer
* Flexible integrations with a variety of engagement tools

![](/img/adding-your-own-widgets-5.jpg)

Agents can share a variety of interactive content in the Agent window, such as images, links and forms. This content will immediately be displayed in the consumer’s engagement window, enhancing their conversation experience and their connection with the Agent.

In the same way, consumers can upload content - such as a product’s web page, a screenshot of an error message - that will instantly be displayed to the Agent, enabling them to provide a more effective and efficient service. Moreover, the flexibility of this framework opens the door for integrations with other engagement tools, such as live video connection.

## Why don’t I see my customized widget?

**For a successful integration, please note the following:**

* **The application must be able to open within an iFrame:** Some applications prevent themselves from opening within an iFrame (these are known as ‘Frame Busters’). If you try to integrate such an application within an Agent Workspace widget, you will get a blank widget, or an error message in the widget (depending on your browser).
* **Internet Explorer support**: Custom widgets are supported on Internet Explorer 10 and higher only.
* **The application must be hosted over SSL**: **S**ecure **S**ockets **L**ayer is a protocol that provides network security and privacy. SSL uses trusted certificates to perform client and server authentication. This means your application must be hosted on a valid SSL certificate site and, as part of the application, the URL must begin with **https**.
* **Automatic focus management may be problematic**: Applications with focus stealing can cause issues in the user interface of the Agent Workspace.

{: .notice}
**Note**: To integrate with your **Salesforce** application, open a ticket to Salesforce support and request the removal of the X-Frame option from your organization’s Salesforce pages. This will allow you to open Salesforce in the widget. Agents must log into Salesforce in a separate browser tab (or through SSO) prior to accepting chats. Make sure that the application that you are trying to integrate meets the above requirements and try again.

## Widget notifications

It’s important to keep agents informed of activity taking place within widgets while they are handling other tasks. For both chat and messaging operations, the Agent Widget SDK has been enhanced to allow notifications to appear in the agent workspace whenever an event occurs in a widget, to ensure agents are alerted as soon as any activity takes place.

For further information, refer to the [SDK documentation](https://developers.liveperson.com/agent-workspace-sdk-overview.html) in the Developers Community**.**