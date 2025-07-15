import React, { useRef, useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import useMediaQuery from "../Hooks/useMediaQuery";
import "./MapWithStreetView.css"

const center = { lat: 47.6620431, lng: -122.3054882 };
const mapCenter = { lat: 47.6589717, lng: -122.3054882 };


// Display steetview with map next to it
function MapWithStreetView() {
    const mapRef = useRef(null);
    const panoRef = useRef(null);
    const [map, setMap] = useState(null);

    // Update street view on map change
    useEffect(() => {
        if (!map || !window.google || !panoRef.current) return;

        const panorama = new window.google.maps.StreetViewPanorama(panoRef.current, {
            position: center,
            zoom: 0.75,
            pov: {
                heading: 93,
                pitch: 0,
            },
        });

        map.setStreetView(panorama);
    }, [map]);

    // Return styled component
    return ( 
        <>
            <div className="streetview-wrapper">
            {/* Street View container */}
            <div className="streetview-pano" ref={panoRef}/>
            {/* Map container */}
            <GoogleMap
                mapContainerClassName="streetview-map"
                center={mapCenter}
                zoom={15}
                onLoad={(mapInstance) => {
                mapRef.current = mapInstance;
                setMap(mapInstance);
                }}
            />
            </div>
        </>
    );
}

export default MapWithStreetView;