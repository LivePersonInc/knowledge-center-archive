---
pagename: Add the LivePerson tag to your website
categoryName: Getting started
subCategoryName: ''
indicator: both
subtitle: Add the LivePerson to your website to enable messaging or chat
level3: ''
permalink: getting-started-add-the-liveperson-tag-to-your-website.html
isTutorial: false
date: 2019-01-16 16:52:21 +0000
isNew: false

---
To use the LivePerson's web live chat or web messaging, you must first place the LiveEngage Monitor Tag on your website. The tag allows brands to identify and monitor visitors on their website, empowering agents to engage with visitors based upon real-time behaviors and maintain continuous conversations with visitors as they browse.

The LiveEngage Tag consists of a small, lightweight piece of code that opens the door for the built-in functionalities of the web live chat and web messaging communication channels. The tag loads asynchronously, so it will not affect initial page loading time.

The LiveEngage Tag should be embedded in each page of your website. If it is not, conversations can end without warning as visitors browse to different pages and targeted invites may not trigger.

## Functionality

The default functionality offered by dynamically-loaded taglets is described below:

* Monitoring taglet: Monitors your visitors in order to offer them relevant campaigns and collect data about their journey.
* Engagement taglet: Records and relays the engagements on each page, allowing agents to connect with visitors or help point them to relevant parts of your site.
* Unified chat window bootstrap: An embedded engagement window that allows visitors to connect with agents

**Notes:**

* Taglets are small programs, managed by LivePerson, that are used to add functionality to a brand's website. The specific taglets brought to the page on your website depend on your LivePerson account and the LiveEngage version in use.
* Taglets contain the minimum code needed to start the applications
* Code is loaded dynamically afterwards, based on user actions

## Getting your tag

To obtain the LivePerson tag for your account, login with admin credentials and pull down the menu under your user name > select LiveEngage tag.

![](/img/LP tag Gif-1.gif)

## Deploying your tag

The tag will most likely be added to your website by your development team, or someone in charge of updating the website.

The tag should be included into the <head> of all web pages.

If the tag is included via an external javascript file, it should look this:

`<script type="text/javascript" src="/le-mtagconfig.js"></script>`

### Follow these guidelines:

* Add tag to every page of your website (this does not mean that the button will display on every page, but it is important for integrity of the user experience)
* The code should be included as high up in the `<head>` element as possible.
* If the tag is included a javascript file, be sure to omit the `<script> tag and <!-- HTML comments -->`
* For mobile compatibility, ensure that the <head> of your web pages includes the following meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>``
  * The minimum tag required is the following: `<meta name="viewport" content="width=device-width>`

## Using the LivePerson Tag with a tag management system

Tag management systems are incorporated to make smart decisions about when to fire each tag, for example on a visitor’s first visit, or when a specific page is visited. Generally, fewer tags means less load time, and therefore a reduction in the chances of an error. Typically today, all tags are fired asynchronously, removing a large part of site load time.

{: .notice}  
Using a tag management system can cause a delay in loading of engagements if the LivePerson Tag is loaded after many other tags. To reduce load time, we recommend placing the LiveEngage Tag as high up in the loading sequence as possible.

Fore more technical details on the tag, visit the [developers community](https://developers.liveperson.com/le-tag-overview.html).
