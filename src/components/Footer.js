import React from "react";
import {
	Container,
	Row,
	Col,
	Image,
	OverlayTrigger,
	Tooltip,
} from "react-bootstrap";

const Footer = () => {
	return (
		<footer className="py-4 text-white bg-dark">
			<Container>
				<Row>
					<Col className="text-center">
						<OverlayTrigger overlay={<Tooltip>See the code!</Tooltip>}>
							<a href="https://github.com/narenbiardo/ria-rawg">
								<Image src={"./github_logo.png"} width={50}></Image>
							</a>
						</OverlayTrigger>
					</Col>
				</Row>
				<Row>
					<Col className="text-center">
						<a href="https://api.rawg.io/docs/">RAWG API Documentation</a>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
