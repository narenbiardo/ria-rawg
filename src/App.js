import MainLayout from "./MainLayout";
import GamesCarrousel from "./components/GamesCarrousel";
import ListMinimalGame from "./components/ListMinimalGame";
import { useState } from "react";

const App = () => {
	const [mountGamesCarrousel, setMountGamesCarrousel] = useState(true);
	const [searchGame, setSearchGame] = useState("");
	const handleUnmountGamesCarrousel = () => {
		setMountGamesCarrousel(false);
	};
	const handlerSearchGame = event => {
		setSearchGame(event.target.value);
	};
	return (
		<MainLayout
			handleUnmountGamesCarrousel={handleUnmountGamesCarrousel}
			handlerSearchGame={handlerSearchGame}
		>
			<GamesCarrousel
				mountGamesCarrousel={mountGamesCarrousel}
			></GamesCarrousel>
			<ListMinimalGame
				mountGamesCarrousel={mountGamesCarrousel}
				searchGame={searchGame}
			></ListMinimalGame>
		</MainLayout>
	);
};

export default App;
