import { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import "./btnfav.css"


export const BtnFav = ({ linked }) => {
    const { store, dispatch } = useGlobalReducer()
    const [turnOn, setTurnOn] = useState(false)



    const handleFavClick = () =>{
        if (turnOn) {
            dispatch({ type: "remove_favorites", payload: { uid: linked.uid, type: linked.type } })
        } else {
            dispatch({ type: "add_favorites", payload: linked })
        }
        setTurnOn(!turnOn)
    }
  


    return (
        <div>
            <button className="heartbutton" onClick={handleFavClick}>
                {turnOn ? "❤️" : "🤍"}
            </button>

            

            {/* <label class="container">
                <input checked="checked" type="checkbox" onClick={addFavoritos} />
                <div class="checkmark">
                    <svg viewBox="0 0 256 256">
                        <rect fill="none" height="256" width="256"></rect>
                        <path
                            d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                            stroke-width="20px"
                            stroke="#000"
                            fill="none"
                            
                        ></path>
                    </svg>
                </div>
            </label> */}
        </div>

    )

}