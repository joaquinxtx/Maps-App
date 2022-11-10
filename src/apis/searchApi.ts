import axios from 'axios';

const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit:4,
        lenguage:'es',
        access_token:'pk.eyJ1Ijoiam9hcXVpbnh0eCIsImEiOiJjbGE2dGd6ejYxMTQwM3BybjdvMzA5cmZuIn0.yqCBM4RkM8yWEfppzA1FLg'
    }
})

export default searchApi
