---
pagename: Messaging channels capabilities comparison
categoryName: Messaging channels
subCategoryName: ''
indicator: messaging
subtitle:
level3: ''
permalink: messaging-channels-messaging-channels-capabilities-comparison.html
isTutorial: false
published: true
---

<div class="mobilefeaturestable">This table contains all of the Conversational Cloud's Web Messaging capabilities compared over several channels. As such, it is too complex to navigate and view on a tablet or a mobile device. Please open it on your laptop of desktop computer to view it properly.</div>

<input id="capabilitiesSearch" type="text" placeholder="Search by capability name" />
<div class="tablecontainer" id="featureContainer">
<table class="releasenotes" id="featurestable">
  <thead>
  <tr id="featuresheader">
    <th></th>
    <th>Mobile App Messaging</th>
    <th>Web Messaging</th>
    <th>Apple Business chat</th>
    <th>SMS</th>
    <th>Facebook</th>
    <th>WhatsApp</th>
    <th>Google RCS</th>
    <th>LINE</th>
    <th>Messaging Window API</th>
    <th>Connector API</th>
    <th>WeChat</th>
  </tr>
  </thead>
  <tbody>
    {% for category in site.data.capabilities %}
      <tr class="categoryrow">
        <td>{{ category.categoryName }}</td>
        <td><img class="tableIcon" src="img/mobileappmessaging.svg" /></td>
        <td><img class="tableIcon" src="img/web-messaging.svg" /></td>
        <td><img class="tableIcon" src="img/abc.svg" /></td>
        <td><img class="tableIcon" src="img/sms.svg" /></td>
        <td><img class="tableIcon" src="img/fb-messenger.svg" /></td>
        <td><img class="tableIcon" src="img/whatsapp.svg" /></td>
        <td><img class="tableIcon" src="img/google-rsc.svg" /></td>
        <td><img class="tableIcon" src="img/line.svg" /></td>
        <td><img class="tableIcon" src="img/messaging-window-api.svg" /></td>
        <td><img class="tableIcon" src="img/connector-api.svg" /></td>
        <td><img class="tableIcon" src="img/WeChat-logo.png" /></td>
      </tr>
      {% for feature in category.features %}
      <tr>
        {% if feature.tooltip %}
        <td>{{ feature.featureName }} <i class="fas fa-info tooltipicon"><span class="tooltipinfo">{{ feature.tooltip }}</span></i></td>
        {% else %}
        <td>{{ feature.featureName }}</td>
        {% endif %}
        {% for channel in feature.channels %}
          {% if forloop.index == 1 %}
            {% if channel.mobileAppMessaging == "Supported" %}
            <td class="green">{{ channel.mobileAppMessaging }}</td>
            {% else %}
            <td>{{ channel.mobileAppMessaging }}</td>
            {% endif %}
          {% endif %}
          {% if forloop.index == 2 %}
            {% if channel.webMessaging == "Supported" %}
            <td class="green">{{ channel.webMessaging }}</td>
            {% else %}
            <td>{{ channel.webMessaging }}</td>
            {% endif %}
          {% endif %}
          {% if forloop.index == 3 %}
            {% if channel.appleBusinessChat == "Supported" %}
            <td class="green">{{ channel.appleBusinessChat }}</td>
            {% else %}
            <td>{{ channel.appleBusinessChat }}</td>
            {% endif %}
          {% endif %}
          {% if forloop.index == 4 %}
            {% if channel.sms == "Supported" %}
            <td class="green">{{ channel.sms }}</td>
            {% else %}
            <td>{{ channel.sms }}</td>
            {% endif %}
          {% endif %}
          {% if forloop.index == 5 %}
            {% if channel.facebook == "Supported" %}
            <td class="green">{{ channel.facebook }}</td>
            {% else %}
            <td>{{ channel.facebook }}</td>
            {% endif %}
          {% endif %}
          {% if forloop.index == 6 %}
            {% if channel.whatsapp == "Supported" %}
            <td class="green">{{ channel.whatsapp }}</td>
            {% else %}
            <td>{{ channel.whatsapp }}</td>
            {% endif %}
          {% endif %}
          {% if forloop.index == 7 %}
            {% if channel.googleRCS == "Supported" %}
            <td class="green">{{ channel.googleRCS }}</td>
            {% else %}
            <td>{{ channel.googleRCS }}</td>
            {% endif %}
          {% endif %}
          {% if forloop.index == 8 %}
            {% if channel.line == "Supported" %}
            <td class="green">{{ channel.line }}</td>
            {% else %}
            <td>{{ channel.line }}</td>
            {% endif %}
          {% endif %}
          {% if forloop.index == 9 %}
            {% if channel.messagingWindowAPI == "Supported" %}
            <td class="green">{{ channel.messagingWindowAPI }}</td>
            {% else %}
            <td>{{ channel.messagingWindowAPI }}</td>
            {% endif %}
          {% endif %}
          {% if forloop.index == 10 %}
            {% if channel.connectorAPI == "Supported" %}
            <td class="green">{{ channel.connectorAPI }}</td>
            {% else %}
            <td>{{ channel.connectorAPI }}</td>
            {% endif %}
          {% endif %}
          {% if forloop.index == 11 %}
            {% if channel.weChat == "Supported" %}
            <td class="green">{{ channel.weChat }}</td>
            {% else %}
            <td>{{ channel.weChat }}</td>
            {% endif %}
          {% endif %}
        {% endfor %}
      </tr>
      {% endfor %}
    {% endfor %}
    </tbody>
  </table>
</div>
