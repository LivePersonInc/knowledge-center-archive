class FilenameResolver
  def resolve(item)
    sitemap_arr=item.elements.sitemap.value
    folder_slug=''
    #  site made has the data start bottom and end top
    
    sitemap_arr.reverse_each{ |i| folder_slug+=convert_underscore_to_dash(i.codename)+"-" }
    url_slug = get_url_slug(item)
    
    "#{folder_slug}#{url_slug.value}"
  end

  private
  
  def convert_underscore_to_dash(codename)
    return codename.gsub("_", "-")
    
  end

  def get_url_slug(item)
    item.elements.each_pair { |_codename, element| return element if slug?(element) }
  end

  def slug?(element)
    element.type == Kentico::Kontent::Constants::ItemElementType::URL_SLUG
  end
end
