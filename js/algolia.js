var client = algoliasearch("51CECYVH5R", "c7a71a465b895e34b00ecb5b0f0141fb")
var knowledgeIndex = client.initIndex('knowledge_BASE');

autocomplete(
  '.aa-input-search',
  {
    debug: true
  },
  [
    {
      source: autocomplete.sources.hits(knowledgeIndex, {hitsPerPage: 5}),
      displayKey: '',
      name: 'kb', /* class aa-dataset-kb */
      templates: {
        suggestion: function(suggestion) {
          console.log(suggestion);
          const value = suggestion.pagename;
          const content = suggestion.content;
          const link = suggestion.permalink;
          if (suggestion._highlightResult.pagename && suggestion._highlightResult.content && suggestion._highlightResult.permalink) {
            value = suggestion._highlightResult.pagename.html;
            content = suggestion._highlightResult.content.html;
            link = suggestion._highlightResult.permalink.value;
          }
          return (
            '<span class="searchtitlecontainer">' + '<a  onclick="linkclick(event, this)" class="searchtitle" href="' + link +'">' + value + '</a> </span>' + '<br />' + '<span class="searchcontentcontainer">' + '<a onclick="linkclick(event, this)" class="searchlinktext" href="' + link +'">' +  content + '</a> </span>'
          )
        },
        empty: '<div class="aa-empty">No matching Items</div>',
      },
    },
  ]
);
