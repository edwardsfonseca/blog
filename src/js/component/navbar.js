import React, { useContext } from "react";
import { Link } from "react-router-dom";
import  Planeta  from "../views/planeta";
import  People from "../views/people";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const {store,actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 p-4" >
			<Link to="/">
				<img className="imagen" src="https://www.coolest-free-printables.com/files/2013/01/star-wars-logo-light.jpg" />

			</Link>
			<div className="ml-auto">
				
					<div class="dropdown">
						<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown link
						</a>

						<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
							{store.favorites.map((e,i)=>{
								return(
									<div key={i} className="dropdown-item">
										<div className="row">
											<div className="col">{e.name}</div>
											<div className="col"><a className="badge badge-danger " onClick={()=> actions.getBorrar(i)}><i className="far fa-trash-alt"></i></a></div>
												
												

										</div>
									
									
									
									</div>
								);
							
							})}
						</div>
						
					</div>
					


				
			</div>
		</nav>
	);
};
