import { Col, Image, Row } from "react-bootstrap";
import { useEffect, useLayoutEffect, useState } from "react";

import "./MinimalGame.css";

const MinimalGame = props => {
	return (
		<div
			className={"px-3 mt-2 bg-dark gameCard container-fluid"}
			onClick={props.handlerGameKey}
		>
			<input className="d-none" value={props.id}></input>
			<div className="p-3">
				<Row>
					<p className="text-white fs-4 text-md-start">{props.title}</p>
				</Row>
				<Row>
					<div className="hstack justify-content-end gap-2">
						{props.platforms.map(pl => (
							<Image
								key={pl.platform.slug}
								className=""
								src={"./platforms/" + pl.platform.slug + ".webp"}
								height={25}
							></Image>
						))}
					</div>
				</Row>
			</div>
		</div>
	);
};
export default MinimalGame;
