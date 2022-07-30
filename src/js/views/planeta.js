import React ,{useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

 
export const Planeta = () =>{
    const {id} = useParams () ;
    const {actions,store}=useContext(Context);
    useEffect(()=>{

        actions.getPlaneta(id)
        console.log(store.planeta)
    },[]);
    
    return <>
    <h1>{store.planeta.description}</h1>
    <h2>Nombre:&nbsp;{store.planeta.properties?.name}</h2>
    <p>Diametro:&nbsp;{store.planeta.properties?.diameter}</p>
   <p>Periodo de Rotacion:&nbsp;{store.planeta.properties?.rotation_period}</p>
   <p>Periodo Orbital:&nbsp;{store.planeta.properties?.orbital_period}</p>
   <p>Gravedad:&nbsp;{store.planeta.properties?.gravity}</p>
   <p>Población:&nbsp;{store.planeta.properties?.population}</p>
   <p>Clima:&nbsp;{store.planeta.properties?.climate}</p>
   <p>Terreno:&nbsp;{store.planeta.properties?.terrain}</p>
   <p>Agua Superficial:&nbsp;{store.planeta.properties?.surface_water}</p>
   <p>Creado:&nbsp;{store.planeta.properties?.created}</p>
   <p>Editado:&nbsp;{store.planeta.properties?.edited}</p>
   <p>URL:&nbsp;{store.planeta.properties?.url}</p>


    </>
 }