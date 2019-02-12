var client = algoliasearch("51CECYVH5R", "c7a71a465b895e34b00ecb5b0f0141fb")
var knowledgeIndex = client.initIndex('knowledge_BASE');
var search = document.getElementById('aa-search-input');

autocomplete(
  '#aa-search-input',
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
          let value = suggestion.pagename;
          let content = suggestion.content;
          let link = suggestion.permalink;
          if (suggestion._highlightResult.pagename) {
            value = suggestion._highlightResult.pagename.value;
          }
          if (suggestion._highlightResult.content) {
            content = suggestion._highlightResult.content.value;
          }
          if (suggestion._highlightResult.permalink) {
            suggestion._highlightResult.permalink.value;
          }
          return (
            '<span class="searchtitlecontainer">' + '<a  onclick="linkclick(event, this)" class="searchtitle" href="' + link +'">' + value + '</a> </span>' + '<br />' + '<span class="searchcontentcontainer">' + '<a onclick="linkclick(event, this)" class="searchlinktext" href="' + link +'">' +  content + '</a> </span>'
          )
        },
        empty: '<div class="aa-empty">No results found!</div>',
      },
    },
  ]
);

$('#aa-search-input').on({
  'autocomplete:shown': function() {
    var content = document.getElementById('defaultcontent');
    var sidebar = document.getElementById('defaultsidebar');
    var footer = document.getElementById('defaultfooter');
    content.classList.add('overlayvisible');
    sidebar.classList.add('overlayvisible');
    footer.classList.add('overlayvisible');
},
  'autocomplete:closed': function () {
    var content = document.getElementById('defaultcontent');
    var sidebar = document.getElementById('defaultsidebar');
    var footer = document.getElementById('defaultfooter');
    content.classList.remove('overlayvisible');
    sidebar.classList.remove('overlayvisible');
    footer.classList.remove('overlayvisible');
},
  'autocomplete:empty': function () {
    var content = document.getElementById('defaultcontent');
    var sidebar = document.getElementById('defaultsidebar');
    var footer = document.getElementById('defaultfooter');
    content.classList.add('overlayvisible');
    sidebar.classList.add('overlayvisible');
    footer.classList.add('overlayvisible');
},
  'autocomplete:updated': function () {
    if (this.value != '') {
    var input = document.getElementById('aa-search-input');
    var filter = input.value.toUpperCase();
    localStorage.setItem('filter', filter);
    }else {
      var content = document.getElementById('defaultcontent');
      var sidebar = document.getElementById('defaultsidebar');
      var footer = document.getElementById('defaultfooter');
      content.classList.remove('overlayvisible');
      sidebar.classList.remove('overlayvisible');
      footer.classList.remove('overlayvisible');
}}
});
