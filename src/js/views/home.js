import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "../component/card";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">
			<h1 style={{ "display": "flex", "color": "#dc3545", "padding": "20px" }}>Characters</h1>
			{store.personajes.map((e, i) => {
				console.log(e)
				return <div className="container" style={{ "width": "18rem" }}>
					<img className="card-img-top" src={store.imagen[i]} alt="Card image cap" />
					<div className="card-body" key={i}>
						<h5 className="card-title">{e.name}</h5>
						<p>Nombre:&nbsp;{e.description}</p>
						
						<Link to={"/people/" + e.uid}>
							<button type="button" class="btn btn-outline-primary">Learn More !</button>
						</Link>
							<button onClick={()=> actions.getAddTask(e.name)} type="button" class="btn btn-outline-warning m-2"> <i class="far fa-heart"></i></button>

					</div>
				</div>
			})}
			<div className="row">
				<h1 style={{ "display": "flex", "color": "#dc3545", "padding": "20px" }}>Planets</h1>
				{store.planetas.map((e, i) => {
					console.log(e)
					return <div className="card-body" style={{ "width": "18rem" }}>
						<img className="card-img-top" src={store.imagenplaneta[i]} />
						<div className="card-body" key={i}>
							<h5 className="card-title">{e.name}</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

							<Link to={"/planeta/" + e.uid}>
								<button type="button" class="btn btn-outline-primary">Learn More !</button>
								<button type="button" class="btn btn-outline-warning m-2"> <i class="far fa-heart"></i></button>
							</Link>

						</div>
					</div>
				})}

			</div>
		</div>

	)
};
