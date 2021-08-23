import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import styled from "styled-components";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  {
    markerOffset: -30,
    name: "Block A ",
    coordinates: [-58.3816, -34.6037],
  },

  {
    markerOffset: 15,
    name: "Block D ",
    coordinates: [31.315267239082093, -16.4897],
  },
  {
    markerOffset: 15,
    name: "Block G",
    coordinates: [-84.0721, 4.711],
  },


  
  { markerOffset: 15, name: "Block N ", coordinates: [-70.6693, -33.4489] },
  {
    markerOffset: 15,
    name: "barakhamba Road",
    coordinates: [-74.0721, 4.711],
  },




  {
    markerOffset: 15,
    name: "Block D",
    coordinates: [-95.021, 4.711],
  },
];

const Map = () => {
  return (

    <StyledMap className = "map">

    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 20, 0],
        scale: 400,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .filter((d) => d.properties.REGION_UN === "Americas")
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
    </StyledMap>

  );
};

const StyledMap = styled.div`

  width:50%;




`;

export default Map;
