import React,{useContext}from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "../component/card";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const Home = () => {
	const{store,actions}=useContext(Context);
	
	return(
	<div className="row">
		{store.personajes.map((e,i)=>{
			console.log(e)
			return<div className="container" style={{"width": "18rem"}}>
			<img className="card-img-top" src="..." alt="Card image cap"/>
			<div className="card-body" key={i}>
			  <h5 className="card-title">{e.name}</h5>
			  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			  
			  <Link to={"/people/"+ e.uid}>
			  <a  className="btn btn-primary">Go somewhere</a>
			  </Link>
			  
			</div>
		  </div>
		})}
		<h1 style={{"display": "flex", "color": "#dc3545","padding": "20px"}}>Characters</h1>
		<div className="row">
		{store.planetas.map((e,i)=>{
			console.log(e)
			return<div className="card-body" style={{"width": "18rem"}}>
			<img className="card-img-top" src="..." alt="Card image cap"/>
			<div className="card-body" key={i}>
			  <h5 className="card-title">{e.name}</h5>
			  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			  
			  <Link to={"/planeta/"+ e.uid}>
			  <a  className="btn btn-primary">Go somewhere</a>
			  </Link>
			  
			</div>
		  </div>
		})}

		</div>
	</div>
	
)};
