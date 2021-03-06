import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Navegation = props => {
	return (
		<Navbar className="mb-2" bg="dark" variant="dark" expand="lg">
			<Container className="w-75 py-2">
				<Navbar.Brand onClick={props.handlerSearchGame}>
					<img
						src="rawg-logo.png"
						height="30"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>
				<form className="d-flex ms-3">
					<label className="d-none">Buscar:</label>
					<input
						className="rounded-3"
						type="search"
						name="buscar"
						onChange={props.handlerSearchGame}
						size={25}
					/>
				</form>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="ms-auto my-2 my-lg-0 fs-4"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<NavDropdown
							menuVariant="dark"
							title="Consolas"
							id="navbarScrollingDropdown"
						>
							<NavDropdown.Item className="fs-5" href="#action1">
								PC
							</NavDropdown.Item>
							<NavDropdown.Item className="fs-5" href="#action2">
								Playstation
							</NavDropdown.Item>
							<NavDropdown.Item className="fs-5" href="#action3">
								Xbox
							</NavDropdown.Item>
							<NavDropdown.Item className="fs-5" href="#action4">
								Nintendo
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navegation;
