---
pagename: 'Quick launch menu'
categoryName: Agent & manager workspace
subCategoryName: Workspace configuration
indicator: messaging
subtitle: ''
level3: ''
permalink: agent-manager-workspace-workspace-configuration-quick-launch-menu.html
isTutorial: false
isNew: false
date: 2019-01-31 08:52:22 +0000

---

LivePerson’s Quick launch menu provides users with a quick and easy way to launch applications from within the platform using the new waffle menu button that has been added to the UI.

**Quick launch icon:**

![](img/quick-launch-menu-1.png)

## Overview

LivePerson’s open platform allows developers to add apps to LivePerson’s platform. In order for brands to easily launch and use these apps, the developer can add it to the Quick launch menu. The Quick launch menu is a waffle button containing a list of roles and profile-based predefined apps, which expose direct access to LivePerson Application web interfaces from within the UI and other LE-Apps in the future.

This makes it possible for brands to...

### Easily launch and use LE-Apps for the best user experience

Navigation between LivePerson’s applications has never been easier. If a user is already logged in, LE-Apps use standard SSO protocol to open in a new tab, preventing the need to log-in again, while LivePerson’s platform stays open in its own tab.

![](img/quick-launch-menu-4.png)

### Allow users to see and launch only the apps that are available to them based on their role and profile

Each user will be exposed only to the relevant LE-Apps for them, based on their role and profile. Once the developer decides which role can use this LE-App, the Quick launch menu presents the app only for users with the relevant roles and profiles. This means that users within the same brand will see different apps based on their role.

**Agent Quick launch:**

![](img/quick-launch-menu-2.png)

**Campaign manager Quick launch:**

![](img/quick-launch-menu-3.png)

## Enablement

Below is information for how to enable user permissions for the Quick launch menu:

**Roles:** With Roles, a developer defines what kind of user roles can potentially use/launch the LE-App. When allowing the app to be exposed over the Quick launch menu, the developer can allow only a specific role or roles to access it. Also, the developer is able to enable the application for all profiles within the selected roles by default.

**Profiles:** When allowing an LE-App to be exposed over the Quick launch menu, the brand’s admin can allow sub-groups to use the app. With Profiles, the account admin (or any other LE-User with App Provisioning permissions) can define the sub-group of users (only profiles from the above group of roles) who can use the app.

This document contains an overview of LivePerson's Quick launch menu. If you are a developer looking for more in-depth, technical documentation about working with LivePerson’s Quick launch menu, please see our [Roles and Profiles Documentation](https://developers.liveperson.com/liveengage-applications-what-is-a-liveengage-application.html#quicklaunch-menu) in the Developers Community.
