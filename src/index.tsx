/* eslint import/no-webpack-loader-syntax: off */ 
import React from 'react';
import ReactDOM from 'react-dom/client';
//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { MapsApp } from './MapsApp';
 
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hcXVpbnh0eCIsImEiOiJjbGE2dGd6ejYxMTQwM3BybjdvMzA5cmZuIn0.yqCBM4RkM8yWEfppzA1FLg';



if(!navigator.geolocation){
  alert('Tu navegador no tiene opcion de Geolocation')
  throw new Error('Tu navegador no tiene opcion de Geolocation')
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp/>
  </React.StrictMode>
);


