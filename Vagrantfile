# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"
  config.vm.hostname = "express-project.local"

  config.vm.synced_folder "./", "/var/www", :extra => "dmode=755,fmode=644"

  config.vm.provision :puppet do |puppet|
    puppet.manifests_path = "puppet"
    puppet.manifest_file  = "init.pp"
  end
end
