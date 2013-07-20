class sass {

  # Ensure the sass package is installed.
  exec { 'sass':
    command  => '/usr/bin/gem install sass',
    require => Package['rubygems']
  }

  # Ensure the compass package is installed.
  exec { 'compass':
    command  => '/usr/bin/gem install compass',
    require => Exec['sass']
  }
}
