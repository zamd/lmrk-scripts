function changePassword (email, newPassword, callback) {
  
  // USE idp-tenant management API token with read:users update:users scopes.
  var ManagementClient = require('auth0@2.0.0').ManagementClient;
  var management = new ManagementClient({
    token: configuration.token,
    domain: configuration.domain
  });
  
  // 1. Find user_id from email...
  var query = {
    q:'email:"' + email + '"',
    fields:'user_id'
  };
  management.getUsers(query,function(err,arr) {
    if (err)
      return callback(new Error(err));
    var userId = arr.shift().user_id; 

 // 2. Update user's email verified flag
  var usr  = management.updateUser({ id: userId },{ password:newPassword },
                                   function(err,usr) {
                                       callback(err,true);
                                   });
  });
}
