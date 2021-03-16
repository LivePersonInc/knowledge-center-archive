---
pagename: Latest Release Notes
categoryName: Release notes
subCategoryName: ''
indicator: both
subtitle: ''
level3: ''
permalink: release-notes-latest-release-notes.html
isTutorial: false
isNew: false
date: 2019-01-01
---

{% assign sorted = site.release | sort: 'date' %}
{% for item in sorted reversed %}
{% if forloop.first == true %}
<p class="notice">These release notes are for the {{ item.pagename }}. You can view them at <a href="{{ item.url }}">this</a> location as well.</p>
<br>
{{ item.content }}
{% endif %}
{% endfor %}
