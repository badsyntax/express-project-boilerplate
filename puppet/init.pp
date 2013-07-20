import 'classes/*'

class init {

  exec { 'apt-update':
    command => '/usr/bin/apt-get update',
  }

  include nodejs
}

include init