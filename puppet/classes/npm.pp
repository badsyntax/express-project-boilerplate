class npm {

  # Ensure the bower npm package is installed.
  # exec { 'bower':
  #   command  => '/usr/bin/npm install -g bower',
  #   require => Package['nodejs']
  # }

  # Ensure the nodemon npm package is installed.
  exec { 'nodemon':
    command  => '/usr/bin/npm install -g nodemon',
    require => Package['nodejs']
  }

  # Ensure the grunt-cli npm package is installed.
  exec { 'grunt-cli':
    command  => '/usr/bin/npm install -g grunt-cli',
    require => Package['nodejs']
  }

  # Ensure the forever npm package is installed.
  exec { 'forever':
    command  => '/usr/bin/npm install -g forever',
    require => Package['nodejs']
  }
}
