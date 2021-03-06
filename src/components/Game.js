import Image from "react-bootstrap/Image";
import { Row, Col, Modal } from "react-bootstrap";
import { useState } from "react";

import "./Game.css";

const Game = props => {
	const [show, setShow] = useState(false);
	const [image, setImage] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const imageHandler = p => {
		setImage(p.target.src);
		handleShow();
	};

	return (
		<div className={"mt-2 bg-dark gameCard container-fluid"}>
			<Row className="p-3 p-md-4 p-lg-5">
				<Col className="imgCol" lg={8} md={6} sm={12}>
					<Image className="gameImage" src={props.image}></Image>
					<Image className="gamePegi" src={props.esrb} fluid></Image>
				</Col>
				<Col
					className="d-flex flex-column justify-content-between"
					lg={4}
					md={6}
					sm={12}
				>
					<div className="gameInfo">
						<p className="text-white fs-3 mt-4 mt-md-0 text-center text-md-start">
							{props.title}
						</p>
					</div>
					<div className="gameShortScreenshots d-none d-sm-block">
						<Row>
							{props.short_screenshots != null
								? props.short_screenshots.map(screenshot => (
										<Col className="my-2" sm={6}>
											<Image
												key={screenshot.image}
												className={"gameShortScreenshot"}
												src={screenshot.image}
												onClick={imageHandler}
												fluid
											></Image>
										</Col>
								  ))
								: ""}
						</Row>
					</div>
					<div className="gamePlatforms hstack justify-content-center justify-content-md-end gap-2 mt-4 mt-md-0">
						{props.platforms != null
							? props.platforms.map(pl => (
									<Image
										key={pl.platform.slug}
										className=""
										src={"./platforms/" + pl.platform.slug + ".webp"}
										height={30}
									></Image>
							  ))
							: ""}
					</div>
				</Col>
			</Row>
			<Modal
				key={image}
				show={show}
				onClick={handleClose}
				onHide={handleClose}
				centered
			>
				<Image
					className="gameModaleImage"
					src={image}
					onClick={imageHandler}
				></Image>
			</Modal>
		</div>
	);
};
export default Game;
