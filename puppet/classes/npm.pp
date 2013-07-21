class npm {

    # Ensure the bower npm package is installed.
    exec { 'bower':
        command  => '/usr/bin/npm install -g bower',
        user => 'root',
        require => Package['nodejs']
    }

    # Ensure the nodemon npm package is installed.
    exec { 'nodemon':
        command  => '/usr/bin/npm install -g nodemon',
        user => 'root',
        require => Package['nodejs']
    }

    # # Ensure the grunt-cli npm package is installed.
    exec { 'grunt-cli':
      command  => '/usr/bin/npm install -g grunt-cli',
      user => 'root',
      require => Package['nodejs']
    }

    # Ensure the forever npm package is installed.
    exec { 'forever':
        command  => '/usr/bin/npm install -g forever',
        user => 'root',
        require => Package['nodejs']
    }
}
