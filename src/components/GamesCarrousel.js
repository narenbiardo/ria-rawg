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
	//const [turnNum, setTurnNum] = useState(0);
	const [gameTitle, setGameTitle] = useState("");
	const [gameImage, setGameImage] = useState("");

	useEffect(() => {
		const data = Promise.resolve(
			getNewPopularGames().then(promise => {
				setGameTitle(promise.results[0].name);
				setGameImage(promise.results[0].background_image);
			})
		);
	});

	return (
		<Slider {...settings} className="mt-5 mb-5 w-75 h-100 mx-auto sm">
			<Game
				classes={"mt-2 bg-dark text-white"}
				title={gameTitle}
				image={gameImage}
			></Game>
			<Game></Game>
			<Game classes={"mt-2 bg-dark text-white"}></Game>
			<Game></Game>
		</Slider>
	);
};
export default GamesCarrousel;
