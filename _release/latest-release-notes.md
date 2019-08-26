---
pagename: Latest Release Notes
categoryName: Release notes
subCategoryName: ''
indicator: both
subtitle: ''
level3: August
permalink: release-notes-latest-release-notes.html
isTutorial: false
isNew: false
---

<ul>
    {% assign sorted = site.release | sort: 'date' %}
    {% for item in sorted reversed %}
    <li>{{ item.pagename }} - {{ item.date }}</li>
    {% endfor %}
</ul>
