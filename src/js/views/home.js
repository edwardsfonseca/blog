import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Home = () => {
	const { store, actions } = useContext(Context);
	
	return (
		/* Personajes */
		<div className="row">
			{/* <hr style={{"background":"#5e5e7c" ,"width": "-webkit-fill-available","height":"3px"}}></hr> */}
			<h1 style={{ "display": "flex", "color": "rgb(188 191 40)", "padding": "20px" }}>Characters</h1>
			<div className="caja" >
			{store.personajes.map((e, i) => {
				
				return <div className="container" style={{ "width": "1000px" ,"height":"450px"}}>
					<img className="card-img-top" src={store.imagen[i]} alt="Card image cap" />
					<div className="card-body" key={i}>
						<h5 className="card-title">{e.name}</h5>
						<p>Nombre:&nbsp;{}</p>
						
						<Link to={"/people/" + e.uid}>
							<button type="button" className="btn btn-outline-dark">Learn More !</button>
						</Link>
							<button onClick={()=> actions.getAddTask(e.name)} type="button" className="btn btn-outline-warning m-2"> <i className="far fa-heart"></i></button>

					</div>
					{/* <hr style={{"background":"#5e5e7c" ,"width": "-webkit-fill-available","height":"3px"}}></hr> */}
				</div>
			})}
			</div>
			
			{/* Planetas  */}
			
			<div className="row">
			<hr style={{"background":"#5e5e7c" ,"width": "-webkit-fill-available","height":"3px"}}></hr>
				<h1 style={{ "display": "flex", "color": "rgb(188 191 40)", "padding": "20px" }}>Planets</h1>
				{store.planetas.map((e, i) => {
					
					return <div className="container" style={{ "width": "18rem" }}>
						<img className="card-img-top" src={store.imagenplaneta[i]} />
						<div className="card-body" key={i}>
							<h5 className="card-title">{e.name}</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

							<Link to={"/planeta/" + e.uid}>
								<button type="button" className="btn btn-outline-dark">Learn More !</button>
							</Link>
							<button onClick={()=> actions.getAddTask(e.name)} type="button" className="btn btn-outline-warning m-2"> <i className="far fa-heart"></i></button>

						</div>
						<hr style={{"background":"#5e5e7c" ,"width": "-webkit-fill-available","height":"3px"}}></hr>
					</div>
					
				})}

			</div>
		</div>

	)
};
