import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Planeta from "../views/planeta";
import People from "../views/people";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light mb-3 p-4" style={{ "background": "black" }}>

			<Link to="/">
				<img className="imagen" src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg" />

			</Link>
			<div className="ml-auto">
				<div class="dropdown">
					<a class="btn  dropdown-toggle" 
					role="button" 
					id="dropdownMenuLink" 
					data-bs-toggle="dropdown" 
					aria-expanded="false">Favorites&nbsp; {/* Nombre del dropdown  */}
					<strong className="contador">{store.favorites.length}</strong> {/* se agrega el contador de favoritos */}
					</a>
					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink" >
					{/* Se crea un map para buscar todo lo que contiene el arreglo favorite con 2 parametros e : evento y i : identificador */}
					{store.favorites.map((e, i) => {
							return (
								<div key={i} className="dropdown-item" >
									<div className="row">
										<div className="col">{e.name}</div>
										<div className="col">
											<a className="badge badge-danger " 
											onClick={() => actions.getBorrar(i)}> {/* llamamos a la funcion borrar con el  identificador */}
											<i className="far fa-trash-alt"></i></a></div>
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
