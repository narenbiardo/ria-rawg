import axios from "axios";
import { getApiKey } from "../config";
import cors from "cors";

/*let axiosInstance = axios.create({
	headers: {
		"access-control-allow-origin": "*",
		"Access-Control-Allow-Headers": "Content-Type, Authorization",
		"Access-Control-Allow-Methods": "*",
	},
});*/
const API = "13ab39111a4a4b83a591432a768e48d5";

export const getNewPopularGames = () => {
	const apiUrl = getApiKey(`games`, `metacritic=80,100&ordering=-released`);
	return axios
		.get(
			`https://api.rawg.io/api/games?key=${API}&metacritic=80,100&ordering=-released`
		)
		.then(res => res.data);
};

export const getNewerGames = page => {
	const apiUrl = getApiKey(`games`, `metacritic=80,100&ordering=-released`);
	const pageParameter = "&page=" + page;
	return axios
		.get(
			`https://api.rawg.io/api/games?key=${API}&ordering=-released` +
				pageParameter
		)
		.then(res => res.data);
};

export const getGamesByName = (page, name) => {
	const apiUrl = getApiKey(`games`, `metacritic=80,100&ordering=-released`);
	const pageParameter = "&page=" + page;
	return axios
		.get(
			`https://api.rawg.io/api/games?key=${API}&search=${name}` + pageParameter
		)
		.then(res => res.data);
};

export const getGame = gameKey => {
	const apiUrl = getApiKey(`games`, `metacritic=80,100&ordering=-released`);
	return axios
		.get(`https://api.rawg.io/api/games/${gameKey}?key=${API}`)
		.then(res => res.data);
};
