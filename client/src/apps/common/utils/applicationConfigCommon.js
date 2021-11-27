import apiConfig from "../../../apiServiceConfig";

/**
 *
 * @function getServiceApiConfig
 * @param {string} [apiName='']
 * @returns Object contains the URL and if the apiName is empty then it will return empty Objects
 */
const getServiceApiConfig = (apiName = "") => {
	if (apiName) {
		return apiConfig[apiName];
	}
	return {};
};

export default getServiceApiConfig;
