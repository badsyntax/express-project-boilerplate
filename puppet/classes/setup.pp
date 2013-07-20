class setup {

  # We're using the --no-bin-links option to prevent symlinks from being created
  # as the virutalbox synced folders don't support symlinks by default.

  # Ensure all project-specific npm packages are installed.
  exec { 'install-project-npm':
      command   => '/usr/bin/npm install',
      cwd  => '/var/www',
      require   => Package['nodejs']
  }

  # Ensure all project-specific bower packages are installed.
  exec { 'install-project-bower':
      command   => '/usr/bin/bower install',
      cwd  => '/var/www',
      require => [ Package['git'], Exec['bower'] ]
  }
}
