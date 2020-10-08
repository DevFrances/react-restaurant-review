import React, { Component } from 'react'
import AddReview from './addReview.js'
export default class Restaurant extends Component {
  constructor(props){
    super(props);
  this.popUpModal = this.popUpModal.bind(this);
  
  }
  popUpComment(){
    document.getElementById('myComment').style.display = "inline-block";
   
  }
  popUpModal(){
    document.getElementById('reviewModal').style.display = "inline-block";
    document.getElementById('index').value = this.props.index;
   
  }
    render() {
      
      let reviews=[];
      this.props.reviews.forEach((item)=>{
          reviews.push(<a class="dropdown-item" href="#"><b>Comment</b>{item.comment},<b>Rating</b>{item.stars}</a>)
      })
        return (
        
                <div className="resto row">
                        <div  className="col-md-5"> <img src={this.props.picture} alt="cutleries"/> </div>
                        <div className="col-md-7">
                          <p>
                            <li><b>Restaurant: </b>{this.props.restaurantName}</li>
                            <li><b>Address: </b>{this.props.address}</li>
                            <li><b>Rating: </b> {this.props.rating}</li>  
                            <li><b>Review: </b> {this.props.review}</li>  
                          
                            <div className="container">
                            <button onClick= {this.popUpModal}>Add Review</button>

                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  View Review(s)
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                  {reviews}
                                  
                                </div>
                              </div>
                            </div>
                                                                             
                          </p>
                       
                          
                        </div>
                        
                      </div>
                     
            
        )
    }
}
