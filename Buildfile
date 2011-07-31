# ===========================================================================
# Project:   Gighub
# Copyright: ©2011 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore

proxy '/users', :to => 'localhost:3000'
