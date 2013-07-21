import 'classes/*'

class init {

    exec { 'apt-update':
        command => '/usr/bin/apt-get update',
    }

    # Install system packages
    include git
    include nodejs
    include npm
    include ruby
    include sass

    # Install project packages
    include setup
}

include init