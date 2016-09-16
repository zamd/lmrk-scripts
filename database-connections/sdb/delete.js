function remove (id, callback) {
  
  // USE idp-tenant management API token with delete:users
  var ManagementClient = require('auth0@2.0.0').ManagementClient;
  var management = new ManagementClient({
    token: configuration.token,
    domain: configuration.domain
  });
  
  management.deleteUser({id:id}, function(err) {  
  callback(err);                                   
});
  
}
