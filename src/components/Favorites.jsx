import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const Favorites = () =>{

    const {store,dispatch} = useGlobalReducer()
    const [isOn,setIsOn] = useState(false)

    const deleteFavoritos = (uid,type) =>{
        dispatch({type:"remove_favorites",payload:{uid,type}})
    }


    return(

        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle favorite-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites ({store.favorites.length}) 
            </button>
                
            <ul className="dropdown-menu" style={{ minWidth: "260px", maxWidth: "350px" }}>
                        {store.favorites.length === 0 ? (
                            <li>No favorites</li>
                        ) : (
                            store.favorites.map((like,i) => (
                                <li key={like.uid} className="dropdwn-item d-flex justify-content-between align-items-center">
                                    <span style={{ overflowWrap: "anywhere" }}>{like.name}</span>
                                    <button onClick={()=>deleteFavoritos(like.uid,like.type)} className="deletation">❌</button>
                                    
                                </li>
                            ))
                        )}
            </ul>

                
               
        </div>

    )
}

{/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}