---
pagename: CoBrowse for live chat
categoryName: Agent & manager workspace
subCategoryName: Agent tools for live chat
indicator: chat
subtitle: Give consumers an enhanced customer service experience using CoBrowse video
  chat capabilities
level3: ''
permalink: agent-manager-workspace-agent-tools-for-live-chat-cobrowse-for-live-chat.html
isTutorial: true
isNew: false
date: 2019-01-30 14:43:16 +0000

---
**CoBrowse enables agents to assist visitors with complicated online tasks and processes.** CoBrowse does this by enabling agents and consumers to access and navigate web pages collaboratively, making complex tasks quick and easy to complete. Simple to use and fully personalized, CoBrowse provides secure two-way interactivity, taking the service you provide your consumers to the next level.

<iframe style="max-width: 750px;" src="https://player.vimeo.com/video/238900340" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

With CoBrowse, agents and visitors can view each other’s virtual mouse cursors. To focus the visitor, the agent can animate elements on the visitor screen by:

* Double clicking on the element will display a yellow circle around the cursor.
* Ctrl + Left mouse - will animate the element with a wiggle effect.

## Why use CoBrowse?

* **Personalized:** Valuable customers receive personal attention as they are guided through an online task or process.
* **Browser-contained:** CoBrowse does not require any installations, plugins, or configuration by agents or by visitors.
* **Easy to use:** CoBrowse can be used on all major browsers with zero setup time or preparation required.
* **Secure:** A multi-stage and customizable security architecture systematically protects sensitive information and meets individual security requirements.
* **Two-way interactivity:** User actions are captured and replicated without the need to manually hand over input control.

### Use cases

* Purchasing complex products such as customized travel packages
* Completing application forms for banking services or insurance
* Following guided online support for troubleshooting items
* Learning how to set up an account or use online self-service options
* Following a guided shopping experience which provides store-like assistance online

## Security & privacy

CoBrowse was designed with strict security controls to protect the privacy of both visitors and agents. The following controls can be implemented as part of the solution:

* CoBrowse solely builds on standard applications protocols such as HTTP, HTTPS and JavaScript.
* The agent cannot access the visitor’s local system, or web applications opened in other browser tabs or windows.
* The visitor cannot access the agent’s local system or web applications opened in other browser tabs or windows.
* Agents have the option to choose between “shared” mode and “view only” mode. “Shared” mode enables the full collaborative experience, whereas “view only” mode offers a higher level of customer privacy.
* Form fields and widgets can be masked, in which case the data is not transmitted to the server or the agent browser.

## How CoBrowse works

CoBrowse technology has an enhanced level of security in comparison to traditional screen sharing and desktop sharing. This is because in desktop sharing, at least one of the participants downloads a software or plug-in for sharing a video screen of the entire screen or desktop applications. In contrast, CoBrowse is restricted to sharing only the website that the consumer is currently chatting on.

**The basic CoBrowse process is described in the image below:**

![](/img/cobrowse-for-live-chat-1.png)

The agent sends an invite to the consumer in the Embedded Engagement Window. If the consumer accepts, the CoBrowse session starts on the same webpage as the consumer was on when they initiated the conversation.

The CoBrowse service not only shares the webpage view with the agent, but it also monitors the consumer’s actions, for example: mouse movements, mouse clicks, form field input, etc. The consumer’s actions are displayed in the agent’s browser. If the agent selects “Interactive Mode”, the agent’s actions such as mouse clicks are replicated in the consumer’s browser. If the agent selects “View-only mode”, the agent can highlight elements on the page, but not fill in forms or navigate to actively assist the consumer.

### The CoBrowse process for agents & consumers

| Consumer | Agent |
| --- | --- |
| The consumer starts a conversation with the agent. | The agent invites the consumer to share a live view of the web page (CoBrowse). |
| The consumer receives an invite and accepts. The CoBrowse session is started on the visitor side. | A new CoBrowse widget opens in the Agent Workspace. |
| The webpage is transmitted to the agent’s browser. | The webpage from the visitor’s browser is displayed in the Agent Workspace. |
| All actions, e.g. mouse movements, mouse clicks, and form input, are monitored and transmitted to the connected browser. | The actions are displayed in the agent’s browser. |
| In interactive mode, all agent actions are displayed in the consumer’s browser. | If the agent performs actions in Interactive Mode, these are transmitted to the consumer’s browser. |
| In view-only mode, agent mouse movements and highlights are displayed in the consumer’s browser. | In view-only mode, only mouse movements and highlighting actions are transmitted to the consumer’s browser. |

## Configuration

**To configure CoBrowse through Night Vision:**

1. In LiveEngage, navigate to the Visitors tab and click the Night Vision (configuration) icon.

![](/img/cobrowse-for-live-chat-2.png)

{:start="2"}
2\. Click Agent Workspace Configuration.

![](/img/cobrowse-for-live-chat-3.png)

{:start="3"}
3\. Click Edit next to the CoBrowse configuration.

* Enable CoBrowse for all agents: agents can control whether they initiate CoBrowse sessions with the visitors during chat.
* Define the level of control your agents can have over CoBrowse: configure the CoBrowse mode enabled for agents: View only, Shared, or both. This determines which CoBrowse options are available for agents to offer visitors.

![](/img/cobrowse-for-live-chat-4.png)

The following CoBrowse elements can also be configured:

* **Border color:** customize the color of the CoBrowse window border shown on the visitor side.
* **Highlight color:** customize the color of the highlight effect that appears after a mouse click.
* **Match visitor's viewport:** when active, the agent's viewport will be resized to the size of the visitor's browser window. This is useful for responsive websites.
* **Field Masking:** in order to protect sensitive data that may be visible to the agent during a CoBrowse session, it is possible to mask certain input fields. To do so, add CSS Selectors to specific form fields on your website that may contain such data and should not be synchronized to the agent’s view.
  * **Example for IDs:** #cc_number => do not synchronize content of the element with id='cc_number'.
  * **Example for class names:** .secret => do not synchronize content of elements with class='secret'.
  * **Example for more complex selectors:** input\[name=\\'secure\\'\] => do not synchronize content of input elements with name='secure'.

{: .important}
**Note:** Special characters in selectors must be escaped with a '\\' e.g. #id\\@123

![](/img/cobrowse-for-messaging-4.png)

{:start="4"}
4\. Set the required CoBrowse configuration and click Save. When agents click the CoBrowse button within the chat, they will now see the relevant CoBrowse options based on the configurations you have made.

![](/img/cobrowse-chat-6.png)

## Initiating CoBrowse

1. From the chat window, click the CoBrowse icon.

![](/img/cobrowse-for-live-chat-7.png)

{:start="2"}
2\. Choose the session type:

* CoBrowse - View Only enables you to view the visitor’s screen only.
* CoBrowse - Shared gives you full control over the current browser tab.

{:start="3"}
3\. The visitor receives a notification asking them to accept the CoBrowse session.

![](/img/cobrowse-for-live-chat-8.png)

{:start="4"}
4\. Once the visitor accepts, the CoBrowse session opens on the **agent side** and both cursors are displayed and labeled as shown in the image below.

![](/img/cobrowse-for-live-chat-9.png)

{:start="5"}
5\. By mousing over the top bar, agents are able to switch to full screen mode and view wider websites easily.

![](/img/cobrowse-for-live-chat-11.png)

{:start="6"}
6\. On the visitor or **consumer side**, when the CoBrowse session begins, an orange frame is displayed around the browser tab, indicating an active session. While CoBrowsing, credit card and password fields are automatically masked.

![](/img/cobrowse-for-live-chat-10.png)

{:start="7"}
7\. The visitor can close the session at any time by clicking the X at the top of the orange frame.

To enable the CoBrowse feature in your LiveEngage account, please contact LivePerson support.

<div class="notice">
<b>Note:</b>
<ul>
<li>CoBrowse is only available to customers with the embedded engagement window.</li> <li>An agent can run one session of CoBrowse at a time and can send only one invitation at a time.</li> <li>Once an agent sends a CoBrowse invitation, the agent cannot cancel it. The invitation will only be cancelled if it times out or is rejected by the visitor.</li> <li>CoBrowse differs from desktop sharing in that the agent’s virtual mouse pointer is shown over the same element, but may not be shown at the same exact position due to different screen resolutions.</li>
</ul>
</div>

## Impact on existing functionality

* **Agent:** Agents can conduct only one CoBrowse session at a time
* **Agent manager:** CoBrowse transcripts only display the wording from the invitation. No other messages or events are included.
* **Consumer:** Consumers receive an invitation to CoBrowse in the Embedded Engagement Window

## FAQs

#### 1. How is CoBrowse different to desktop sharing?

CoBrowse differs from desktop sharing in that it is more secure, requires no installation, and is non-intrusive. The agent does not take control of the visitor’s desktop, nor do they have access to the visitor’s local files and applications. This minimizes the risk of agents unknowingly sharing sensitive information. In contrast to desktop sharing, CoBrowse offers a next-generation co-browsing experience with zero setup time.

#### 2. What is the difference between “shared” mode and “view only” mode?

Agents have the option to choose between "shared” mode and "view only" mode. "Shared" mode provides a full, two-way interactive experience, whereas "view only" mode offers a higher level of privacy for consumers. The table below illustrates the CoBrowse features, along with which CoBrowse features are available in each mode.

#### 3. Is CoBrowse compatible with corporate firewalls etc.?

Yes, CoBrowse is generally compatible with corporate firewalls. It only uses standard web protocols that are deployed and used in typical web applications.

#### 4. Which options are available to secure form input (e.g. password)?

Password form fields are automatically blocked from transmitting data into the CoBrowse session of other participants. Other fields have to be identified by using a proprietary HTML attribute or by manually managing a blacklist on a server (e.g., using CSS selectors).

#### 5. Is it possible to have a CoBrowse session on untagged web pages and external domains?

CoBrowse works on tagged pages only. This is to ensure a secure co-browsing session, and also to enable the transfer of the session state (e.g. shopping cart), along with the last visited page and form data.

## CoBrowse features and permissions

| Feature | Description | Available in “shared” mode? | Available in “view only” mode? |
| --- | --- | --- | --- |
| Co-Scrolling | The visitor and the agent see the same parts of a web page. | Yes | Yes |
| Co-Highlighting on Page | The visitor and the agent see each other’s virtual mouse pointer and can highlight elements of a web page. | Yes | Yes |
| Co-Highlighting on Text Elements | The visitor and the agent can highlight text elements. | Yes | Yes |
| Co-Navigation | The visitor and the agent browse on the same web pages together. | Yes | No |
| Co-Form filling | The visitor and the agent fill out forms together. | Yes | No |

## Prerequisites & technical requirements

### For LiveEngage

The following table lists the prerequisites and technical requirements necessary for deploying CoBrowse on LiveEngage 2.0.

* The Embedded Engagement Window must be deployed in the popped in state
* LE Tag must be deployed. For more information, see [LE Tag](getting-started-add-the-liveperson-tag-to-your-website.html)
* The LE Tag must be placed on every webpage that is visited during the CoBrowse session
* The agent must use an operating system and browser that is listed in the [LivePerson System Requirements](admin-settings-system-requirements.html)

### For brand website

* All website pages must be tagged. This includes the page from where the session is started, and all pages which are visited during navigation
* The tag must be deployed in the topmost frame of the page
* Your website must adhere to HTML, CSS and JavaScript standards
* HTML framesets must not be used
* iFrames must originate from the same domain. This relates to Same Origin Policy (SOP)
* iFrames from different domains cannot be synchronized from the consumer to the agent
* Not all third-party iFrames, for example Facebook and Google tracking are relevant to the agent, and are therefore not displayed
* In the situation that the iFrames originate from different subdomains, you can adopt SOP relaxation techniques. This requires you to modify both pages and set the document.domain to the same domain
* Embedded HTML objects and their content, for example an external image in a Canvas element, must originate from the same domain
* Embedded HTML objects, for example Scalable Vector Graphics (SVG), which have been encoded by the web application, may not be visible to the agent
* All resources, for example CSS, images and fonts, can be reloaded multiple times without restrictions:
  * Example 1: Loading resources is not bound to cookie or other session identifiers
  * Example 2: Loading resources is not bound to “Http Basic Authentication”
* Agents and consumers must use a web browser that is listed in the [LivePerson System Requirements](admin-settings-system-requirements.html)
* CoBrowse is only supported on regular (not private / incognito) windows
* For the consumer, the session is active only in the browser tab where it was started. If the consumer switches to another browser tab with the same (or another) website opened, they will no longer be active in the CoBrowse session
* The agent and the consumer must be in a chat conversation before the agent can send a CoBrowse invite
* An agent can conduct no more than one CoBrowse session at a time
* If the CoBrowse session is not ended by either the consumer or the agent pressing the ‘session end’ button, the agent will not be able send a new CoBrowse invite
* The consumer must not navigate at the same time as accepting an invite
* The consumer must not close the browser tab or navigate to an untagged page during a CoBrowse session
* The agent must not close the browser tab (or navigate to an untagged page in interactive mode)
* Third party cookies must be enabled

<div class="notice">
<b>Note:</b>
<ul>
<li>Your website should not contain any browser-specific code or overwriting of core JavaScript functions, for example window.addEventListener</li> <li>Encoded web content poses a security risk and is therefore filtered.</li> <li>There are no embedded non-HTML objects, for example Flash, Active-X or PDF</li> <li>Non-HTML content is not monitored and is not visible to the agent.</li> <li>If the chat session is timed out, this will invalidate the CoBrowse session.</li>
</ul>
</div>

### For network

* Your website must be accessible via port 80 (http) or 443 (https)
* The agent and consumer’s network must allow long-running Http connections, also called ‘long polling’ (This applies to all modern networks, there are rare cases of misconfigured proxy servers or application layer firewalls in company networks)
* A company proxy server or application layer firewall must not modify essential, for example, security, http headers of the CoBrowse application.
* If there is an extremely high network latency or unstable network connection, the CoBrowse session may be dropped.
* The agent and the consumer have an available bandwidth of 10,000 kbit/s in downstream.
* If your website is using HTTPS, the certificate must be signed by an official certificate authority (self-signed certificates will not be accepted).
* The minimum upstream bandwidth requirement is 750 kbit/s. The actual requirement depends on a number of factors, such as the size of the rendered website.

{: .notice}
**Note:** Non-public web sites (intranet, localhost) are not supported.

## Performance best practices

* The recommended upstream bandwidth requirements is 1500 kbit/s
* Large rendered websites > 2 MB (DOM tree) can lead to a significant delay until the website is fully visible to the agent (waiting time 15 sec. or more to view the page)
* Your website should make sparse use of background animations (animations without user interaction)
* The real-time experience is affected by several applications competing for upstream bandwidth on the consumer’s system
