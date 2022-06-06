const API_KEY = process.env.REACT_APP_API_KEY;

export const getApiKey = (path, query) =>
	`https://thingproxy.freeboard.io/fetch/https://api.rawg.io/api/${path}?key=${API_KEY}&${query}`;
