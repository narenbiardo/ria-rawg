import Image from "react-bootstrap/Image";

import "./Game.css";

const Game = props => {
	return (
		<div className={"mt-2 me-5 bg-dark gameCard rounded"}>
			<Image className="gameImage p-3" src={props.image}></Image>
			<div className="gameInfo">
				<p>{props.title}</p>
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
