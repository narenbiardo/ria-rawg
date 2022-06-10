import MinimalGame from "./MinimalGame";
import Game from "./Game";

import {
	getGame,
	getNewerGames,
	getGamesByName,
	getGameScreenshots,
} from "../services/games";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

const ListMinimalGame = props => {
	const [newerGamesData, setNewerGamesData] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [searchingNewGame, setSearchingNewGame] = useState("");
	const [mountListMinimalGame, setMountListMinimalGame] = useState(true);
	const [gameKey, setGameKey] = useState(0);
	const [game, setGame] = useState([]);
	const [gameScreenshots, setGameScreenshots] = useState([]);

	const pageHandler = event => {
		setPage(parseInt(event.target.value));
	};

	useEffect(() => {
		const searchGame =
			props.searchGame != searchingNewGame
				? (setPage(1), setSearchingNewGame(props.searchGame))
				: "";

		const data =
			props.searchGame == ""
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
		setGameKey(event.target.value);
	};

	useEffect(() => {
		const data = Promise.resolve(
			getGame(gameKey).then(promise => {
				setGame(promise);
				setMountListMinimalGame(false);
			})
		);

		const data2 = Promise.resolve(
			getGameScreenshots(gameKey).then(promise => {
				setGameScreenshots(promise.results);
			})
		);
	}, [gameKey]);

	const gameListBack = () => {
		setMountListMinimalGame(true);
	};

	return mountListMinimalGame === true ? (
		<div className="px-5">
			<Row>
				{newerGamesData.map(gameData => (
					<Col className="my-1" xs={12} md={6}>
						<MinimalGame
							key={gameData.id + Math.random()}
							id={gameData.id}
							handlerGameKey={handlerGameKey}
							classes={"mt-2 bg-dark text-white"}
							title={gameData.name}
							genres={gameData.genres}
							platforms={gameData.parent_platforms}
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
		<Container className="my-5 w-75 mx-auto">
			<Game
				key={game.id + Math.random()}
				classes={"mt-2 bg-dark text-white"}
				title={game.name}
				image={game.background_image}
				short_screenshots={
					gameScreenshots != [] ? gameScreenshots.slice(0, 4) : ""
				}
				genres={game.genres}
				esrb={
					game.esrb_rating == null
						? "./esrb/rating-pending.webp"
						: "./esrb/" + game.esrb_rating.slug + ".webp"
				}
				platforms={game.parent_platforms}
			></Game>
			<Col className=" mt-4 text-center">
				<button
					className="btn btn-light btn-outline-dark btn-lg mx-1 border-0"
					onClick={gameListBack}
				>
					Volver
				</button>
			</Col>
		</Container>
	);
};
export default ListMinimalGame;
