import { PlacesContext } from "./PlacesContext";
import { useReducer, useEffect } from 'react';
import { placesReducer } from './placesReducer';
import { getUserLoaction } from '../../helper';



export interface PlacesState {
    isLoading:boolean;
    userLocation?:[number,number];
}

const INITIAL_STATE:PlacesState={
    isLoading:true,
    userLocation:undefined
}

interface Props{
    children:JSX.Element|JSX.Element[]
}

export const PlacesProvider = ({children}:Props) => {

    const [state, dispatch] = useReducer(placesReducer,  INITIAL_STATE)

    useEffect(() => {
    getUserLoaction()
        .then(lngLat=>dispatch({type:'setUserLoacation',payload:lngLat}))
    
    
    }, [])
    

  return (
    <PlacesContext.Provider value={{
        ...state,
    }}>
        {children}
    </PlacesContext.Provider>
  )
}
