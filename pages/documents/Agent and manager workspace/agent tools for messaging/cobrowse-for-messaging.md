---
pagename: CoBrowse for web messaging
categoryName: Agent & manager workspace
subCategoryName: Agent tools for messaging
indicator: messaging
subtitle: Offer an enhanced, visual consumer experience for messaging
level3: ''
permalink: agent-manager-workspace-agent-tools-for-messaging-cobrowse-for-messaging.html
isTutorial: false
isNew: false
date: 2019-01-30 14:28:09 +0000

---
With CoBrowse, agents and visitors can view each other’s virtual mouse cursors, and simply double-clicking on an element or piece of text in the web page creates an animation effect. This allows brands to address customers’ queries quickly and efficiently by helping them navigate web pages collaboratively.

With CoBrowse, agents and visitors can view each other’s virtual mouse cursors. To focus the visitor, the agent can animate elements on the visitor screen by:

* Double clicking on the element will display a yellow circle around the cursor.
* Ctrl + left mouse - will animate the element with a wiggle effect.

## Why use CoBrowse?

* **Personalized:** Valuable customers receive personal attention as they are guided through an online task or process.
* **Browser-contained:** CoBrowse does not require any installations, plugins, or configuration by agents or by visitors.
* **Easy to use:** CoBrowse can be used on all major browsers with zero setup time or preparation required.
* **Secure:** A multi-stage and customizable security architecture systematically protects sensitive information and meets individual security requirements.
* **Two-way interactivity:** User actions are captured and replicated without the need to manually hand over input control.

## Use cases

CoBrowse enables agents to assist visitors with complicated online tasks and processes, for example:

* Purchasing complex products such as customized travel packages
* Completing application forms for banking services or insurance
* Following guided online support for troubleshooting items
* Learning how to set up an account or use online self-service options
* Following a guided shopping experience which provides store-like assistance online

{: .notice}
Note that only the **web** variant of messaging can use CoBrowse - other types of messaging are not web based and therefore do not contain any content which can be shared in this way.

## Security and Privacy

CoBrowse was designed with strict security controls to protect the privacy of both visitors and agents. The following controls can be implemented as part of the solution:

* CoBrowse solely builds on standard applications protocols such as HTTP, HTTPS and JavaScript.
* The agent cannot access the visitor’s local system, or web applications opened in other browser tabs or windows.
* The visitor cannot access the agent’s local system or web applications opened in other browser tabs or windows.
* Agents have the option to choose between “shared” mode and “view only” mode. “Shared” mode enables the full collaborative experience, whereas “view only” mode offers a higher level of customer privacy.
* Form fields and widgets can be masked, in which case the data is not transmitted to the server or the agent browser.

## Configuration

**To configure CoBrowse through Night Vision:**

1. In LiveEngage, navigate to the Visitors tab and click the Night Vision (configuration) icon.

![](/img/cobrowse-for-messaging-1.png)

![](/img/cobrowse-for-messaging-2.png)

{:start="2"}

1. Click Agent Workspace Configuration.

![](/img/cobrowse-for-messaging-3.png)

{:start="3"}

1. Click Edit next to the CoBrowse configuration.

* **Enable CoBrowse for all agents:** agents can control whether they initiate CoBrowse sessions with the visitors.
* **Define the level of control your agents can have over CoBrowse:** configure the CoBrowse mode enabled for agents: View only, Shared, or both. This determines which CoBrowse options are available for agents to offer visitors.

### The following CoBrowse elements can also be configured:

* **Border color:** customize the color of the CoBrowse window border shown on the visitor side.
* **Highlight color:** customize the color of the highlight effect that appears after a mouse click.
* **Match visitor's viewport:** when active, the agent's viewport will be resized to the size of the visitor's browser window. This is useful for responsive websites.
* **Field Masking:** In order to protect sensitive data that may be visible to the agent during a CoBrowse session, it is possible to mask certain input fields. To do so, add CSS Selectors to specific form fields on your website that may contain such data and should not be synchronized to the agent’s view.
  * Example for IDs: #cc_number => do not synchronize content of the element with id='cc_number'.
  * Example for class names: .secret => do not synchronize content of elements with class='secret'.
  * Example for more complex selectors: input\[name=\\'secure\\'\] => do not synchronize content of input elements with name='secure'.

**Note:** Special characters in selectors must be escaped with a '\\' e.g. #id\\@123

![](/img/cobrowse-for-messaging-4.png)

{:start="4"}

1. Set the required CoBrowse configuration and click **Save**. When agents click the CoBrowse button within the message, they will now see the relevant CoBrowse options based on the configurations you have made.

## FAQ

### 1. How is CoBrowse different to desktop sharing?

CoBrowse differs from desktop sharing in that it is more secure, requires no installation, and is non-intrusive. The agent does not take control of the visitor’s desktop, nor do they have access to the visitor’s local files and applications. This minimizes the risk of agents unknowingly sharing sensitive information. In contrast to desktop sharing, CoBrowse offers a next-generation co-browsing experience with zero setup time.

### 2. What is the difference between “shared” mode and “view only” mode?

Agents have the option to choose between "shared” mode and "view only" mode. "Shared" mode provides a full, two-way interactive experience, whereas "view only" mode offers a higher level of privacy for consumers. The table below illustrates the CoBrowse features, along with which CoBrowse features are available in each mode.

Table 1: CoBrowse features and permissions

| Feature | Description | Available in “shared” mode? | Available in “view only” mode? |
| --- | --- | --- | --- |
| Co-Scrolling | The visitor and the agent see the same parts of a web page. | Yes | Yes |
| Co-Highlighting on Page | The visitor and the agent see each other’s virtual mouse pointer and can highlight elements of a web page. | Yes | Yes |
| Co-Highlighting on Text Elements | The visitor and the agent can highlight text elements. | Yes | Yes |
| Co-Navigation | The visitor and the agent browse on the same web pages together. | Yes | No |
| Co-Form filling | The visitor and the agent fill out forms together. | Yes | No |

### 3. Is CoBrowse compatible with corporate firewalls etc.?

Yes, CoBrowse is generally compatible with corporate firewalls. It only uses standard web protocols that are deployed and used in typical web applications.

### 4. Which options are available to secure form input (e.g. password)?

Password form fields are automatically blocked from transmitting data into the CoBrowse session of other participants. Other fields have to be identified by using a proprietary HTML attribute or by manually managing a blacklist on a server (e.g., using CSS selectors).

### 5. Is it possible to have a CoBrowse session on untagged web pages and external domains?

CoBrowse works on tagged pages only. This is to ensure a secure co-browsing session, and also to enable the transfer of the session state (e.g. shopping cart), along with the last visited page and form data.