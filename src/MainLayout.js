import Navegation from "./components/Navegation";
import Footer from "./components/Footer";

import "./MainLayout.css";

const MainLayout = props => {
	return (
		<div>
			<Navegation></Navegation>
			{props.children}
			<Footer></Footer>
		</div>
	);
};
export default MainLayout;
