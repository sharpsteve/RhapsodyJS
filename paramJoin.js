// Since we need to append the parameters of the request differently from the path
// https://howchoo.com/g/nwywodhkndm/how-to-turn-an-object-into-query-string-parameters-in-javascript
function paramJoin(path, params) {
	var queryString = Object.keys(params).map(function(key) {
		return key + '=' + params[key]
	}).join('&');
	return path + '?' + args
}
