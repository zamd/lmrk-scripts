function create (user, callback) {
  
  delete user.tenant;
  delete user.client_id;
  delete user.connection; 
  
  user.connection = configuration.connection;
  
  var AuthenticationClient = require('auth0@2.0.0').AuthenticationClient;
  var auth0 = new AuthenticationClient({
    domain: configuration.domain,
    clientId: configuration.clientID
  });
  
  auth0.database.signUp(user, function(err,userData){
    if (err)
      return callback(new Error(err));
   
    callback(null);
  });
}
