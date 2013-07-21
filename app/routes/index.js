module.exports = [{
    uri: '/admin/:controller?/:action?/:id?',
    controller: 'home',
    directory: 'admin'
  }, {
    uri: '/post/:uri',
    controller: 'post'
  }, {
    uri: '/:controller?/:action?/:id?',
    defaults: {
      controller: 'home',
      action: 'index'
    }
  }
];
