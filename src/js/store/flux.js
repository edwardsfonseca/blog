const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			personaje: [],
			personajes: [],
			planetas: [],
			planeta: [],
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
		imagenplaneta:[
			"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357",
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
			
			getBorrar:(id)=>{
				const store= getStore();
				const NuevoFavorito= store.favorites.filter((e,i)=> i !==id);
				setStore({favorites: NuevoFavorito});
			},



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

			getPlaneta: (id) => {
				fetch("https://www.swapi.tech/api/planets/" + id)
					.then(response => response.json())
					.then(result => setStore({ planeta: result.result }))
					.catch(error => console.log("DANGER", error))
			},

			getPlanetas: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json())
					.then(result => setStore({ planetas: result.results }))
					.catch(error => console.log("DANGER", error))
			},


			getPersonajes: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(result => setStore({ personajes: result.results }))
					.catch(error => console.log("DANGER", error))

			},
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
