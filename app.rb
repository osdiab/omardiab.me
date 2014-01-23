# encoding: UTF-8

require 'sinatra'
require 'newrelic_rpm'

get '/' do
  # done this way, since ordering matters
  connections = [['github', 'https://github.com/osdiab'],
                 ['linkedin', 'http://www.linkedin.com/in/osdiab'],
                 ['soundcloud', 'https://soundcloud.com/yellowfive'],
                 ['medium', 'https://medium.com/@therealomardiab'],
                 ['facebook', 'https://www.facebook.com/omar.s.diab'],
                 ['email', 'mailto://o.s.diab@gmail.com']]
  haml :home, locals: {connections: connections}
end

not_found do
  redirect to('/')
end
