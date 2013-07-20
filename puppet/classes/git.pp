class git {

  # Ensure the git package is installed.
  package { 'git':
    ensure  => present,
    require => Exec['apt-update'],
  }
}
