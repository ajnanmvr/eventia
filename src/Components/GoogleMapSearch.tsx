"use client";
import {
    useLoadScript,
    GoogleMap,
    MarkerF,
    CircleF,
  } from '@react-google-maps/api';
  import type { NextPage } from 'next';
  import { useMemo, useState } from 'react';
  import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from 'use-places-autocomplete';
  
  const styles = {
      homeWrapper: 'flex justify-center items-center',
      sidebar: 'mr-4 w-1/5 h-screen bg-gray-800',
      autocompleteWrapper: 'w-full h-screen',
      autocompleteInput: 'w-11/12 mx-auto mt-20 p-4 block border-2 border-yellow-400',
      suggestionWrapper: 'w-11/12 overflow-x-hidden list-none mx-auto block p-1',
    };

  const GoogleMapSearch: NextPage = () => {
    const [lat, setLat] = useState(27.672932021393862);
    const [lng, setLng] = useState(85.31184012689732);
  
    const libraries = useMemo(() => ['places'], []);
    const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

      
  
    const mapOptions = useMemo<google.maps.MapOptions>(
      () => ({
        disableDefaultUI: true,
        clickableIcons: true,
        scrollwheel: false,
      }),
      []
    );
  
    const { isLoaded } = useLoadScript({
    //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    googleMapsApiKey:"AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
      libraries: libraries as any,
    });
  
    if (!isLoaded) {
      return <p>Loading...</p>;
    }
  
    return (
      <div className={styles.homeWrapper}>
        <div className={styles.sidebar}>
          {/* render Places Auto Complete and pass custom handler which updates the state */}
          <PlacesAutocomplete
            onAddressSelect={(address) => {
              getGeocode({ address: address }).then((results) => {
                const { lat, lng } = getLatLng(results[0]);
  
                setLat(lat);
                setLng(lng);
              });
            }}
          />
        </div>
        <GoogleMap
          options={mapOptions}
          zoom={14}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: '800px', height: '800px' }}
          onLoad={(map) => console.log('Map Loaded')}
        >
          <MarkerF
            position={mapCenter}
            onLoad={() => console.log('Marker Loaded')}
          />
  
          {[1000, 2500].map((radius, idx) => {
            return (
              <CircleF
                key={idx}
                center={mapCenter}
                radius={radius}
                onLoad={() => console.log('Circle Load...')}
                options={{
                  fillColor: radius > 1000 ? 'red' : 'green',
                  strokeColor: radius > 1000 ? 'red' : 'green',
                  strokeOpacity: 0.8,
                }}
              />
            );
          })}
        </GoogleMap>
      </div>
    );
  };
  
  const PlacesAutocomplete = ({
    onAddressSelect,
  }: {
    onAddressSelect?: (address: string) => void;
  }) => {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: { componentRestrictions: { country: 'us' } },
      debounce: 300,
      cache: 86400,
    });
  
    const renderSuggestions = () => {
      return data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
          description,
        } = suggestion;
  
        return (
          <li
          className='py-2 px-1 bg-red-300 my-1 cursor-pointer'
            key={place_id}
            onClick={() => {
              setValue(description, false);
              clearSuggestions();
              onAddressSelect && onAddressSelect(description);
            }}
          >
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        );
      });
    };
  
    return (
      <div className={styles.autocompleteWrapper}>
        <input
          value={value}
          className={styles.autocompleteInput}
          disabled={!ready}
          onChange={(e) => setValue(e.target.value)}
          placeholder="123 Stariway To Heaven"
        />
  
        {status === 'OK' && (
          <ul className={styles.suggestionWrapper}>{renderSuggestions()}</ul>
        )}
      </div>
    );
  };
  
  export default GoogleMapSearch;