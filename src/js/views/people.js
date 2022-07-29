import React ,{useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const datos={edad:13 ,genero:"masculino",estatura:180}; 
export const People = () =>{
    const {id} = useParams () ;
    const {edad,genero,estatura} = datos
    const {actions,store}=useContext(Context);
    useEffect(()=>{

        actions.getPersonaje(id)
        console.log(store.personaje)
    },[]);
    
    return <>
    <h1>{store.personaje.description}</h1>

    <p>Nombre:&nbsp;{store.personaje.properties?.name}</p>
    <p>Altura:&nbsp;{store.personaje.properties?.height}</p>
    <p>Masa:&nbsp;{store.personaje.properties?.mass}</p>
    <p>Color de cabello:&nbsp;{store.personaje.properties?.hair_color}</p>
    <p>Color de piel:&nbsp;{store.personaje.properties?.skin_color}</p>
    <p>Color de Ojos:&nbsp;{store.personaje.properties?.eye_color}</p>
    <p>Año de Nacimiento:&nbsp;{store.personaje.properties?.birth_year}</p>
    <p>Genero:&nbsp;{store.personaje.properties?.gender}</p>
    <p>Creado: &nbsp;{store.personaje.properties?.created}</p>
    <p>Mundo Natal :&nbsp;{store.personaje.properties?.homeworld}</p>
    <p>URL:&nbsp;{store.personaje.properties?.url}</p>

          

    
    
    </>
 }