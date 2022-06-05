import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Navegation = () => {
	return (
		<Navbar className="mb-2" bg="dark" variant="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#">
					<img
						src="rawg-logo.png"
						height="30"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>
				<Form className="d-flex w-25">
					<FormControl
						type="search"
						placeholder="Buscar"
						className="me-3"
						aria-label="Search"
					/>
					<Button variant="outline-success">Buscar</Button>
				</Form>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="ms-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<NavDropdown
							menuVariant="dark"
							title="Consolas"
							id="navbarScrollingDropdown"
						>
							<NavDropdown.Item href="#action1">PC</NavDropdown.Item>
							<NavDropdown.Item href="#action2">Playstation</NavDropdown.Item>
							<NavDropdown.Item href="#action3">Xbox</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Nintendo</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navegation;
