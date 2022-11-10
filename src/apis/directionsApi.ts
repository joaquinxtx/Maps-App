import axios from 'axios';

const directionApi = axios.create({
    baseURL:'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives:false,
        geometries:'geojson',
        overview:'simplified',
        steps:false,
        
       
        access_token:'pk.eyJ1Ijoiam9hcXVpbnh0eCIsImEiOiJjbGE2dGd6ejYxMTQwM3BybjdvMzA5cmZuIn0.yqCBM4RkM8yWEfppzA1FLg'
    }
})

export default directionApi 