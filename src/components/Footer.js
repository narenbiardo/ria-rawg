import React from "react";

const Footer = () => {
	return (
		<div>
			<footer className="text-white py-4 bg-dark">
				<div className="contenedor">
					<nav className="row align-items-center justify-content-center">
						<ul className="col-12 col-md-3 list-unstyled text-center">
							<li className="font-weight-bold mb-2">RAWG</li>
							<li className="font-weight-bold mb-2">RIA 2022</li>
						</ul>
						<ul className="col-12 col-md-3 list-unstyled text-center">
							<li className="font-weight-bold mb-2">
								<h4>Integrantes:</h4>
							</li>
							<li className="font-weight-bold mb-2">Naren Biardo</li>
							<li className="font-weight-bold mb-2">Gonzalo Canepa</li>
							<li className="font-weight-bold mb-2">Leonardo Arbelo</li>
						</ul>
						<ul className="col-12 col-md-3 list-unstyled text-center">
							<a href="https://www.youtube.com/results?search_query=rawg+api+tutorial">
								Youtube
							</a>
							<br></br>
							<a href="https://github.com/narenbiardo/ria-rawg">
								See the code!
							</a>
							<br></br>
							<a href="https://codeburst.io/make-a-video-game-search-app-with-rawg-api-react-router-fetch-and-hooks-6b76e2bf83a2">
								RAWG Documentation
							</a>
						</ul>
					</nav>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
