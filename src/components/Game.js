import Image from "react-bootstrap/Image";

import "./Game.css";

const Game = () => {
	return (
		<div className={"mt-2 bg-dark gameCard"}>
			<Image className="p-3" src="nosborn-que-galan.jpg"></Image>
			<div className="gameInfo">
				<p>Titulo</p>
				<p>Descripcion</p>
			</div>
			<div className="gameLogos">
				<Image src="logo_ps.png"></Image>
				<Image src="logo_ps.png"></Image>
				<Image src="logo_ps.png"></Image>
			</div>
			<Image className={"gamePegi"} src="PEGI_18.png"></Image>
		</div>
	);
};
export default Game;
