import React, { Component } from 'react';
import axios from 'axios'
import NavBar from './NavBar';
import MapContainer from './MapContainer';
 import Filter from'./Filter.js';
import Data from './db.js'
import AddReview from './addReview.js'

function RestaurantReview(){ 
  const [filterRestaurants, setFilterRestaurants] = React.useState([])
  const [restaurants, setRestaurant] = React.useState([])
  let jsonRestaurant = Data
  React.useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=6.5088,3.3137&radius=2000&type=restaurant&key=AIzaSyAMDtC9Z6uMrTV_NsWjjdeskdGE5W-hITY`
      )
      .then((res) => {
     let results= res.data.results
        let newArr =results.map((item) =>{
            
           return   {
                id: 1,
                restaurantName: item.name,
                address: item.vicinity,
                lat: item.geometry.location.lat,
                lng: item.geometry.location.lng,
                picURL:'https://lh5.googleusercontent.com/p/AF1QipMfCQ-dXE9EqgiWkJr9QQRshjKpDmPAjzWel7fE=w408-h305-k-no',
                rating:0,
                ratings: [
                  {
                    stars: 4,
                    comment: 'Great! But not many veggie options.'
                  },
                  {
                    stars: 5,
                    comment: 'My favorite restaurant!'
                  },
                ],
              }
        })
       console.log(jsonRestaurant)
        jsonRestaurant = jsonRestaurant.concat(newArr)
        jsonRestaurant.map((item)=>{
          let rating = 0;
          item.ratings.forEach((review)=>{
            rating += review.stars
          })
          rating = rating/item.ratings.length;
          item.rating = Math.round(rating)
          return item
        })
         setRestaurant(jsonRestaurant) ;
        //  updatingthe filter restaurant
        setFilterRestaurants(jsonRestaurant)
        console.log(jsonRestaurant)
      });
  }, [6.5088, 3.3137]); 

 function handleRestaurant(restaurant){
   setRestaurant((prevRestaurantList)=>{
     return [...prevRestaurantList, restaurant]
   })
   setFilterRestaurants((prevFilterRestaurant)=>{
    return [...prevFilterRestaurant, restaurant]
  })
 }

 function addReview(review){
let listOfRestaurant = restaurants;
listOfRestaurant[review.index].ratings.push({stars: review.stars,comment: review.comment});
  setRestaurant(listOfRestaurant);
  setFilterRestaurants(listOfRestaurant)
  console.log(filterRestaurants)
 }

 function filterRestaurant(rating){
  let listOfRestaurant = restaurants;
  let newList =[];
  listOfRestaurant.forEach((restaurant)=>{
    if(restaurant.rating == rating){
      newList.push(restaurant)
    }
  })
  setFilterRestaurants(newList);
  console.log(rating)
  console.log(restaurants)
 }
 
   return (
      <div>
        <NavBar/>
        <div class="row">
        <div class="col-md-8"></div>
                <div class="col-md-4  filter">

        <Filter
        filterByRating = {filterRestaurant}
        />
        </div>
        </div>
        <MapContainer
        
               restaurants = {filterRestaurants}
               addRestaurant = {handleRestaurant}
               addReview = {addReview}
        />
        <AddReview/>
      </div>
    );
  
}
export default RestaurantReview;