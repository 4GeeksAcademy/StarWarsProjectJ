import { Link, useParams } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { SingleCard } from "../components/SingleCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React ,{ useEffect, useState } from "react";
import { BtnFav } from "../components/BtnFav.jsx";
import "./Home.css";


export const Home = () => {

	const {uid} =useParams();
	const { store, dispatch } = useGlobalReducer();
	const {loading, setLoading} = useState(true);

	{/* GET DE LOS PERSONAJES */}
	useEffect(() => {
		
		fetch("https://swapi.tech/api/people", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		})
			.then((resp) => resp.json())
			.then(data => {
				dispatch({ type: "get_characters", payload: data.results })

		})

		fetch("https://swapi.tech/api/vehicles", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		})
			.then((resp) => resp.json())
			.then(data => {
				dispatch({ type: "get_vehicles", payload: data.results })

		})

		fetch("https://swapi.tech/api/planets",)
			.then((resp) => resp.json())
			.then(data => {
				dispatch({ type: "get_planets", payload: data.results.slice(1) })

		})


			
	}, [])


	{/* GET DE LOS PERSONAJES */}
	

	console.log(store.people)
	return (
		<div className="text-center mt-5 ">
			{loading ? (
			<div className="load-contain">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
			):(
				<div className="container text-center ml-5">
					{/* CHARACTERS */}
					<h1>CHARACTERS</h1>
					<div className="row justify-content-center align-items-center mb-5">
					{Array.isArray(store.people) && store.people?.map((chara,index)=>{
						return(
							<div key={index} className="card-main m-3 p-3 bg-secondary" >
								<div className="card-details ">
									<h5 className="card-title">{chara.name}</h5>
									<img
										src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${chara.uid}.jpg`}
										alt="Characters" className="characterimg" />
									
								</div>
								
								<Link to={"/characters/" + chara.uid}>
                        			<button className="card-button">MORE</button>
                        		</Link>
								<div className="card-fav">
									<BtnFav linked= {{uid:chara.uid, name:chara.name, type: "people"}}/>
								</div>

							</div>
						)
						})}
					</div>

					{/* VEHICLES */}
					<h1>VEHICLES</h1>
					<div className="row justify-content-center align-items-center mb-5">
					{Array.isArray(store.vehicles) && store.vehicles?.map((chara,index)=>{
						return(
							<div key={index} className="card-main m-3 p-3 bg-secondary">
								<img 
								src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${chara.uid}.jpg`}
								 alt="Vehicles" className="characterimg" />
								<h5 className="card-title">{chara.name}</h5>
								<Link to={"/vehicles/" + chara.uid}>
                        			<button className="card-button">MORE</button>
                        		</Link>
								<div className="card-fav">
									<BtnFav linked= {{uid:chara.uid, name:chara.name, type: "vehicles"}}/>
								</div>
							</div>

						)
						})}
					</div>


					{/* PLANETS */}
					<h1>PLANETS</h1>
					<div className="row justify-content-center align-items-center mb-5">
					{Array.isArray(store.planets) && store.planets?.map((chara,index)=>{
						return(
							<div key={index} className="card-main m-3 p-3 bg-secondary">
								<img 
								src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${chara.uid}.jpg`}
								 alt="Characters" className="characterimg" />
								<h5 className="card-title">{chara.name}</h5>
								
									<Link to={"/planets/" + chara.uid}>
                        				<button className="card-button">MORE</button>
                        			</Link>
									<div className="card-fav" >
										<BtnFav className="card-fav" linked= {{uid:chara.uid, name:chara.name, type: "vehicles"}}/>
									</div>
								
								
							</div>

						)
						})}
					</div>
				</div>
			)}
			
			
		</div>
	);
}; 


