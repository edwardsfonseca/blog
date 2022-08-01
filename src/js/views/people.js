import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/people.css";

// blog detallado de personajes
export const People = () => {
    
    const { id } = useParams();
    const { actions, store } = useContext(Context);
    //usamos useEffect para efectos secundarios o ejecutar apis
    useEffect(() => {

        actions.getPersonaje(id)
        console.log(store.personaje)
    }, []);

    return <><div className="row ">
        <h1 >{store.personaje.properties?.name}</h1>
        <div className="container" style={{"display": "flex","justify-content": "space-around","margin":"23px","color": "white" }}>
        <img className="card-img-top" alt="Card image cap"style={{ "width": "18rem" }} src={store.imagen[id -1]} />
        <div className="yu">{store.textopersonaje[id - 1]}</div></div>
        
        <div className="col">Altura:&nbsp;{store.personaje.properties?.height}</div>
      
        <div className="col ">Masa:&nbsp;{store.personaje.properties?.mass}</div>
        
        <div className="col ">Color de Ojos:&nbsp;{store.personaje.properties?.eye_color}</div>
        
        <div className="col ">Año de Nacimiento:&nbsp;{store.personaje.properties?.birth_year}</div>
       
        <div className="col ">Genero:&nbsp;{store.personaje.properties?.gender}</div>
       
        <div className="col ">Color de cabello:&nbsp;{store.personaje.properties?.hair_color}</div>
       
        <div className="col ">Color de piel:&nbsp;{store.personaje.properties?.skin_color}</div>
       
        <div className="col ">Creado: &nbsp;{store.personaje.properties?.created}</div>
        
        <div className="col ">Mundo Natal :&nbsp;{store.personaje.properties?.homeworld}</div> 
        
        </div>
    </>
}