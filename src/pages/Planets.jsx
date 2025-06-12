import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Planets = () => {

    const { uid2 } = useParams();
    const { store, dispatch } = useGlobalReducer();
    const {loading, setLoading} = useState(true);
    const navigate = useNavigate();
    const id = parseInt(uid2)



    useEffect(() => {

       
        fetch(`https://swapi.tech/api/planets/${uid2}`)
            .then((resp) => resp.json())
            .then(data => {
                dispatch({ type: "get_planets", payload: data.result.properties })
                
            })
            .catch(error=>{
                console.error("Ha salido un error", error )
            
            })
    }, [uid2,dispatch])

    
    // const getImage = (category,id)=> `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${category}/${id}.jpg`;
    return (
    
        <div>
            {loading ? (
                <div className="load-contain">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ):(
            <div className="container mt-5">
              

                {store.planets && (
                        <div className="card-futuristic-card p-4" style={{ background: "linear-gradient(135deg, #232526 0%, #414345 100%)", color: "#bdba00", borderRadius: "20px", boxShadow: "0 0 30px rgba(251, 255, 0, 0.63)" }}>
                            <div className="row align-items-center">
                                <div className="col-md-4 text-center">
                                    <img
                                        src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${id}.jpg`}
                                        alt="Foto del personaje"
                                        style={{ border: "4px solid rgba(251, 255, 0, 0.63)", borderRadius: "15px", width: "100%", boxShadow: "0 0 20px rgba(251, 255, 0, 0.63)" }}
                                    />
                                </div>

                                <div className="col-md-8">
                                    <h2 style={{ fontFamily: "'Orbitron', monospace", fontWeight: "bold", letterSpacing: "3px", color: "rgba(251, 255, 0, 0.99)", textShadow: "0 0 10px rgba(251, 255, 0, 0.99)" }}>
                                        {store.planets.name}
                                    </h2>
                                    <hr style={{ borderTop: "2px dashed rgba(251, 255, 0, 0.99)", width: "60%" }} />
                                    <div style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
                                        <strong>Clima:</strong> <span style={{ color: "#fff" }}>{store.planets.climate}</span>
                                    </div>
                                    <div style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
                                        <strong>Diámetro:</strong> <span style={{ color: "#fff" }}>{store.planets.diameter} km</span>
                                    </div>
                                    <div style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
                                        <strong>Población:</strong> <span style={{ color: "#fff" }}>{store.planets.population} </span>
                                    </div>
                                    <div style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
                                        <strong>Período de rotación:</strong> <span style={{ color: "#fff" }}>{store.planets.rotation_period} h</span>
                                    </div>
                                    <div style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
                                        <strong>Terreno:</strong> <span style={{ color: "#fff" }}>{store.planets.terrain} </span>
                                    </div>
                                    <div style={{ fontSize: "1.1rem" }}>
                                        <strong>Gravedad:</strong> <span style={{ color: "#fff" }}>{store.planets.gravity}</span>
                                    </div>
                                </div>
                            </div>



                        </div>

                    )}

                    <div className="text-center mt-5">
                        <button
                            className="bac-button btn btn-lg"
                            onClick={() => navigate("/")}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.boxShadow = "0 0 40px rgb(195, 236, 12)";
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 0 20px rgb(195, 236, 12)";
                            }}
                        >
                            <span style={{ marginRight: "10px", fontSize: "1.2em" }}>⮌</span>
                            Back Home
                        </button>

                    </div>





                </div>
            )}


        </div>





    )
}
