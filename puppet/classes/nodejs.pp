class nodejs {

  package { 'python-software-properties':
    ensure  => present,
    require => Exec['apt-update'],
  }

  exec { 'apt-repository-nodejs':
    command => '/usr/bin/add-apt-repository ppa:chris-lea/node.js',
    require => Package['python-software-properties'],
  }

  exec { 'apt-update-nodejs':
    command => '/usr/bin/apt-get update',
    require => Exec['apt-repository-nodejs']
  }

  package { 'nodejs':
    ensure  => present,
    require => Exec['apt-update-nodejs']
  }
}