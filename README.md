## LivePerson Knowledge Center

**Note**: This repo is deprecated as of February 15th 2022. Knowledge.liveperson.com is now built by this repo [https://github.com/LivePersonInc/Kontent-helpcenter](https://github.com/LivePersonInc/Kontent-helpcenter). If you have an issue with content on the website, please use the feedback button on the right side of the screen.

**This site is maintained by the Product Communications and Experience team. Please contact ihaephrati@liveperson.com for issues, questions, and the such**.

### Building the Site Locally

If you have not already done so, make sure your computer has Ruby installed. Here's a helpful guide on how best do that on [Mac](http://railsapps.github.io/installrubyonrails-mac.html) (you can stop once Ruby is installed, you don't need Rails) and on [any other system](https://www.ruby-lang.org/en/documentation/installation/).

Once you have installed Ruby, clone this repository to your machine. Once done, navigate to it using Terminal or your preferred command line interface. Follow the steps below to run the site from your machine. **If you're on Windows, don't forget to run your CLI as an admin**.

**First time install**

0. Run `gem install bundler`. This will install Ruby's package manager which is required for all following commands.
1. Run `bundle install`. This will install all the gems/plugins that the site depends on.
2. Run `bundle exec jekyll build`. This builds the `_site` folder for the first time on your machine. The `bundle exec` prefix makes sure that bundler "watches" your build and installs any dependencies that might be missing. It's a precaution and is thus not mandatory.
3. Run `bundle exec jekyll serve`. This builds the site and serves it over localhost:4000 (by default, you can change the `port` parameter in `config.yml` to whatever port you'd prefer).
4. Navigate to http://localhost:4000/ (or the port you chose) and you'll see the site.

**Serving the site after the first install**

All you need to run in consequent builds of the site is `bundle exec jekyll serve`. You can add the suffix `--incremental` to enable incremental building of the site. This saves build times since the hot loading feature is enabled by default (the site rebuilds every time you hit "save"). When `--incremental` is used, Jekyll won't rebuild the entire site on every save, only the affected sections. If you'd like the project to automatically open in a new tab, you can add the `-o` flag to the end of the above command.

**Note**: changes that alter site navigation or other changes that change the site as a whole might not show up when using `--incremental`. If that occurs, simply "kill" the build and run `bundle exec jekyll serve` without the suffix.

### Licensing

All usage of the contents, documentation or code found in this repository is subject to the [LivePerson API Terms of Use](https://www.liveperson.com/policies/apitou). Please use the link above to read them carefully before utilizing the site.
