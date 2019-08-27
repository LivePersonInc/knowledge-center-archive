---
pagename: Latest What's New
categoryName: What's new
subCategoryName: ''
indicator: both
subtitle: ''
level3: ''
permalink: whats-new-latest-whats-new.html
isTutorial: false
isNew: false
date: 2019-01-01
---

{% assign sorted = site.new | sort: 'date' %}
{% for item in sorted reversed %}
{% if forloop.first == true %}
<p class="notice">This What's New edition was released in {{ item.pagename }}. You can view it at <a href="{{ item.url }}">this</a> location as well.</p>
{{ item.content }}
{% endif %}
{% endfor %}
