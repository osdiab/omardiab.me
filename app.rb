# encoding: UTF-8

require 'sinatra'
require 'newrelic_rpm'

get '/' do
  haml :home
end

not_found do
  haml :'404'
end
