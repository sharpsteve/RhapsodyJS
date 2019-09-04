function getJwt(client, tokenName, rhapVariableKey, rhapVariableSecret, relativeUrl) {
	/*
	Description: this checks to see whether a JSON web token exists for a REST client. If it doesn't,
	a POST call is made to authorize the client, and the token is saved as a transientState object that
	expires two minutes before the expires_in value. The token is then returned as part of the value
	used for the Authorization header.
	http://forums.orionhealth.com/forum/viewtopic.php?f=6&t=4212&p=16907&hilit=token#p16907
	@client: the JS REST client object
	@token: the transientState object key that holds the JSON web token
	@rhapVariableKey: the variable name for the client's key
	@rhapVariableSecret: the variable name for the client's secret
	*/
	if (!transientState.getState(tokenName)) {
		var auth = 'Basic ' + encodeBase64(getVariable(rhapVariableKey) + ':' + getVariable(rhapVariableSecret), 
			false),
			config = {
				'relative-url': relativeUrl,
				'content-type': 'application/x-www-form-urlencoded',
				'parameters': [{
					'parameter': 'grant_type',
					'value': 'client_credentials'
				}],
				'headers': [{
						'header': 'Authorization',
						'value': auth
					},
					{
						'header': 'cache-control',
						'value': 'no-cache'
					}
				]
			};
		var response = client.post(config, '');
		var body = JSON.parse(response.response),
			token = body.access_token,
			ttl = Number(body.expires_in) - 120,
			exp = Date.now() + (ttl * 1000);
		transientState.setState(tokenName, token, {
			expires: exp
		});
	}
	return 'Bearer ' + transientState.getState(tokenName);
}
