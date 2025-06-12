import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Favorites } from "./Favorites";

export const Navbar = () => {
	const {store,dispatch} = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-transparent">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 align-items-center" style={{ color: "#ffff03", fontSize: "2.2em" }}>STAR WARS</span>
				</Link>
				<Favorites/>
			</div>
		</nav>
	);
};