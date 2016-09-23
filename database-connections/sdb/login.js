function login (email, password, callback) {
//auto-push
  var data = {
    username: email,
    password: password,
    connection: configuration.connection
  };
  var AuthenticationClient = require('auth0@2.0.0').AuthenticationClient;
  var auth0 = new AuthenticationClient({
    domain: configuration.domain,
    clientId: configuration.clientID
  });
  
  auth0.database.signIn(data, function(err,res){
    if (err)
      return callback(new Error(err));
    auth0.getProfile(res.access_token, function(err, profile){
      return callback(err, profile);
    });
  });
}
