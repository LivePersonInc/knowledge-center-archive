def except(items, item)
  items.select { |x| x.codename != item.codename }
end

class Page < Jekyll::Page
  def initialize(site, data, name, dir = '', content = nil)
    @site = site
    @base = site.source
    @dir = dir
    @name = name
    @path = if site.in_theme_dir(@base) == @base
              site.in_theme_dir(@base, @dir, @name)
            else
              site.in_source_dir(@base, @dir, @name)
            end

    self.process(@name)

    self.data = data
    self.content = content

    data.default_proc = proc do |_, key|
      site.frontmatter_defaults.find(File.join(@dir, @name), type, key)
    end

    Jekyll::Hooks.trigger :pages, :post_init, self
  end
end

class CustomSiteProcessor
  include Kentico::Kontent::Utils

  def generate(site, kentico_data)
    @site = site
    @taxonomomy_groups = kentico_data.taxonomy_groups
    @items = kentico_data.items

    generate_nav_page
  
  end

  private

  def languages
    @languages ||= @site.config['kentico']['languages']
  end
  


  def generate_nav_page
    # languages.each do |language|
    allLinkedContent = @items.find{ |tg| tg.system.codename == 'navigation_item' }
    puts (allLinkedContent)
    # for link in allLinkedContent
    #   puts("link")
    #   puts (link)
    # end
    #   data = {
    #     'layout' => 'sidebar',
    #     'htmlItems' =>  itemsToList(rootMenuItems, allLinkedContent, 0),
    #     'language' => language,
    #   }
    #   @site.pages << Page.new(@site, data, name)
  end

  
end
