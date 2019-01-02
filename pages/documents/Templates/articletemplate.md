---
pagename: Article Template
subtitle: This is an example of how an article layout works
categoryName: Getting Started
subCategoryName: ''
level3Name: ''
permalink: article-template.html
indicator: both
isTutorial: false
date: 2018-12-30 10:15:01 +0200
published: false

---
### Titles

The overall title of the article is determined by the front-matter (by using the `title` parameter at its top). You shouldn't include it again inside the article, since this will create a confusing duplicate.

Since the overall title of the article will be [h2](https://www.quackit.com/html/tags/html_h2_tag.cfm), all subsequent titles within the article are h3. You achieve this by typing in `###` in Markdown before what you'd like the title to be and leaving it in a row of its own, like so:

`### h3 title`

#### Other Titles

After h3, lower titles should proceed from there; sub-titles, like this section, will be h4 while h5 may also be used but is rather indistinguishable from **bold**. h6 will not be used; if you have more than three levels of sub-titles, re-consider your document's structure and how it can be better arranged.

**In Forestry, you can see the level of the titles to the left of them, in greyed out letters.** **When you hover over them, they turn black, making them easier to read.**

### Images

Inserting images with Forestry is easy. Simply click on the image icon in the Toolbar at the bottom of the editor, upload your image and then insert it.  A few guidelines for images:

* All images should be saved in a high resolution. Resizing will happen on the back-end, when the site is generated.
* When taking screenshots, we always prefer to capture the complete screen (for example, the complete LiveEngage workspace rather than a snippet of it) and highlighting the relevant areas we’d like the user to pay attention to.
* Coloring of highlights on screenshots (like arrows or boxes) should be either black, red or blue, depending on the color scheme of the screenshot at hand. Maintain consistent coloring as much as possible in the same article.

### Videos

When a video needs to be inserting into a document, simply leave the **full** Vimeo link in the text of the document itself, on its own line. Eden will review these links and embed them. If you have specific directions on how a video should be embedded (a bigger space between it and the text is needed, a specific location within the file that’s not intuitive, and so on) email Eden directly with your directions. **Do not leave these directions in the article itself**.

### A Note About the Slug

Since this article doesn't have a Category, L2 Category _or_ L3 Category, its slug ends up being just the title. This will rarely happen but it's fine; the format for the slug assumes all those parts exist and if they don't, simply don't include them!