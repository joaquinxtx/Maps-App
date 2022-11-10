import { directionsApi } from "../apis";
import { DirectionsResponse } from '../interfaces/directions';



export const KmsMinutes = ({kms,minutes}:any) => {
   
    
    
  return (
    <div  
    style={{
        position:'fixed',
        top:'80px',
        right:'29px',
        zIndex:999,
        padding:'10px',
        borderRadius:'8px',
        background:'#068317',
        color:'white',
        fontWeight:600
        
    }}>
        kms:{kms} minutes:{minutes}
       
    </div>
  )
}
