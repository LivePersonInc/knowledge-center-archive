# -*- encoding: utf-8 -*-
# stub: jekyll-sanity 1.6.0 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-sanity".freeze
  s.version = "1.6.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Jordon Bedwell".freeze]
  s.date = "2020-03-06"
  s.description = "Patches to make Jekyll less insane and easier".freeze
  s.email = ["jordon@envygeeks.io".freeze]
  s.homepage = "http://github.com/envygeeks/jekyll-sanity".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.1.0".freeze)
  s.rubygems_version = "3.0.9".freeze
  s.summary = "Configuration, Paths and other stuff".freeze

  s.installed_by_version = "3.0.9" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rake>.freeze, [">= 1", "< 99"])
      s.add_development_dependency(%q<rspec>.freeze, [">= 3", "< 4"])
      s.add_development_dependency(%q<envygeeks-rubocop>.freeze, ["= 1.0.0"])
      s.add_development_dependency(%q<luna-rspec-formatters>.freeze, ["~> 3.16"])
      s.add_development_dependency(%q<pry>.freeze, [">= 0.1", "< 0.99"])
      s.add_runtime_dependency(%q<jekyll>.freeze, [">= 3.1", "< 5.0"])
      s.add_runtime_dependency(%q<pathutil>.freeze, ["~> 0.16"])
    else
      s.add_dependency(%q<rake>.freeze, [">= 1", "< 99"])
      s.add_dependency(%q<rspec>.freeze, [">= 3", "< 4"])
      s.add_dependency(%q<envygeeks-rubocop>.freeze, ["= 1.0.0"])
      s.add_dependency(%q<luna-rspec-formatters>.freeze, ["~> 3.16"])
      s.add_dependency(%q<pry>.freeze, [">= 0.1", "< 0.99"])
      s.add_dependency(%q<jekyll>.freeze, [">= 3.1", "< 5.0"])
      s.add_dependency(%q<pathutil>.freeze, ["~> 0.16"])
    end
  else
    s.add_dependency(%q<rake>.freeze, [">= 1", "< 99"])
    s.add_dependency(%q<rspec>.freeze, [">= 3", "< 4"])
    s.add_dependency(%q<envygeeks-rubocop>.freeze, ["= 1.0.0"])
    s.add_dependency(%q<luna-rspec-formatters>.freeze, ["~> 3.16"])
    s.add_dependency(%q<pry>.freeze, [">= 0.1", "< 0.99"])
    s.add_dependency(%q<jekyll>.freeze, [">= 3.1", "< 5.0"])
    s.add_dependency(%q<pathutil>.freeze, ["~> 0.16"])
  end
end
