class nodejs {

    # Ensure the python-software-properties package is available
    # to allow us to add apt repositories.
    package { 'python-software-properties':
        ensure  => present,
        require => Exec['apt-update'],
    }

    # Add the chri-lead/node.js ppa repository so we can install
    # the latest version of nodejs.
    exec { 'apt-repository-nodejs':
        command => '/usr/bin/add-apt-repository ppa:chris-lea/node.js',
        user => 'root',
        require => Package['python-software-properties'],
    }

    # Update the list of packages.
    exec { 'apt-update-nodejs':
        command => '/usr/bin/apt-get update',
        user => 'root',
        require => Exec['apt-repository-nodejs']
    }

    # Ensure the nodejs package is installed.
    package { 'nodejs':
        ensure  => present,
        require => Exec['apt-update-nodejs']
    }
}
