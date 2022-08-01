import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// blog detallado de planetas
export const Planeta = () => {
    const { id } = useParams();
    const { actions, store } = useContext(Context);
     //usamos useEffect para efectos secundarios o ejecutar apis
    useEffect(() => {

        actions.getPlaneta(id)
        console.log(store.planeta)
    }, []);

    return <>
        <div className="row ">
            <h1 >{store.planeta.description}</h1>
            <div className="container" style={{ "display": "flex", "justify-content": "space-around", "margin": "23px", "color": "white" }}>
                <img className="card-img-top" alt="Card image cap" style={{ "width": "18rem" }} src={store.imagenplaneta[id - 1]} />
                <div className="yu">{store.textoplaneta[id - 1]}</div></div>

        
            <div className="col">Nombre:&nbsp;{store.planeta.properties?.name}</div>

            <div className="col">Diametro:&nbsp;{store.planeta.properties?.diameter}</div>

            <div className="col ">Periodo de Rotacion:&nbsp;{store.planeta.properties?.rotation_period}</div>

            <div className="col ">Periodo Orbital:&nbsp;{store.planeta.properties?.orbital_period}</div>

            <div className="col ">Gravedad:&nbsp;{store.planeta.properties?.gravity}</div>

            <div className="col ">Población:&nbsp;{store.planeta.properties?.population}</div>

            <div className="col ">Terreno:&nbsp;{store.planeta.properties?.terrain}</div>

            <div className="col ">Clima:&nbsp;{store.planeta.properties?.climate}</div>

            <div className="col ">Agua Superficial:&nbsp;{store.planeta.properties?.surface_water}</div>

            <div className="col ">Creado:&nbsp;{store.planeta.properties?.created}</div>
        </div>
    </>
}