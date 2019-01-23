---
pagename: Adding your own widgets
categoryName: Agent & manager workspace
subCategoryName: Workspace configuration
indicator: both
subtitle: Provide access to external systems by adding customized widgets to the agent
  workspace
level3: ''
permalink: adding-your-own-widgets.html
isTutorial: false
isNew: false
date: 2019-01-23 10:32:26 +0200
published: false

---
Agents often need to access external systems while they are working in the agent workspace, and to do so, they need to open additional tabs or browsers. Now, you can integrate external systems right into the agent workspace, allotting them their own widget next to the standard widgets. Widgets can be set to appear alongside chats associated with a particular skill or skills - agents handling chats assigned only to that skill will be able to view the widget.

To ensure your agents are focused on the tools most relevant for them, admins have the option of assigning widgets to one or more skill. The widget will subsequently only appear to agents handling chats associated with that skill. Widgets not assigned to specific skills will still appear to all agents handling any chat.

To add and integrate new widgets, refer to our [adding widgets documentation](https://developers.liveperson.com/guides-agent-workspace-widget.html) on the Developer Community. 

## Organize your widgets to boost agent efficiency

Placing widgets in the right order within the agent workspace means you can ensure the most useful widgets are the most easily accessible for agents.

Since every contact center is different, widget reordering allows brands to fully customize the order of the widgets on an account level, for both chat and messaging operations.

The account Admin can organize widgets through Night Vision, including hiding core and custom widgets.

**To reorder widgets:**

1. From the visitors page, click on the Night Vision ![](https://lh3.googleusercontent.com/tWNpW9-kiDffEwtrtEFi3VZVAvwrVmfx43HHmTa34uzqGj3j3yVoM464ZOZJ7xQoJ0wS7L8qO6bdUKztYmqZVHPfEGnDRN2F7QwyRIdqxe4SvK8ilAtcfTu9OQglxxYmtTRXX10k =40x34) icon.
2. The Edit Widgets configuration screen will appear. All available agent widgets configured to your account will appear here as icons - to see the name of the widget, hover over the icon. You can also stop the widget from appearing in the Workspace, by clicking **Hide**. 

![](https://lh6.googleusercontent.com/IHtPy83gMRxBLcD2sNKzZNtY1aQ_7K8oaS7mN4F-ETc-HXo1BEDZn9mAanB5Hr-x5WkOitdWNa1lEb-QFJcyk1MkPQ6gZ4M1Jv1tntbkt9ESw-6M8m0mP07FV9ZWhRAXYHeZLJFq =431x241)

![](https://lh6.googleusercontent.com/oO8q9rf_PWtckXacWelAdvGCaTID0aVm_eoyzlBNQkjhNpGdI-nZ4fqyGPYF1xsBpMjSsinIxTQ9uOuR6t04WUdRI5i9rv1Ri_Fy5VgKG6mpIzsYFJREwnaO0FYHsCixdCJUrvpX =433x78)

3. To reorder the widgets, click **Organize**.
4. In the Organize widgets configuration screen, you can use the arrows to move the widgets up or down in the order they will appear. There is also an option to move the widget straight to the top. 

![](https://lh4.googleusercontent.com/_akLWJ13e2CMjXBslUBNHuZDiW7oF1zIHkLuGUQd2sxRMcjN-wIDF3-PNwM9HfXxGWnfkrCvDoc8uW9Lv8xwELKf_XqXGApjjaL3rQCdjQPt6-qipm_0e5DlgNbsrqkq_OWTe0Zn =283x349)

5. Select the desired width of the new widget; single (the same width as the default widgets), double, triple, or quadruple, so your widget is compatible to the external webpage that you want to display. 
6. 6. If you would like the widget to appear alongside chats associated with a specific skill or skills, select the relevant option(s) from the Assigned Skills field. If no skill is assigned, the widget will appear to all chats.
7. Enter the URL of the webpage or external application that you wish to display within the widget. 

**![Widget per skill - upd.png](https://lh3.googleusercontent.com/Q5SDm69GE9tVYX3-OgHa5kl0GKSs44qSfdip4ZOfK1ihd0sRSbZeSK9NZySR-F3SzmRI_GmhIsME7z3vCMMhGDLKG5UP4w7GH01gsrRNapoLSBPDRpJReZnWhw8nlh6ydFKCZXyj =434x546)**

**Notes:**

* The user interface will only allow a maximum of 5 custom widgets (as today) for performance and stability purposes. The account will still be able to override this limit using the API, though it is not recommended.
* For changes to the widget order to appear in the workspace while agents are logged in, they will need to refresh the page. 
* Any reordering is saved at the account level and is not a site setting. 
* New widgets will always be placed in a default location determined by LivePerson. They can subsequently be reordered as needed. 

## Widget integration framework

The integration of the Engagement Window Widget SDK and Agent Workspace Widget SDK allows rich media to be easily and instantly shared between the consumer and the agent. Using unique session IDs, an external platform facilitates a direct connection between the two SDKs, providing a seamless widget integration framework.

* A more personal service with agent-consumer rich media sharing and video chat
* Faster responses through collaborative conversations between agent and consumer
* Flexible integrations with a variety of engagement tools

![Widget Integration Framework SDK v3.jpg](https://lh5.googleusercontent.com/1e6w3Tpqml4BDwixR6wAer9PzB4Ec9rPj3otc5XE5sxHazTLempJz-HrIIaLXWmz4CkwtDe8bIjVS-uXDEq0vELBv9Ts_jK0usZwdldCI1DUCGrLAUvB44OHJ5tgwic9r18ty8Fb =388x210)

Agents can share a variety of interactive content in the Agent window, such as images, links and forms. This content will immediately be displayed in the consumer’s engagement window, enhancing their conversation experience and their connection with the Agent.

 ![Engagement window widget SDK v3.jpg](https://lh3.googleusercontent.com/W20ksCa8NwIZVB4Sj9cgNxn8bkOBLDGIEgHkAGAeHUIHS_Kpft3vGy_jVkNVMX5tiAy0K51e0zv_-RzDERUWYDRU-OEaHL2COOfaIG6AE8g_9PrN14XmnkEjPHh3a_ucsNWKifVn =388x226)

In the same way, consumers can upload content - such as a product’s web page, a screenshot of an error message - that will instantly be displayed to the Agent, enabling them to provide a more effective and efficient service. 

Moreover, the flexibility of this framework opens the door for integrations with other engagement tools, such as live video connection.

##  

## Why Don’t I See My Customized Widget?

For a successful integration, please note the following:

* The application must be able to open within an iFrame: Some applications prevent themselves from opening within an iFrame (these are known as ‘Frame Busters’). If you try to integrate such an application within an Agent Workspace widget, you will get a blank widget, or an error message in the widget (depending on your browser).
* **Internet Explorer support**: Custom widgets are supported on Internet Explorer 10 and higher only.
* **The application must be hosted over SSL**: **S**ecure **S**ockets **L**ayer is a protocol that provides network security and privacy. SSL uses trusted certificates to perform client and server authentication. This means your application must be hosted on a valid SSL certificate site and, as part of the application, the URL must begin with **https**.
* **Automatic focus management may be problematic**: Applications with focus stealing can cause issues in the user interface of the Agent Workspace.

**Note**: To integrate with your **Salesforce** application, open a ticket to Salesforce support and request the removal of the X-Frame option from your organization’s Salesforce pages. This will allow you to open Salesforce in the widget. Agents must log into Salesforce in a separate browser tab (or through SSO) prior to accepting chats.

Make sure that the application that you are trying to integrate meets the above requirements and try again.

## Widget notifications

It’s important to keep agents informed of activity taking place within widgets while they are handling other tasks. For both chat and messaging operations, the Agent Widget SDK has been enhanced to allow notifications to appear in the agent workspace whenever an event occurs in a widget, to ensure agents are alerted as soon as any activity takes place. 

  
For further information, refer to the [SDK documentation](https://developers.liveperson.com/agent-workspace-sdk-overview.html)**.** 