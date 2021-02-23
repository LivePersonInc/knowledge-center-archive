# Frozen-string-literal: true
# Copyright: 2017 - 2020 - ISC License
# Author: Jordon Bedwell
# Encoding: utf-8

require 'pathutil'

module Jekyll

  #
  # Reads the Jekyll configuration, this is necessary
  #   because some of our stuff loads well before Jekyll
  #   to setup, so we need to see the config before
  #   Jekyll even sees it's own config.
  # @return [Hash] the config.
  #
  def self.config
    old_e = nil
    old_o = nil

    @config ||= begin
      old_o, old_e = $stdout, $stderr
      $stdout, $stderr = StringIO.new, StringIO.new
      file = Pathutil.pwd.join('_config.yml')
      config = file.read_yaml(safe: true)
      source = config['source']
      defs = {
        'source' => Pathutil.pwd.to_s
      }

      config = config.merge(defs)
      configuration(config).update({
        'source' => source || Configuration::DEFAULTS[
          'source'
        ]
      })
    end
  ensure
    $stdout = old_o if old_o
    $stderr = old_e if old_e
  end

  #
  # Reloads the configuration file for you, this only
  #   affects `self.config` and doesn't really affect the
  #   site instance at all, Jekyll is weird.
  #
  def self.reload_config
    instance_variable_set(:@config, nil)
    config
  end

  #
  # Whether or not we are inside of development
  #   environment, this is where most people work
  #   but you should set it yourself.
  # @return [true,false] truth.
  #
  def self.dev?
    @dev ||= begin
      Jekyll.env == 'dev' || Jekyll.env == 'development'
    end
  end

  #
  # Whether or not we are inside of production
  #   this is what you should set yourself to if
  #   you are building a deployment.
  # @return [true,false] truth.
  #
  def self.production?
    @production ||= begin
      Jekyll.env == 'production' || Jekyll.env == 'prod'
    end
  end

  #
  # A quick Pathutil (joinable) into the source dir, this
  #   hopefully follows the spec of Jekyll by allowing you to
  #   set the source dir (with `source`) and then if it's
  #   not set, defaulting to the current path.
  # @return [Pathutil] the path.
  #
  def self.source_dir
    @source_dir ||= begin
      dir = Pathutil.new(config.fetch('source'))
      dir.expand_path
    end
  end

  #
  # @note this simply uses the default set by Jekyll
  # A quick `Pathutil` (joinable) into the plugins dir.
  # @return [Pathutil] the path.
  #
  def self.plugins_dir
    @plugins_dir ||= begin
      dir = Pathutil.new(config.fetch('plugins_dir'))
      dir.expand_path
    end
  end

  #
  # A quick Pathutil (joinable) into the cache dir, and as
  #   agreed to in https://goo.gl/TdzJWV we will default to
  #   `.jekyll-cache` unless you define `cache_dir` key.
  # @return [Pathutil] the path.
  #
  def self.cache_dir
    @cache_dir ||= begin
      backup = source_dir.join('.jekyll-cache')
      dir = Pathutil.new(config.fetch('cache_dir', backup))
      dir.expand_path
    end
  end

  #
  # @note this simply uses the default set by Jekyll
  # A quick `Pathutil` (joinable) into the site dir.
  # @return [Pathutil] the path.
  #
  def self.site_dir
    @site_dir ||= begin
      dir = Pathutil.new(config.fetch('destination'))
      dir.expand_path
    end
  end
end
