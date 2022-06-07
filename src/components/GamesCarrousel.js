import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Slider from "react-slick";
import Game from "./Game";
import { getNewPopularGames } from "../services/games";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GamesCarrousel.css";
import { useEffect, useState } from "react";

const GamesCarrousel = props => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const [gamesData, setGamesData] = useState([]);

	useEffect(() => {
		const data = Promise.resolve(
			getNewPopularGames().then(promise => {
				setGamesData(promise.results);
			})
		);
	});

	return (
		<Slider {...settings} className="my-5 w-75 mx-auto gamesSlider">
			{gamesData.map(gameData => (
				<Game
					key={gameData.name}
					classes={"mt-2 bg-dark text-white"}
					title={gameData.name}
					image={gameData.background_image}
					short_screenshots={gameData.short_screenshots.slice(1, 5)}
					genres={gameData.genres}
					esrb={
						gameData.esrb_rating == null
							? "./esrb/rating-pending.webp"
							: "./esrb/" + gameData.esrb_rating.slug + ".webp"
					}
					platforms={gameData.parent_platforms}
				></Game>
			))}
		</Slider>
	);
};
export default GamesCarrousel;
