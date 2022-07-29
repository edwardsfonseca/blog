import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 p-4" >
			<Link to="/">
				<img  className="imagen"src= "https://www.coolest-free-printables.com/files/2013/01/star-wars-logo-light.jpg" />
			
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
