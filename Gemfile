# encoding: UTF-8

source 'https://rubygems.org'
#ruby=rbx-2.2.3
ruby '2.1.0', engine: 'rbx', engine_version: '2.2.3'

# core
platforms :rbx do
  gem 'rubysl' # for rbx, running 2.1.0
end

gem 'puma'
gem 'foreman'
gem 'sinatra', '1.4.3'
gem 'rake'

# templating
gem 'haml'

# heroku
gem 'newrelic_rpm'

# devtools
group :development do
  # linting
  gem 'rubocop'
end
