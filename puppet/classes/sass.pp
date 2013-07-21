class sass {

   # Ensure the sass package is installed.
    exec { 'sass':
        command  => '/usr/bin/gem install sass',
        user => 'root',
        require => Package['rubygems']
    }

    # Ensure the compass package is installed.
    exec { 'compass':
        command  => '/usr/bin/gem install compass',
        user => 'root',
        require => Exec['sass']
    }
}
