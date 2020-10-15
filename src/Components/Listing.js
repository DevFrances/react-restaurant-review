import React, { Component } from 'react'
import Restaurant from './Restaurant.js'

export default class Listing extends Component {
   constructor(props){
    super(props);
    
   }
  render() {
    let restaurantListArray = [];
    this.props.restaurantList.forEach((item, index) => {
      
    restaurantListArray.push(
        <Restaurant
          key={index}
          index ={index}
          restaurantName={item.restaurantName}
          address={item.address}
          picture={item.picURL}
          reviews={item.ratings}   //the array that contains the reviews(comment and stars)       
          rating={item.rating}
        />,
      );
    
    });

    return (
      
         <div class="col-md-4 listings ">             
                 <div class="container overflow-auto resto-list">
                   {restaurantListArray}    
                 </div>                           
         </div>
                  
                    
      
    )
  }
}
