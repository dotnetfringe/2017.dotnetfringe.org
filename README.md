dotnetfringe.github.io
======================

Website for dotnetfringe.org

Fonts: Intro Cond

## To Build & Run

* Install Ruby (2.3.x is what we're using)
* Install the bundler gem: `gem install bundler`
* Head to the root directory in your command prompt
* Run `bundle install`. The github pages gems will install.
* Run `bundle exec jekyll serve`. This will serve the page at `http://localhost:4000`

If you run into problems, feel free to reach out to [Sean Killeen](mailto:SeanKilleen@gmail.com) or find us on the [dotNetFringe Slack org](https://dotnetfringe.slack.com/)

## Troubleshooting: Regeneration throws an SSL Error
Sean [Ran into this problem](https://github.com/github/pages-gem/issues/399#issuecomment-280205210).

Here's the fix on windows, per that thread (note -- requires a restart):

* Go to github and [generate a personal access token](https://github.com/settings/tokens)
 * It just needs public access
 * Don't forget to copy the token text!
* Create a system environment variable called `JEKYLL_GITHUB_TOKEN` and set the value to the token text
* Create a system environment variable called `SSL_CERT_FILE` and set the value to the full path of the `cacert.pem` file (found in the root directory of this repo)
* Restart your machine. 

This should remove this error when building the repo. (ugh, sorry about that)