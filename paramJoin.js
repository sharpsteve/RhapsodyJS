// Since we need to append the parameters of the request differently from the path
function paramJoin(path, params) {
	var queryString = Object.keys(params).map(function(key) {
		return key + '=' + params[key]
	}).join('&');
    return path + '?' + args
}
