import MainLayout from "./MainLayout";
import GamesCarrousel from "./components/GamesCarrousel";
import ListMinimalGame from "./components/ListMinimalGame";
import { useState } from "react";

const App = () => {
	const [searchGame, setSearchGame] = useState("");

	const handlerSearchGame = event => {
		event.target.value != undefined
			? setSearchGame(event.target.value)
			: setSearchGame("");
	};
	return (
		<MainLayout handlerSearchGame={handlerSearchGame}>
			<GamesCarrousel searchGame={searchGame}></GamesCarrousel>
			<ListMinimalGame searchGame={searchGame}></ListMinimalGame>
		</MainLayout>
	);
};

export default App;
