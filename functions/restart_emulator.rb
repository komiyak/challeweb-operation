#! /usr/bin/env ruby

require 'yaml'

exports_str = ''

# To load environment variables and to build a string to export.
yaml = YAML.load_file('.env.yaml')
yaml.each do |key, val|
  exports_str += "#{key}=#{val} "
end

# Restart the emulator.
exec "#{exports_str} functions-emulator restart"
