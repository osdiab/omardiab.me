# encoding: UTF-8

require 'sinatra'
require 'newrelic_rpm'

get '/' do
  haml :home
end

not_found do
  redirect to('/')
end
