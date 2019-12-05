---
pagename: 'User Guide'
categoryName: LivePerson Applications
subCategoryName: ''
indicator: both
subtitle:
level3: ''
permalink: liveperson-applications-user-guide.html
isTutorial: false
isNew: false
---

The Applications dashboard is where you can manage and configure your applications. This dashboard is visible and accessible only to account administrators. It is accessed from the left hand menu in LiveEngage, by clicking on the "puzzle piece" icon.

![](img/appsUI2.jpg)

The default view shows you all of your global applications, both pre-installed applications (which are installed on all accounts by LivePerson) and applications that were specifically installed for your account. Pre-installed applications are clearly labelled as such and cannot be uninstalled by you. By clicking on the "Private applications" tab at the top left of your screen you can access your account's private applications.

### Configuring an application

By hovering over an application's card, you will revel two buttons. The first, "Enablement Status" enables you to quickly toggle the application on or off. By clicking on the "Configure" button, you can navigate to the application's configuration menus.

The default tab is the "General" tab. Under this tab, you can find general information regarding the application including version, supported languages, the name of the developer who built the application, the application's name, icon, etc.

[screenshot]

Several of these fields are editable:

* The display name - this is the application's name across all LivePerson systems (such as the Quick Launch menu and the applications dashboard).

* Application icon - you can use this field to input a URL pointing to the image you would like to use as the application's icon. The URL must use HTTPS and the image has to be of the following format: JPG, PNG, non-animated GIF.

* Set profiles - using this field you can set the user profiles which will be able to use this application. Note that you can only select profiles defined by the developer of this application.

* Visible in Quicklaunch menu - use this toggle to define whether this application should or should not appear in your account's Quicklaunch menu.

* Uninstall - to install an application click on the highlighted link ("click here"). You will be promoted to accept and uninstall the application.

The second configuration tab is the "Information" tab. This tab includes an overview of the application, including more detailed information on how it works and what it does alongside screenshots of the application. All fields in this tab can only be edited by the application developer.

[screenshot]

The last tab is the "Configuration" tab. This tab includes the onboarding and configuration for this application. This tab changes between applications and is defined by the application's developer in case further configuration for the application is required (for example, permissions, specific features which need to be enabled, etc.) If the application requires no further configuration, this tab will not be displayed.

[screenshot]

### Installing a private application

When you navigate to the "Private applications" tab, you will see a list of all private applications you have installed on your account. In addition, you will see an extra block allowing you to install a private application.

[screenshot]

In order to install a private application, you will need to upload a valid JSON schema file. For more information on this schema, please see the Developers' Community. Once you click on this block, you will be prompted to upload the JSON file for your application. Once you do so, the private application will be installed.
