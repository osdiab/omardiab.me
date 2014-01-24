# encoding: UTF-8

require 'haml'
require 'newrelic_rpm'
require 'sinatra/base'

# Application class
class App < Sinatra::Base
  get '/' do
    # done this way, since ordering matters
    connections = [['github', 'https://github.com/osdiab'],
                   ['linkedin', 'http://www.linkedin.com/in/osdiab'],
                   ['soundcloud', 'https://soundcloud.com/yellowfive'],
                   ['medium', 'https://medium.com/@therealomardiab'],
                   ['facebook', 'https://www.facebook.com/omar.s.diab'],
                   ['twitter', 'https://twitter.com/therealomardiab'],
                   ['email', 'mailto:o.s.diab@gmail.com']]
    haml :home, locals: {connections: connections}
  end

  not_found do
    redirect to('/')
  end

  run! if app_file == $PROGRAM_NAME
end
