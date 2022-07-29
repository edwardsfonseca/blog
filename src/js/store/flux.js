const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personaje:[],
			personajes:[],
			planets:[],
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

		// function personajes de starwar
		getPlanets:()=>{
			fetch("https://www.swapi.tech/api/planets/")
			.then(response=> response.json())
			.then(result => setStore({planets:result.results}))
			.catch(error=> console.log("DANGER",error))
		},


		getPersonajes:()=>{
			fetch("https://www.swapi.tech/api/people/")
			.then(response => response.json())
			.then(result => setStore({personajes:result.results}))
			.catch(error => console.log("DANGER",error))

		},
		getPersonaje:(id)=>{
			fetch("https://www.swapi.tech/api/people/" + id )
			.then(response => response.json())
			.then(result => setStore({personaje:result.result}))
			.catch(error => console.log("DANGER",error))
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
