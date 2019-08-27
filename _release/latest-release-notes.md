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
{: .notice}
These release notes are for the {{ item.pagename }}. You can view them at [this]({{ item.url }}) location as well.
{{ item.content }}
{% endif %}
{% endfor %}
