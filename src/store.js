export const initialStore=()=>{
  return{
    message: null,
    planets:[],
    people:[],
    vehicles:[],
    planets:[],
    favorites:[],
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_characters':
      return{
        ...store,
        people:action.payload
      };

    case 'get_vehicles':
        return{
          ...store,
          vehicles:action.payload
        };

     case 'get_planets':
          return{
            ...store,
            planets:action.payload
          };
    case 'add_favorites':
      return{
        ...store,
        favorites:[...store.favorites, action.payload]
      };

    case 'remove_favorites':
      return{
        ...store,
        favorites:store.favorites.filter(item=>!(item.uid == action.payload.uid && item.type == action.payload.type))
      };
    
    default:
      throw Error('Unknown action.');
  }    
}
