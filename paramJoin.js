// Since we need to append the parameters of the request differently from the path
function paramJoin(path, params) {
	// Node code won't work
    //var args = querystring.stringify(params);
	// ES6 Not working
	//var args = Object.keys(params).map(key => key + '=' + params[key]).join('&');
	// ES5 code
	var queryString = Object.keys(params).map(function(key) {
		return key + '=' + params[key]
	}).join('&');
    return path + '?' + args
}
