import React, { Component } from 'react'

export default class Restaurant extends Component {
  constructor(props){
    super(props);
  this.popUpModal = this.popUpModal.bind(this);
  this.state={
    reviews: this.props.reviews
  }
  }
  
  popUpComment(){
    document.getElementById('myComment').style.display = "inline-block";
   
  }
  popUpModal(){
    document.getElementById('reviewModal').style.display = "inline-block";
    document.getElementById('index').value = this.props.index;
   
  }
  componentDidUpdate(prevProps){
   
      console.log(this.props.reviews)
      if(prevProps.reviews !== this.props.reviews) {
        this.setState({reviews: this.props.reviews});
      }
    
  }
    render() {
      
      let reviewsArray=[];
      this.props.reviews.forEach((item, index)=>{
          reviewsArray.push(<a class="dropdown-item"key={index} href="#"><b>Comment:</b> {item.comment}<br/><b>Rating:</b> {item.stars}<hr/></a>)
      })
        return (
        
                <div className="resto row">
                        <div  className="col-md-5"> <img src={this.props.picture} alt="cutleries"/> </div>
                        <div className="col-md-7">
                          <div>
                            <li><b>Restaurant: </b>{this.props.restaurantName}</li>
                            <li><b>Address: </b>{this.props.address}</li>
                            <li><b>Rating: </b> {this.props.rating}</li>                            
                            <div className="container">
                            <button onClick= {this.popUpModal}>Add Review</button>

                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  View Review(s)
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                  {reviewsArray}
                                  
                                </div>
                              </div>
                            </div>
                                                                             
                          </div>
                       
                          
                        </div>
                        
                      </div>
                     
            
        )
    }
}
