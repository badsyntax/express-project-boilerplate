class ruby {

    # Ensure the ruby package is installed.
    package { 'ruby':
        ensure  => present,
        require => Exec['apt-update']
    }

    # Ensure the rubygems package is installed.
    package { 'rubygems':
        ensure  => present,
        require => Package['ruby']
    }
}
