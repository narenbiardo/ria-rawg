import MinimalGame from "./MinimalGame";
import Game from "./Game";

import { getGame, getNewerGames, getGamesByName } from "../services/games";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

const ListMinimalGame = props => {
	const [newerGamesData, setNewerGamesData] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [mountListMinimalGame, setMountListMinimalGame] = useState(true);
	const [gameKey, setGameKey] = useState(0);
	const [game, setGame] = useState([]);

	const pageHandler = event => {
		setPage(parseInt(event.target.value));
	};

	useEffect(() => {
		const data =
			props.mountGamesCarrousel === true
				? Promise.resolve(
						getNewerGames(page).then(promise => {
							setNewerGamesData(promise.results);
							setLastPage(parseInt(promise.count / 20));
						})
				  )
				: Promise.resolve(
						getGamesByName(page, props.searchGame).then(promise => {
							setNewerGamesData(promise.results);
							setLastPage(parseInt(promise.count / 20));
						})
				  );
	}, [page, props.searchGame]);

	const handlerGameKey = event => {
		/* setGameKey(event.target.querySelector("input").value); */
	};

	const showGame = () => {
		/*setMountListMinimalGame(false);*/
	};

	/*
	useEffect(() => {
		const data = Promise.resolve(
			getGame(gameKey).then(promise => {
				setGame(promise.results);
				setLastPage(parseInt(promise.count / 20));
				showGame();
				console.log(gameKey);
			})
		);
	}, [gameKey]);*/

	return mountListMinimalGame === true ? (
		<div className="px-5">
			<Row>
				{newerGamesData.map(gameData => (
					<Col className="my-1" xs={12} md={6}>
						<MinimalGame
							key={gameData.id}
							id={gameData.id}
							handlerGameKey={handlerGameKey}
							classes={"mt-2 bg-dark text-white"}
							title={gameData.name}
							genres={gameData.genres}
							platforms={gameData.parent_platforms}
							showGame={showGame}
						></MinimalGame>
					</Col>
				))}
			</Row>
			<div className="pagination d-flex justify-content-center my-3">
				<button
					className="btn btn-light btn-outline-dark btn-lg mx-1 border-0"
					value={1}
					onClick={pageHandler}
				>
					«
				</button>
				<button
					className="btn btn-light btn-outline-dark btn-lg mx-1 border-0"
					value={page - 1 <= 5 ? 1 : page - 1}
					onClick={pageHandler}
				>
					←
				</button>
				<button
					className={
						page - 3 < 1
							? "d-none"
							: "btn btn-light btn-outline-dark btn-lg mx-1 border-0"
					}
					value={page - 3}
					type={"button"}
					onClick={pageHandler}
				>
					{page - 3}
				</button>
				<button
					className={
						page - 2 < 1
							? "d-none"
							: "btn btn-light btn-outline-dark btn-lg mx-1 border-0"
					}
					value={page - 2}
					onClick={pageHandler}
				>
					{page - 2}
				</button>
				<button
					className={
						page - 1 < 1
							? "d-none"
							: "btn btn-light btn-outline-dark btn-lg mx-1 border-0"
					}
					value={page - 1}
					onClick={pageHandler}
				>
					{page - 1}
				</button>
				<button
					value={page}
					className={"btn btn-light btn-outline-dark btn-lg mx-1 border-0"}
					onClick={pageHandler}
					type={"button"}
				>
					{page}
				</button>
				<button
					className={
						page + 1 > lastPage
							? "d-none"
							: "btn btn-light btn-outline-dark btn-lg mx-1 border-0"
					}
					value={page + 1}
					onClick={pageHandler}
				>
					{page + 1}
				</button>
				<button
					className={
						page + 2 > lastPage
							? "d-none"
							: "btn btn-light btn-outline-dark btn-lg mx-1 border-0"
					}
					value={page + 2}
					onClick={pageHandler}
				>
					{page + 2}
				</button>
				<button
					className={
						page + 3 > lastPage
							? "d-none"
							: "btn btn-light btn-outline-dark btn-lg mx-1 border-0"
					}
					value={page + 3}
					onClick={pageHandler}
				>
					{page + 3}
				</button>
				<button
					className={
						page + 7 > lastPage
							? "d-none"
							: "btn btn-light btn-outline-dark btn-lg mx-1 border-0"
					}
					value={page + 4}
					onClick={pageHandler}
				>
					{page + 4}
				</button>
				<button
					className={
						page + 8 > lastPage
							? "d-none"
							: "btn btn-light btn-outline-dark btn-lg mx-1 border-0"
					}
					value={page + 5}
					onClick={pageHandler}
				>
					{page + 5}
				</button>
				<button
					className={
						page + 9 > lastPage
							? "d-none"
							: "btn btn-light btn-outline-dark btn-lg mx-1 border-0"
					}
					value={page + 6}
					onClick={pageHandler}
				>
					{page + 6}
				</button>
				<button
					className="btn btn-light btn-outline-dark btn-lg mx-1 border-0"
					value={page + 1 >= lastPage ? lastPage : page + 1}
					onClick={pageHandler}
				>
					→
				</button>
				<button
					className="btn btn-light btn-outline-dark btn-lg mx-1 border-0"
					value={lastPage}
					onClick={pageHandler}
				>
					»
				</button>
			</div>
		</div>
	) : (
		""
		/*<Game
			key={game.id}
			classes={"mt-2 bg-dark text-white"}
			title={game.name}
			image={game.background_image}
			short_screenshots={game.short_screenshots.slice(1, 5)}
			genres={game.genres}
			esrb={
				game.esrb_rating == null
					? "./esrb/rating-pending.webp"
					: "./esrb/" + game.esrb_rating.slug + ".webp"
			}
			platforms={game.parent_platforms}
		></Game>*/
	);
};
export default ListMinimalGame;
