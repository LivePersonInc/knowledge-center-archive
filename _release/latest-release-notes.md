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
---

{% assign sorted = site.release | sort: 'date' %}
{% for item in sorted reversed %}
{% if item.latest == true %}
{{ item.content }}
{% endif %}
{% endfor %}
