---
pagename: 'Entry point '
categoryName: Contact center management
subCategoryName: Campaigns
indicator: both
subtitle: Define where your engagement should display
level3: ''
permalink: contact-center-management-campaigns-entry-point
isTutorial: false
isNew: false
date: 2019-01-28 15:05:01 +0000

---
The entry point allows you to define where you want your engagement to appear within your website. You can use one of the predefined entry points, such as Entire Website or Entire App, or focus your targeting on a particular page or section.

## Assigning an entry point to your engagement

To create a new entry point, simply name the entry point and copy its URL into the field “Contains/Exact/Advance.” To define where the engagement cannot display, copy the excluded page URL into the applicable field.

**To create or edit the entry point:**

1. Click **Entry Point** to enter the entry point library, now you can add new entry points for displaying engagements
2. Click **Add new entry point** and enter an entry point name
3. Select contains, exact, or advanced from the dropdown menu and copy the target URL into the field on the right
4. Click **+ Add URL** to add more URLs
5. If you want to exclude the engagement from specific pages, click **+ Exclude entry point** and copy the target URL into the field on the right
6. Click the **Save** button

![](/img/entry-point-1.png)

{: .important}
**Note:** Entry points are shared throughout your account, so if yfou modify an entry point, the change will be applied to any other engagements that use this entry point.

## Map your site categories using code

You’ve just finished creating an engagement for one of the categories on your website or mobile app. For example, cameras category on your website. You want the engagement to display on all the pages in the camera category. One option is to use a URL define where the engagement should display. However this means that you will need to manually add each camera-related page URL into LiveEngage.

To save you time, it is also possible to add a tag, or section, to your page code. These sections can also be defined when creating engagements for mobile app. A section associates a category name (camera, in our example) to the page; any new or existing page on your website or within your app that you tag with the camera section will display the engagement automatically. A page can be represented by one or more tags – for example, you can tag camera or camera and DSLR - giving you greater flexibility in targeting your engagement, which in turn makes your campaign more effective.

In the LiveEngage UI, adding the tag using quotes (e.g, “camera DSLR”) will ensure that the engagement is displayed on all pages with this exact tag (camera DSLR). Adding the tag without quotes (e.g. camera) will mean the engagement is displayed on all pages with a tag containing that text (e.g. camera, camera DSLR, waterproof camera etc).

## Section engagement attributes

Sections can be used for both web and mobile app engagements. Since website locations in LiveEngage are based (by default), on URLs, sections will be particularly valuable for web engagements when:

1. You make frequent changes to your website and it’s hard to keep track of the pages in each category.
2. Your URLs are not readable. For example: the URL “www.urlexample.uk/articles/aaa/bbb.html” doesn’t indicate the location of the visitor on your website.
3. Your website URLs are not structured. For example, the URL “www.urlexample.com/XX3000” doesn’t indicate the XX3000 product category. By adding a section to the page, you can identify its category.
4. You have a single-page application (SPA), where a page has several internally-linked sections, but only one URL for the entire page.

<div class="important">
<b>Note:</b>
<ul>
<li>Adding sections to your website requires adding code to the relevant web pages and should be done by a web developer.</li> <li>Before creating an engagement for each section on your website, you’ll need a list of all the sections that exist on your site. Contact your web developer to get the list of sections.</li>
</ul>
</div>

### Configuration

1. Go to the campaigns page, and click **Data Sources** in the footnote.

![](/img/entry-point-2.png)

{:start="2"}

1. Under **Engagement Attributes** click **Visitor Journey** and use the example code under sections.
2. Paste the code on the pages where you want to display the engagement. Change the code sample section names according to your category names:

![](/img/entry-point-3.png)

{:start="4"}

1. In the campaign view, under the engagement, click **Entry Point**.

![](/img/entry-point-4.png)

{:start="5"}

1. From the Entry Point Library, click **Add new**.
2. Enter an entry point name (a category, e.g., loans).
3. Select section and type the names of the sections where you want the engagement to display. Remember you can tag as many sections as you want to one entry point and if you want exact matches, you will need to use quotes.
4. Click **Save**.

![](/img/entry-point-5.png)