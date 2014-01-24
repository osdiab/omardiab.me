# encoding: UTF-8

require './app'

use Rack::Deflater
use Rack::Static,
  :urls => ["/img", "/js", "/css"],
  :root => "public"
run App
