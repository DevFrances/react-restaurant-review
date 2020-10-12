import React, { Component } from 'react'
import Listing from './Listing'
import Modal from './Modal.js'
import AddReview from './addReview.js'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';


function MapContainer({ restaurants, addRestaurant, addReview}) {
  
  const containerStyle = {
    width: '800px',
    height: '500px',
    float: 'right'
  };
      
  const center = {
    lat: 6.5088,
    lng: 3.3137
  };
  const onLoad = marker => {
    console.log('marker: ', marker)
  }
   const [selectedMarker, setSelectedMarker] = React.useState(null);

  const [clickedLng, setClickedLng] = React.useState(0);
  const [clickedLat, setClickedLat] = React.useState(0);
  const userClick = (event) => {
    let lat = event.latLng.lat();
    let lng = event.latLng.lng();
    setClickedLat(lat);
    setClickedLng(lng);
    console.log(lat)
    console.log(lng)

    //  Do something like opening modal
    document.getElementById('myModal').style.display = "inline-block";
let closeMap = document.getElementById('close')
closeMap.addEventListener('click', function(){
    document.getElementById('myModal').style.display = "none"
  })
  }

  return (
    <div>
      <div class="container-fluid" data-spy="scroll" data-target=".navbar" data-offset="50">
        <div class="row">
          <div class="col-md-8 " >

          </div>
          <LoadScript
            googleMapsApiKey="AIzaSyAMDtC9Z6uMrTV_NsWjjdeskdGE5W-hITY"
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}            
               onClick={event => userClick(event)}
              >


              <Marker
                onLoad={onLoad}
                position={center}
                
                />
                         
      {restaurants.map((test, index)=>{  
        let lat =parseFloat( test.lat);
        let lng = parseFloat(test.lng);
        return <Marker
        key ={index}
        position = {{lat:lat, lng:lng}}
        onClick={() => {
                setSelectedMarker(test);
               }}
        >
 
          </Marker>
      })}
    {selectedMarker && (
   <InfoWindow
      onCloseClick={() => {
         setSelectedMarker(null);
      }}
     
      position={{
         lat: parseFloat(selectedMarker.lat),
         lng: parseFloat(selectedMarker.lng)
      }}
   >
     
     <div className="resto row">
                        <div className="col-md-7">
                          <p>
                            <li><b>Restaurant: </b>{selectedMarker.restaurantName}</li>
                            <li><b>Address: </b>{selectedMarker.address}</li>
                       </p>                                              
                        </div>
                        
                      </div>
   </InfoWindow>
)}
            </GoogleMap>
          </LoadScript>
          <Listing
      restaurantList={restaurants} 
          
          />
          <Modal
          latitude = {clickedLat}
          longitude = {clickedLng}
          restaurantModal = {restaurants}
          addRestaurant = {addRestaurant}
          />
          <AddReview
          addReview = {addReview}
          />

        </div>
      </div>
    </div>
  )
}


export default MapContainer;