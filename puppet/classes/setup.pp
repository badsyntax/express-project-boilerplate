class setup {

    # Ensure all project-specific npm packages are installed.
    exec { 'install-project-npm':
        command   => '/usr/bin/npm install',
        cwd  => '/var/www',
        user => 'vagrant',
        require   => Package['nodejs']
    }

   # Ensure all project-specific bower packages are installed.
    exec { 'install-project-bower':
        command   => '/usr/bin/bower install',
        cwd  => '/var/www',
        require => [ Package['git'], Exec['bower'] ]
    }

    # Compile the site assets
    exec { 'compile':
        command   => '/usr/bin/grunt compile',
        cwd  => '/var/www',
        user => 'vagrant',
        require => [ Exec['grunt-cli'], Exec['install-project-npm'] ]
    }
}
