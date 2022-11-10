import React, { useState } from "react";
import { useContext } from "react";
import { PlacesContext, MapContext } from "../context";
import { Feature } from "../interfaces/places";

export const SearchResult = () => {
  const { places, isLoadingPlaces,userLocation } = useContext(PlacesContext);
  const [isActive, setIsActive] = useState("");
  const { map, getRouteBetweenPoints } = useContext(MapContext);

  const onPlacesClick = (place: Feature) => {
    const [lng, lat] = place.center;
    setIsActive(place.id);
    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };

  const getRoute = (place: Feature) => {
    if(!userLocation)return;
    const[lng,lat]=place.center
    getRouteBetweenPoints(userLocation,[lng,lat]);
  };

  if (isLoadingPlaces) {
    return (
      <div className="alert alert-primery mt-2">
        <h6>Buscando</h6>
        <p>Espere por favor</p>
      </div>
    );
  }

  if (places.length === 0) {
    return <></>;
  }

  return (
    <ul className="list-group mt-2">
      {places.map((place) => (
        <li
          key={place.id}
          className={`${
            isActive === place.id ? "active" : ""
          } list-group-item list-group-item-action pointer`}
          onClick={() => onPlacesClick(place)}
        >
          <h6>{place.text}</h6>
          <p
            style={{
              fontSize: "12px",
            }}
          >
            {place.place_name}
          </p>
          <button
          onClick={()=>getRoute(place)}
            className={`btn btn-sm ${
              isActive === place.id
                ? "btn-outline-light"
                : "btn-outline-primary"
            }`}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
