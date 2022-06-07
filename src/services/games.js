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

export const getNewPopularGames = () => {
	const apiUrl = getApiKey(`games`, `metacritic=80,100&ordering=-released`);
	return axios
		.get(
			"https://thingproxy.freeboard.io/fetch/https://api.rawg.io/api/games?key=4e3dd2feb5424a7abc92ce81ba1e1bd9&metacritic=80,100&ordering=-released"
		)
		.then(res => res.data);
};
