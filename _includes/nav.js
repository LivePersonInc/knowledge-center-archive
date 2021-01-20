function processData(data) {
var rootMenuItems = data.item.elements.subitems.value;
var allLinkedContent = data.modular_content;

var menuHtml = itemsToList(rootMenuItems, allLinkedContent, 0);
$("#main_nav").append(menuHtml);
}
const FOLDER_NAME = [
  "categorylist",
  "subcategoryfolder",
  "pagesfolder",
];
const LEAF_NAME = [
  "categoryname",
  "subcategories",
  "page",
  "level3"
];
// Limit recursion depth in case of cyclic references between content items.
// (Otherwise your menu would be infinitely large and your site would crash.)
const DEPTH_LIMIT = 5;

// Generate menu HTML by recursively transforming content items to list elements.
function itemsToList(itemCodenames, linkedContent, currentDepth) {
if(currentDepth >= DEPTH_LIMIT) {
return "";
}


//  if no sub items then stop
var result = "";
  for(let itemCodename of itemCodenames){

  let title = linkedContent[itemCodename].elements.title.value;
  let url = linkedContent[itemCodename].elements.url.value;
  ``
    if (linkedContent[itemCodename].system.type === 'navigation_item'){
      let subitems = linkedContent[itemCodename].elements.subitems.value;
    
      // folder - has subitem+
        foldertype= folderNames[folderNames]

      itemsToList(itemCodenames, linkedContent, currentDepth+1)
      root:{:{{}}}
    
    }
  // leaf - is system.type !== navigation_item 
  
    leafNames[folderNames]
    <li>
}

