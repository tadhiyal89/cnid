const baseURL = process.env.REACT_APP_HOST_URL || "";
const config = {
	getNewsData: {
		url: `${baseURL}/getNews`,
	},
};

export default config;
