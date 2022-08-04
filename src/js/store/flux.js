const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [], // arreglo para agregar o seleccionar blog favoritos
			personaje: [], // arreglo para ver los detalles de los personajes
			personajes: [], // arreglo para ver los personajes
			planetas: [], // arreglo para ver los planetas
			planeta: [], // arreglo para ver los detalles del planeta
			personajesF:[],


			// imagenes de los personajes
			imagen:["https://starwars-visualguide.com/assets/img/characters/1.jpg" ,
			"https://starwars-visualguide.com/assets/img/characters/2.jpg",
			"https://starwars-visualguide.com/assets/img/characters/3.jpg",
			"https://starwars-visualguide.com/assets/img/characters/4.jpg",
			"https://starwars-visualguide.com/assets/img/characters/5.jpg",
			"https://starwars-visualguide.com/assets/img/characters/6.jpg",
			"https://starwars-visualguide.com/assets/img/characters/7.jpg",
			"https://starwars-visualguide.com/assets/img/characters/8.jpg",
			"https://starwars-visualguide.com/assets/img/characters/9.jpg",
			"https://starwars-visualguide.com/assets/img/characters/10.jpg"
		],
		// imagenes de los planetas
		imagenplaneta:[
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJD0dmCr18Qrz2NrhXqknPDmDsOYgSPcVJaA&usqp=CAU",
			"https://starwars-visualguide.com/assets/img/planets/2.jpg",
			"https://starwars-visualguide.com/assets/img/planets/3.jpg",
			"https://starwars-visualguide.com/assets/img/planets/4.jpg",
			"https://starwars-visualguide.com/assets/img/planets/5.jpg",
			"https://starwars-visualguide.com/assets/img/planets/6.jpg",
			"https://starwars-visualguide.com/assets/img/planets/7.jpg",
			"https://starwars-visualguide.com/assets/img/planets/8.jpg",
			"https://starwars-visualguide.com/assets/img/planets/9.jpg",
			"https://starwars-visualguide.com/assets/img/planets/10.jpg"

		],
		// Texto de los personajes
		textopersonaje:[
			"Luke Skywalker fue un humano sensible a la Fuerza y un Maestro Jedi quien, junto a su hermana gemela, la Princesa Leia Organa, luchó en contra del gobierno del Imperio Galáctico durante la Guerra Civil Galáctica. Hijo del Caballero Jedi Anakin Skywalker y de la Senadora Padmé Amidala de Naboo, Luke nació poco después del final de la Guerras Clon el 19 ABY.",
			"C-3PO, a veces deletreado Cetrespeó y referido a menudo simplemente como Trespeó, era un droide de protocolo unidad 3PO diseñado para interactuar con seres orgánicos, programado principalmente para la etiqueta y el protocolo. Hablaba con fluidez más de siete millones de formas de comunicación, y desarrolló una personalidad exigente y propensa a las preocupaciones a lo largo de sus muchas décadas de operación.",
			"R2-D2, pronunciado Artoo-Deetoo/Erredós-Dedós y a menudo referido como R2 (Artoo/Erredós), fue un droide astromecánico serie R2 manufacturado por Industrias Automaton con programación masculina. Un ingenioso y valiente droide, R2-D2 sirvió a una multitud de maestros a lo largo de su vida. ",
			"También conocido por su nombre de nacimiento Anakin Skywalker, es un personaje de ficción en la franquicia de Star Wars. Vader aparece en la trilogía original como un antagonista cuyas acciones dirigen la trama, mientras que su pasado como Anakin Skywalker y la historia de su corrupción por Darth Sidious y su paso al Lado Oscuro son centrales en la narrativa de la trilogía de la precuela.",
			"Leia Skywalker Organa Solo fue una política humana sensible a la Fuerza y una líder militar que sirvió en la Alianza para Restaurar la República durante la Era Imperial y en la Resistencia en la subsiguiente Era de la Nueva República. Adoptada en la Casa de Organa, la familia real alderaaniana, ella fue la Princesa Leia Organa de Alderaan, un planeta de los Mundos del Núcleo conocido por su dedicación al pacifismo. La princesa fue criada como la hija del Senador Bail Prestor Organa y su mujer, la Reina Breha Organa, lo que la convertía en la heredera de la monarquía alderaaniana. Inculcada con los valores de su mundo adoptivo, Organa dedicó su vida a la restauración de la democracia oponiéndose a regímenes autoritarios como el Imperio Galáctico y la Primera Orden.Nacida en el 19 ABY como Leia Amidala Skywalker, era la hija del Caballero Jedi Anakin Skywalker y la Senadora Padmé Amidala de Naboo. Su nacimiento tuvo lugar en el ocaso de las Guerras Clon, que vio a la Orden Jedi destruida y a la República Galáctica transformada en el Imperio Galáctico",
			"Owen Lars era un granjero de humedad humano del planeta desertico Tatooine. Era el hijo de Aika y Cliegg Lars, y se convirtió en el hermanastro del Caballero Jedi Anakin Skywalker cuando Cliegg se volvió a casar con la madre de Anakin, Shmi Skywalker, una antigua esclava.",
			"Beru Whitesun Lars, nacida Beru Whitesun, fue una mujer humana del planeta Tatooine. Estaba casada con Owen Lars, el hermanastro del Caballero Jedi Anakin Skywalker, cuyo hijo, Luke Skywalker, criaron durante el reinado del Imperio Galáctico. Lars fue asesinada junto con su esposo por soldados de asalto Imperiales, quienes también incendiaron la granja de humedad de los Lars. Con sus muertes, Skywalker dejó su mundo natal y se unió a la Alianza para Restaurar la República.",
			"R5-D4 pertenecía a los Jawas de Tatooine que capturaron a R2-D2 y C-3PO cuando estos se perdieron en el desierto tras escapar de la Tantive IV con los planes de la Estrella de la Muerte, y así comerciar con ellos.",
			"Biggs Darklighter era un piloto masculino que luchó por la Alianza para Restaurar la República durante los primeros días de la Guerra Civil Galáctica. Creció en el planeta desértico Tatooine, donde se convirtió en un amigo íntimo de Luke Skywalker. Los dos se convirtieron en pilotos y soñaron con abandonar Tatooine. Darklighter dejó su planeta natal para ir a la Academia Imperial, pero desertó del Imperio Galáctico después de graduarse para unirse a la Alianza Rebelde. Regresó a Tatooine por última vez para contarle a Skywalker sus planes.",
			"Kenobi es un maestro jedi de la antigua República Galáctica, y maestro de Anakin y Luke Skywalker. Obi-Wan es una figura clave en las Guerras Clon, donde fue conocido como El Negociador; en la práctica extinción de los Jedi, en la caída de la República Galáctica y en la lucha de la Alianza Rebelde contra el posterior Imperio Galáctico.4​Obi-Wan Kenobi es considerado como uno de los mejores, más populares y carismáticos de los personajes del universo Star Wars."
		],
		//texto de los planetas
		textoplaneta:[
			"Su nombre proviene de la región tunecina Tataouine, donde se rodaron algunas escenas de la saga cinematográfica. Es el hogar de Luke Skywalker y el lugar de nacimiento de Anakin Skywalker.",
			"Alderaan, ubicado en los Mundos del Núcleo, era un planeta terrestre cubierto de montañas. Durante las últimas décadas de la República Galáctica, fue gobernado por la Reina Breha Organa y representado en el Senado Galáctico por su marido, el Senador Bail Organa.",
			"Yavin 4 fue la cuarta luna en órbita del gigante gaseoso Yavin Prime, cubierta de junglas. En algún momento durante la Guerra Civil Galáctica, albergó la base principal de la Alianza Para Restaurar la República, un grupo de luchadores de la resistencia que se oponían a la tiranía del Imperio Galáctico. Tras una gran batalla que tuvo lugar alrededor de Yavin, la Alianza trasladó su base a Hoth.",
			"Hoth era un helado y remoto planeta que fue el sexto planeta del sistema estelar del mismo nombre. En particular, albergó la Base Eco, sede temporal de la Alianza para Restaurar la República, hasta que el Imperio Galáctico localizó a los rebeldes, iniciando una gran confrontación conocida como la Batalla de Hoth.",
			"Dagobah era un planeta en el sistema Dagobah, y uno de los lugares más puros de la galaxia dentro de la Fuerza. Un mundo lejano lleno de pantanos y bosques, sirvió como refugio para el Gran Maestro Jedi Yoda durante su exilio tras la destrucción de la Orden Jedi. Fue allí donde Luke Skywalker recibió un entrenamiento avanzado en los caminos de la Fuerza bajo la tutela del Maestro Jedi Yoda y más tarde sería testigo de su muerte y transformación en la Fuerza.",
			"Bespin era un inmenso gigante gaseoso ubicado en las proximidades del sistema Anoat, un sector desolado de la galaxia. Bespin tenía varias lunas, y su masa gaseosa contenía un estrato delgado de atmósfera habitable. Sus capas eran una fuente rara de gas tibanna, que era cosechado y refinado en varios complejos mineros, como Ciudad Nube, una metrópoli opulenta suspendida en las enormes nubes ondulantes del planeta.",
			"Endor (también conocido como la Luna Boscosa de Endor o la Luna Santuario) era una pequeña luna boscosa que orbitaba el planeta del Borde Exterior de su mismo nombre y era el mundo naral de las especies inteligentes Ewoks y de Yuzzums.",
			"Naboo era un planeta abundante en el Borde Medio, cerca de la frontera de los Territorios del Borde Exterior. Fue el hogar de la especie gungan y de una población de humanos conocida como los Naboo.",
			"Coruscant (pronunciado /'kɔɹəsɑnt/), también conocido como Centro Imperial durante el reinado del Imperio Galáctico, fue una ecumenópolis—un planeta cubierto de ciudad, colectivamente conocida como Ciudad Galáctica— en el sistema Coruscant de los Mundos del Núcleo. Aunque era asunto de debate entre los historiadores, en general se creía que Coruscant era el planeta natal original de la humanidad.",
			"Kamino (pronunciado /kə'minoʊ/) era un planeta acuático ubicado en un sistema estelar extragaláctico que se encontraba al sur de la galaxia satélite Laberinto Rishi y más allá de la galaxia conocida. Estaba habitado por los kaminoanos, una raza de seres altos y esbeltos que eran considerados como una especie misteriosa con tendencia al hermetismo. También eran conocidos por su tecnología de clonación que finalmente condujo a la creación de un ejército clon para la República Galáctica."
		],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getHandleChange:(e) => {
				const store= getStore();
				setStore({personajesF:store.personajes.filter((persona)=>{
					return persona.name.includes(e.target.value);
				})}
				)
				
			},
			

			//funcion buscar
			getBuscar:(id)=>{
				fetch("https://www.swapi.tech/api/people/"+id)
				.then(response => response.json())
				.then(result => setStore({ buscador: result.results }))
				.catch(error => console.log("DANGER", error))

			},


			//funcion borrar
			getBorrar:(id)=>{
				const store= getStore();
				const borrar= store.favorites.filter((e,i)=> i !==id);
				setStore({favorites: borrar});
			},


			//funcion agregar
			getAddTask: (i) => {
				const store = getStore();
				let guardar = 0;
				store.favorites.map(each => {
					if(each.i === i){
						guardar =1;
					}
				});
				if (guardar == 0) {
				setStore({favorites: [...store.favorites,{name:i}]
				});
				}

			},
			//funcion traer datos de los dellates de todos los planetas
			getPlaneta: (id) => {
				fetch("https://www.swapi.tech/api/planets/" + id)
					.then(response => response.json())
					.then(result => setStore({ planeta: result.result }))
					.catch(error => console.log("DANGER", error))
			},
			//funcion traer datos de los planetas
			getPlanetas: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json())
					.then(result => setStore({ planetas: result.results }))
					.catch(error => console.log("DANGER", error))
			},

			//funcion traer a todos los personajes
			getPersonajes: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(result => setStore({ personajes: result.results }))
					.catch(error => console.log("DANGER", error))

			},
			// funcion traer los detalles de los personajes
			getPersonaje: (id) => {
				fetch("https://www.swapi.tech/api/people/" + id)
					.then(response => response.json())
					.then(result => setStore({ personaje: result.result }))
					.catch(error => console.log("DANGER", error))
			},



			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
