import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";


export const SingleCard = ({ chara }) => {
    const { store, dispatch } = useGlobalReducer();

    const addFavorites = () => {

    }


    return (
        <div>
            {/* <div className="card m-3 p-3 bg-secondary">
                {store.people.map((chara,index)=>{
                    <div key={index}>
                        <h5 className="card-title">{chara.name}</h5>
                        <Link to={"/characters/" + chara.uid}>
                        <button className="btn btn-primary">MORE</button>
                        </Link>
                        <button>♡</button>
                    </div>
                    
                })}
                



            </div> */}


            {/* <p className="text-primary">{chara.name}</p> */}
        </div>
    )
}

