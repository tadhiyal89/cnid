/**
 *
 * @function buildUrl
 * @param {*} url
 * @param {*} parameters
 * @returns updated URL with the added build params
 */
const buildUrl = (url, parameters) => {
	var qs = "";
	for (var key in parameters) {
		var value = parameters[key];
		qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
	}
	if (qs.length > 0) {
		qs = qs.substring(0, qs.length - 1); //chop off last "&"
		url = url + "?" + qs;
	}
	return url;
};

/**
 *
 * @function formatDate
 * @param {*} url
 * @param {*} parameters
 * @returns this function will format the date to the desired format
 */
const formatDate = (x, y) => {
	var z = {
		M: x.getMonth() + 1,
		d: x.getDate(),
		h: x.getHours(),
		m: x.getMinutes(),
		s: x.getSeconds(),
	};
	y = y.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
		return ((v.length > 1 ? "0" : "") + z[v.slice(-1)]).slice(-2);
	});

	return y.replace(/(y+)/g, function (v) {
		return x.getFullYear().toString().slice(-v.length);
	});
};
export { buildUrl, formatDate };
