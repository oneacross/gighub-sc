# ===========================================================================
# Project:   Gighub
# Copyright: ©2011 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore

proxy '/users', :to => 'localhost:3000'
proxy '/sessions', :to => 'localhost:3000'
proxy '/log_out', :to => 'localhost:3000'
