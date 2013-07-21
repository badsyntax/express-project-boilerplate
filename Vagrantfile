# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  # Enable symlinks for the synced folder
  config.vm.provider "virtualbox" do |v|
    v.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/vagrant-root", "1"]
  end

  config.vm.network :forwarded_port, host: 3333, guest: 3000
  config.vm.synced_folder "./", "/var/www", :extra => "dmode=777,fmode=644"

  config.vm.define :dev do |dev|
    dev.vm.provision :puppet do |puppet|
      puppet.manifests_path = "puppet"
      puppet.manifest_file  = "init.pp"
    end
    dev.vm.box = "precise64"
    dev.vm.box_url = "http://files.vagrantup.com/precise64.box"
    dev.vm.hostname = "express-project.local"
  end

  config.vm.define :box do |box|
    box.vm.box = "express-project-boilerplate"
    box.vm.box_url = "./express-project-boilerplate.box"
    box.vm.hostname = "express-project.local"
  end
end
