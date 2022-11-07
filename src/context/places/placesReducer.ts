import { PlacesState } from './PlacesProvider';


type PlacesAction={
    type:'setUserLoacation',
    payload:[number,number]
}

export const placesReducer=(state:PlacesState,action:PlacesAction):PlacesState=>{

    switch (action.type) {
        case 'setUserLoacation':
            
           return{
            ...state,
            isLoading:false,
            userLocation:action.payload
           }
    
        default:
            return state;
    }

}