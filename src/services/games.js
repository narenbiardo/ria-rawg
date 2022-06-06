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
			"https://thingproxy.freeboard.io/fetch/https://api.rawg.io/api/games?key=6f1ef9aae1e142ee9eb1f59b6f7b5484&metacritic=80,100&ordering=-released"
		)
		.then(res => res.data);
};
