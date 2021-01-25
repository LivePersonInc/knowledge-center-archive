


# require 'delivery-sdk-ruby'

class CreateNav

  # Incorperate to get to_yaml function to work
  FOLDER_NAME = [
    "categorylist",
    "subcategoryfolder",
    "pagesfolder",
  ];
  LEAF_NAME = [
    "categoryname",
    "subcategories",
    "page",
    "level3"
  ];

  def recursive_navigation_hash(itemCodenames,modularContent)
    hash_map=Hash.new
    for itemCodename in itemCodenames
      codename = modularContent[itemCodename].system.codename
      if(modularContent[itemCodename].elements.subitems)
        subitems = modularContent[itemCodename].elements.subitems.value
        return hash_map[itemCodename] = recursive_navigation_hash(subitems, modularContent)
      else
        return hash_map[itemCodename] =codename;
      end
    end
  end



  def get_navigation_data
    delivery_client = Kentico::Kontent::Delivery::DeliveryClient.new project_id: '8d20758c-d74c-4f59-ae04-ee928c0816b7'
    delivery_client.item('root')
    .depth(5)
    .execute do |response|
      categoryCodeNames = response.item.elements.subitems.value
      modularContent= response.modular_content
    end
    hash = recursive_nav_hash(categoryCodeNames,modularContent )
    
    #  TODO need to convert structure to us folder names and leaf names before this
    return hash.to_yaml
  end
end
cn =CreateNav.new
cn.get_navigation_data